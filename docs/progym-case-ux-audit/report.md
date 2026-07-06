# PROGYM Case Page UX Audit

Source: https://www.progym.com.tw/case/  
Date: 2026-07-06  
Scope: case listing, category filters, case detail page, mobile behavior. Online checkout is excluded for our site, but equipment/product/service inquiry is included.

## Captured Evidence

Screenshots are saved in `docs/progym-case-ux-audit/screenshots/`.

1. `01-case-desktop-hero.png` - desktop hero with cookie banner. Health: good visual direction, banner blocks content until accepted.
2. `02-case-desktop-filters-grid.png` - desktop filters and first card row. Health: strong category model.
3. `03-case-desktop-cards.png` - desktop case card grid. Health: dense and useful, but some card text/icon rendering is weak.
4. `04-case-category-school.png` - category state for "各級學校". Health: selected state is clear.
5. `05-case-detail-desktop-top.png` - case detail top. Health: clear title and category.
6. `06-case-detail-desktop-gallery.png` - case detail story/FAQ area. Health: strong solution narrative.
7. `07-case-mobile-hero-filters.png` - mobile hero and filters. Health: good responsive simplification.
8. `08-case-mobile-cards.png` - mobile cards. Health: usable, but bottom commerce bar steals space.
9. `09-case-mobile-category-dropdown.png` - mobile category dropdown expanded. Health: good for many categories.
10. `10-case-mobile-menu.png` - mobile main menu. Health: simple, but commerce links are not needed for our image site.

## What PROGYM Is Doing Well

### 1. Classification Starts From Buyer Context

Their first-level categories are not product types. They are buyer/site contexts:

- 軍警消單位
- 各級學校
- 國民運動中心
- 健身房 / 工作室
- 飯店 / 社區
- 其他
- 所有案例

This is the right mental model for a service/image site. A visitor usually thinks "I am building a school gym / dojo / training room", not "I need SKU CF195".

### 2. Tags Represent Needs, Not Audience

The second layer is tags:

- 運動空間規劃
- 商用健身器材
- 專業防焰地墊
- 運動相關設備

This makes browsing flexible without creating dozens of top-level categories. It also lets one case appear in multiple needs.

### 3. Case Cards Are Small Sales Arguments

Each case card combines:

- photo
- category
- case title
- short "used equipment/materials" sentence
- tags

That is enough for scanning. It tells the visitor: "this project is similar to mine, and these are the products/services involved."

### 4. Case Detail Pages Turn Gallery Into Solution Proof

The inspected case detail page does more than show photos. It includes:

- project title and category
- before/after or feature photo block
- problem-oriented heading
- explanatory copy
- FAQ sections
- selected equipment/products
- related cases
- related articles

This is the strongest pattern to copy. It converts a portfolio page into a consultative sales page.

### 5. Mobile Filter Pattern Is Good

On mobile, PROGYM turns first-level categories into one dropdown, while keeping tags as pills below. This avoids wrapping too many buttons and keeps filtering compact.

## What We Should Not Copy

### 1. Commerce UI

PROGYM has cart, order lookup, member login, checkout, and online shopping links. For our current image-site goal, skip these.

Replace with:

- LINE 諮詢
- 取得場地規劃建議
- 聯絡我們
- 下載型錄 / 索取報價

On mobile, the fixed bottom bar should be:

- LINE 諮詢
- 看實績
- 聯絡我們

### 2. Product Catalog As Primary Navigation

PROGYM nav has "所有商品" and "線上購物". For our site, product is supporting evidence, not the main journey.

Use:

- 關於我們
- 解決方案
- 實績案例
- 產品與品牌
- 知識文章
- 聯絡我們

### 3. Low-Contrast Dark-On-Dark Areas

The dark visual style is strong, but several areas have gray text on black/dark gray. It feels premium but can become hard to read, especially on mobile.

Keep the dark industrial feel, but use stronger contrast for body text, card descriptions, and inactive filters.

### 4. Encoding/Icon Glitches

Some cards show visible `�...` style broken text/icon areas in screenshots. Avoid icon-font dependency for important labels. Use inline text labels or a reliable icon library.

### 5. Tags Without Clear Result Feedback

The tags are useful, but the page does not clearly show "X results found" or which filters are combined. For our site, show selected filters and result count.

## Recommended Positioning For Our Site

The site should not feel like a general sports-equipment catalog. It should feel like a boxing course brand first, with equipment/products/services/consulting as the second business layer.

Primary promise:

- 拳擊課程
- 拳擊體能訓練
- 真實訓練環境
- 教練專業與安全感

Secondary offer:

- 拳擊與搏擊設備
- 地墊 / 牆墊 / 柱墊 / 擂台
- 商用健身器材
- 場地規劃與諮詢
- 企業、學校、場館設備採購協助

## Recommended Information Architecture

### Main Navigation

Use course conversion as the main path:

- 首頁
- 拳擊課程
- 教練與環境
- 設備與服務
- 實績案例
- 常見問題
- 聯絡諮詢

