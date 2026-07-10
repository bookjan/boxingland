import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const deploy = path.join(root, 'deploy');
const errors = [];
const check = (condition, message) => {
  if (!condition) errors.push(message);
};
const read = (file) => readFileSync(file, 'utf8');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : file;
  });
}

function localTarget(reference, baseDirectory) {
  if (!reference || /^(?:[a-z]+:|\/\/|#)/i.test(reference) || reference.includes('${')) return null;
  const rawPath = reference.split(/[?#]/, 1)[0];
  if (!rawPath) return null;

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    errors.push(`Malformed local reference: ${reference}`);
    return null;
  }

  const target = decodedPath.startsWith('/')
    ? path.join(deploy, decodedPath.slice(1))
    : path.resolve(baseDirectory, decodedPath);
  check(target === deploy || target.startsWith(`${deploy}${path.sep}`), `Local reference leaves deploy/: ${reference}`);
  return target;
}

function checkLocalReference(reference, sourceFile) {
  const target = localTarget(reference, path.dirname(sourceFile));
  if (!target || (target !== deploy && !target.startsWith(`${deploy}${path.sep}`))) return;
  const candidates = [target];
  if (!path.extname(target)) candidates.push(`${target}.html`, path.join(target, 'index.html'));
  check(candidates.some(existsSync), `${path.relative(root, sourceFile)} references missing ${reference}`);
}

const catalogFile = path.join(deploy, 'assets/catalog/products.js');
const catalogContext = { window: {} };
try {
  vm.runInNewContext(read(catalogFile), catalogContext, { filename: catalogFile });
} catch (error) {
  errors.push(`Cannot load products.js: ${error.message}`);
}

const products = catalogContext.window.catalogProducts;
check(Array.isArray(products), 'products.js must expose window.catalogProducts');
const productList = Array.isArray(products) ? products : [];
const ids = new Set();
const slugs = new Set();
const referencedPdfs = new Set();

for (const product of productList) {
  const label = product.title || `product ${product.id ?? '?'}`;
  check(Number.isInteger(product.id) && product.id > 0, `${label} has an invalid id`);
  check(!ids.has(product.id), `${label} duplicates product id ${product.id}`);
  ids.add(product.id);
  check(typeof product.slug === 'string' && product.slug.startsWith(`${product.id}-`), `${label} slug is not tied to id ${product.id}`);
  check(!slugs.has(product.slug), `${label} duplicates slug ${product.slug}`);
  slugs.add(product.slug);

  const imageTarget = typeof product.img === 'string' ? localTarget(product.img, deploy) : null;
  check(Boolean(imageTarget) && existsSync(imageTarget), `${label} img is missing: ${product.img}`);

  check(product.pdfs === undefined || Array.isArray(product.pdfs), `${label} pdfs must be an array`);
  const pdfReferences = Array.isArray(product.pdfs) ? product.pdfs : [product.pdf];
  check(pdfReferences.length > 0, `${label} must have at least one PDF`);
  check(pdfReferences[0] === product.pdf, `${label} pdf must match the first pdfs entry`);
  const productPdfs = new Set();
  for (const reference of pdfReferences) {
    const target = typeof reference === 'string' ? localTarget(reference, deploy) : null;
    check(Boolean(target) && existsSync(target), `${label} pdf is missing: ${reference}`);
    check(!productPdfs.has(reference), `${label} repeats PDF ${reference}`);
    productPdfs.add(reference);
    if (target) referencedPdfs.add(target);
  }
}

const htmlFiles = walk(deploy).filter((file) => file.endsWith('.html'));
for (const htmlFile of htmlFiles) {
  const html = read(htmlFile);
  const markup = html.replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>');
  const tags = markup.match(/<[a-z][^>]*>/gi) || [];
  const htmlIds = new Set();

  for (const tag of tags) {
    const id = tag.match(/\sid\s*=\s*(["'])(.*?)\1/i)?.[2];
    if (id) {
      check(!htmlIds.has(id), `${path.relative(root, htmlFile)} duplicates HTML id ${id}`);
      htmlIds.add(id);
    }

    for (const match of tag.matchAll(/\s(?:src|href|poster|data-src)\s*=\s*(["'])(.*?)\1/gi)) {
      checkLocalReference(match[2], htmlFile);
    }
    for (const match of tag.matchAll(/\ssrcset\s*=\s*(["'])(.*?)\1/gi)) {
      for (const candidate of match[2].split(',')) checkLocalReference(candidate.trim().split(/\s+/)[0], htmlFile);
    }
  }

  for (const match of html.matchAll(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi)) {
    checkLocalReference(match[2].trim(), htmlFile);
  }
}

const productHtml = read(path.join(deploy, 'product.html'));
const sitemap = read(path.join(deploy, 'sitemap.xml'));
check(/<meta\s+name=["']robots["']\s+content=["'][^"']*\bnoindex\b/i.test(productHtml), 'product.html must be noindex');
check(!/<loc>[^<]*\/product(?:\.html)?\/?<\/loc>/i.test(sitemap), 'sitemap.xml must not include the noindex product viewer');

function parseHeaders(source) {
  const rules = new Map();
  let current;
  for (const line of source.split(/\r?\n/)) {
    if (!line.trim()) continue;
    if (!/^\s/.test(line)) {
      current = new Map();
      rules.set(line.trim(), current);
      continue;
    }
    const separator = line.indexOf(':');
    if (current && separator > 0) current.set(line.slice(0, separator).trim().toLowerCase(), line.slice(separator + 1).trim());
  }
  return rules;
}

const headerRules = parseHeaders(read(path.join(deploy, '_headers')));
const header = (rule, name) => headerRules.get(rule)?.get(name.toLowerCase()) || '';
const requireParts = (value, parts, label) => {
  for (const part of parts) check(value.toLowerCase().includes(part.toLowerCase()), `${label} must include ${part}`);
};

check(header('/*', 'X-Content-Type-Options').toLowerCase() === 'nosniff', 'Global X-Content-Type-Options must be nosniff');
check(Boolean(header('/*', 'Referrer-Policy')), 'Global Referrer-Policy is missing');
requireParts(header('/*', 'Content-Security-Policy'), ["base-uri 'none'", "object-src 'none'", "frame-ancestors 'self'", "form-action 'none'"], 'Global Content-Security-Policy');
check(header('/*', 'X-Frame-Options').toUpperCase() === 'SAMEORIGIN', 'Global X-Frame-Options must be SAMEORIGIN');
requireParts(header('/*', 'Strict-Transport-Security'), ['max-age='], 'Global Strict-Transport-Security');
requireParts(header('/*', 'Permissions-Policy'), ['camera=()', 'microphone=()', 'geolocation=()'], 'Global Permissions-Policy');
for (const rule of ['/assets/*.jpg', '/assets/*.png', '/assets/*.webp', '/assets/*.mp4']) {
  requireParts(header(rule, 'Cache-Control'), ['max-age=604800'], `${rule} Cache-Control`);
}
for (const rule of ['/assets/catalog/products.js', '/assets/catalog/pdf/*']) {
  requireParts(header(rule, 'Cache-Control'), ['max-age=0', 'must-revalidate'], `${rule} Cache-Control`);
}

const allPdfs = walk(path.join(deploy, 'assets/catalog/pdf')).filter((file) => file.endsWith('.pdf'));
const orphanPdfs = allPdfs.filter((file) => !referencedPdfs.has(file));

if (errors.length) {
  console.error(`Site validation failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Site validation passed: ${productList.length} products, ${htmlFiles.length} HTML files.`);
}
console.log(`Orphan PDF report: ${orphanPdfs.length} of ${allPdfs.length} files are not referenced by products (informational).`);