Skip these for now:

- 購物車
- 會員登入
- 訂單查詢
- 前往結帳

### Primary Classification: Course Intent

The first filter/category for a visitor should be why they want boxing:

- 新手入門
- 拳擊體能
- 技術訓練
- 一對一 / 小班
- 團體體驗

If a category is not a real course you offer yet, do not publish it. Add it only when it exists.

### Secondary Classification: Equipment / Service Need

Equipment should sit under `設備與服務`, not compete with boxing courses:

- 拳擊設備：拳擊台、沙袋、手靶、搏擊訓練設備
- 安全防護：地墊、牆墊、柱墊、防護軟墊
- 場地建置：場地規劃、尺寸配置、Logo 客製
- 商用器材：力量架、啞鈴、槓片、功能訓練器材
- 兒童/學校/軍警設備：只作為設備銷售與案例，不作為課程分類

### Brand Should Support Credibility

Brands can appear as badges on product/service pages:

- CROSSMAX / 科邁斯
- GYMXF
- GYMPAC
- Dollamur / Dollumar
- 飛樂克斯

Do not make brand the top-level navigation. Most course visitors do not care about brand names until they are evaluating equipment or consulting.

## Suggested Page Structure

### Home Page

1. Hero
   - Title: 拳擊課程 / Boxing Training
   - Subtitle: 從新手入門到體能訓練，用真實拳擊訓練建立力量、節奏與反應
   - Primary CTA: 預約體驗
   - Secondary CTA: LINE 諮詢
   - Visual: real boxing class/training photo, not equipment catalog imagery

2. Course cards
   - 新手入門
   - 拳擊體能
   - 技術訓練
   - 一對一 / 小班

3. Why train here
   - 教練指導
   - 安全訓練
   - 真實拳擊設備
   - 適合零基礎

4. Equipment/service strip
   - "也提供拳擊設備、地墊、場地規劃與採購諮詢"
   - CTA: 查看設備與服務

5. Case/space proof
   - Use PROGYM-style cards, but focus on boxing class environment and equipment installs.

6. FAQ + final CTA

### Boxing Course Page

1. Course overview
2. Who it is for
3. Class formats
4. Training flow
5. Coach/environment photos
6. FAQ
7. CTA: 預約體驗 / LINE 諮詢

### Equipment & Services Page

Use PROGYM's two-layer filter pattern here, not on the main course page.

Primary filters:

- 拳擊設備
- 地墊 / 牆墊
- 擂台 / 籠架
- 商用健身器材
- 場地規劃

Tags:

- 客製尺寸
- 客製 Logo
- 學校/場館
- 健身房
- 軍警單位
- 安全防護

Card format:

- Product/service photo
- Category
- Short use case
- CTA: 詢問規格 / 請我們協助配置

### Case Detail Page

Use this template:

1. Breadcrumb + category
2. Case title
3. Project facts
   - 課程/設備/服務類型
   - 場地需求
   - 使用設備
   - 配置重點
4. Photo gallery
5. Problem statement
   - Example: "拳擊訓練需要足夠緩衝、安全動線與穩定設備"
6. Solution narrative
7. Used products/brands
8. Related course or service CTA
9. Final CTA
   - "想開課、買設備或規劃場地？傳照片與尺寸給我們。"

## UX Recommendations For Our Site

1. Course conversion comes first; equipment inquiry comes second.
2. Use PROGYM's filter model only for equipment/services/cases, not as the first experience on the home page.
3. Replace cart/order/member UI with `預約體驗 / LINE 諮詢 / 設備詢問`.
4. The fixed mobile CTA should be `預約體驗 / LINE / 詢問設備`.
5. Use real boxing training photos as the core visual asset.
6. Equipment pages can use product photos and installation photos, but should always lead to inquiry, not checkout.
7. Case cards should state whether the case is `課程環境`, `設備配置`, or `場地規劃`.
8. Add FAQ for both paths: boxing course questions and equipment/field-consulting questions.
9. Keep other sports scenes as proof of equipment capability, not teaching categories.
10. Use consistent image ratio: PROGYM uses 3:2 thumbnails; keep that or use 4:3.

## Accessibility Risks Seen From Screenshots

- Some body text and inactive UI controls have low contrast on dark backgrounds.
- Mobile bottom fixed bar reduces visible reading area.
- Icon-only controls in header need text labels/aria labels.
- Broken icon/text rendering (`�...`) can confuse screen readers and sighted users.
- Dropdown/tags need keyboard and focus-state testing; screenshots alone cannot prove this.

## Implementation Priority

1. Home page focused on boxing course conversion.
2. Boxing course page with formats, coach/environment proof, FAQ, and booking CTA.
3. Equipment & services page with filters and inquiry CTAs.
4. Case detail template with problem/solution/FAQ/product references.
5. Mobile CTA replacement: 預約體驗 / LINE / 詢問設備.

Skipped: checkout, cart, member login, order lookup. Add them only if the site actually starts taking orders online.
