(() => {
  // Product IDs are public URL identifiers. Never renumber existing entries.
  const products = [
    { id: 1, brand: 'CROSSMAX', cat: '拳擊設備', title: 'CRX Functional Ring & Cage / CRX 功能擂台', desc: '拳擊、MMA 與體能訓練區可用的擂台與籠架系統。', img: 'assets/catalog/crossmax-crx-ring.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-028.pdf' },
    { id: 2, brand: 'CROSSMAX', cat: '拳擊設備', title: 'CRX Boxing Ring Options / 擂台規格', desc: '不同擂台尺寸與配置，可依場地尺寸討論。', img: 'assets/catalog/crossmax-ring-options.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-029.pdf' },
    { id: 3, brand: 'CROSSMAX', cat: '拳擊設備', title: 'Boxing & MMA 拳擊與綜合格鬥設備', desc: '拳擊台、籠架與格鬥訓練空間設備。', img: 'assets/catalog/crossmax-boxing-mma.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-054.pdf' },
    { id: 4, brand: 'CROSSMAX', cat: '地墊牆墊', title: 'Mats & Flooring 橡膠地墊', desc: '商用健身房、拳擊區與體能區地面材料。', img: 'assets/catalog/crossmax-rubber-flooring.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-056.pdf' },
    { id: 5, brand: 'CROSSMAX', cat: '地墊牆墊', title: 'Training Turf / 刻度草坪', desc: '衝刺跑道、推雪橇區與功能訓練地材。', img: 'assets/catalog/crossmax-training-turf.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-060.pdf' },
    { id: 6, brand: 'GYMXF', cat: '地墊牆墊', title: 'Gym Flooring / Rubber Tiles', desc: '健身房橡膠地墊、拼接地材與訓練區鋪面。', img: 'assets/catalog/gymxf-flooring.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-041.pdf' },
    { id: 7, brand: 'GYMPAC', cat: '地墊牆墊', title: 'Flooring / Turf / Rubber Mat', desc: 'GYMPAC 地墊、人工草坪與訓練鋪面類商品。', img: 'assets/catalog/gympac-flooring.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-039.pdf' },
    { id: 8, brand: 'Dollamur', cat: '地墊牆墊', title: 'Dollamur 格鬥地墊', desc: '柔道、摔跤、格鬥訓練空間用地墊，可依場地需求詢問。', img: 'assets/catalog/dollamur-mats.jpg', pdf: 'assets/catalog/pdf/dollamur-mats.pdf' },
    { id: 9, brand: 'CROSSMAX', cat: '商用健身', title: 'Commercial Rack System / 商用訓練架', desc: '商用健身房與體能區使用的訓練架與 RIG 組合。', img: 'assets/catalog/crossmax-commercial-racks.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-006.pdf' },
    { id: 10, brand: 'CROSSMAX', cat: '商用健身', title: 'Weightlifting Platform / 舉重平台', desc: '重訓區、舉重區與工作室可配置的平台系統。', img: 'assets/catalog/crossmax-platform.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-011.pdf' },
    { id: 11, brand: 'GYMXF', cat: '商用健身', title: 'Rig Combination Series 1', desc: '模組化 RIG 系統，適合商用健身房與功能訓練區。', img: 'assets/catalog/gymxf-rig.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-004.pdf' },
    { id: 12, brand: 'GYMXF', cat: '商用健身', title: 'Weightlifting Platform Series', desc: '舉重平台與重訓地面區域配置。', img: 'assets/catalog/gymxf-platform.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-008.pdf' },
    { id: 13, brand: 'GYMXF', cat: '商用健身', title: 'Functional Trainer / Cable Machine', desc: '多功能滑輪訓練機與商用繩索訓練設備。', img: 'assets/catalog/gymxf-functional-trainer.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-012.pdf' },
    { id: 14, brand: 'GYMXF', cat: '商用健身', title: 'Strength Machine / 訓練機台', desc: '商用肌力訓練機台與單站式器材。', img: 'assets/catalog/gymxf-strength-machine.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-015.pdf' },
    { id: 15, brand: 'GYMPAC', cat: '商用健身', title: 'Bench Series / 訓練椅系列', desc: '平椅、可調椅、臥推椅與商用訓練椅。', img: 'assets/catalog/gympac-bench.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-003.pdf' },
    { id: 16, brand: 'GYMPAC', cat: '商用健身', title: 'Racks / Training Racks', desc: '商用深蹲架、半框架與訓練架。', img: 'assets/catalog/gympac-racks.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-009.pdf' },
    { id: 17, brand: 'GYMPAC', cat: '商用健身', title: 'RIG IT UP / Rig System', desc: '大型 RIG 組合與團課訓練區配置。', img: 'assets/catalog/gympac-rig.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-018.pdf' },
    { id: 18, brand: 'CROSSMAX', cat: '自由重量', title: 'Bumper Plates / Olympic Plates', desc: '槓片、彩色槓片與自由重量區基礎配置。', img: 'assets/catalog/crossmax-bumper-plates.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-033.pdf' },
    { id: 19, brand: 'GYMXF', cat: '自由重量', title: 'Bars / Barbells / Specialty Bars', desc: '槓鈴、特殊槓與自由重量訓練配件。', img: 'assets/catalog/gymxf-bars.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-026.pdf' },
    { id: 20, brand: 'GYMXF', cat: '自由重量', title: 'Bumper Plates / 彩色槓片', desc: '競技槓片、彩色槓片與配重選項。', img: 'assets/catalog/gymxf-bumper-plates.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-031.pdf' },
    { id: 21, brand: 'GYMXF', cat: '自由重量', title: 'Medicine Balls / Wall Balls', desc: '藥球、牆球與體能訓練球類。', img: 'assets/catalog/gymxf-balls.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-038.pdf' },
    { id: 22, brand: 'GYMPAC', cat: '自由重量', title: 'Olympic Plates / 奧林匹克槓片', desc: '多款槓片與商用自由重量區配件。', img: 'assets/catalog/gympac-plates.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-021.pdf' },
    { id: 23, brand: 'GYMPAC', cat: '自由重量', title: 'Dumbbells / Kettlebells', desc: '啞鈴、壺鈴、彩色槓片與自由重量套組。', img: 'assets/catalog/gympac-dumbbells.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-024.pdf' },
    { id: 24, brand: 'CROSSMAX', cat: '兒童學校', title: 'CF20 運動卷墊 / CF365 PVC 運動地板', desc: '少兒體適能、快樂體操、幼兒園與學校空間用地墊。', img: 'assets/catalog/kids-flooring.jpg', pdf: 'assets/catalog/pdf/split/kids/page-001.pdf' },
    { id: 25, brand: 'CROSSMAX', cat: '兒童學校', title: '軟式階梯 / 平衡木 / 圓柱', desc: '兒童體適能軟式器材，可做基礎動作與協調訓練。', img: 'assets/catalog/kids-soft-shapes.jpg', pdf: 'assets/catalog/pdf/split/kids/page-002.pdf' },
    { id: 26, brand: 'CROSSMAX', cat: '兒童學校', title: '軟式跳箱 / 八角組合跳箱', desc: '學校與兒童運動中心常用的軟式跳箱組合。', img: 'assets/catalog/kids-plyo.jpg', pdf: 'assets/catalog/pdf/split/kids/page-003.pdf' },
    { id: 27, brand: 'CROSSMAX', cat: '兒童學校', title: '敏捷梯 / 標誌盤 / 訓練欄', desc: '兒童體能、協調與敏捷訓練用小器材。', img: 'assets/catalog/kids-agility.jpg', pdf: 'assets/catalog/pdf/split/kids/page-004.pdf' },
    { id: 28, brand: 'CROSSMAX', cat: '兒童學校', title: '跳球 / 觸覺球 / 軟式球類', desc: '兒童訓練用球類、感統器材與遊戲式訓練配件。', img: 'assets/catalog/kids-balls.jpg', pdf: 'assets/catalog/pdf/split/kids/page-005.pdf' },
    { id: 29, brand: 'CROSSMAX', cat: '兒童學校', title: 'Kid Fitness Space / 兒童體適能場地', desc: '兒童學校與親子運動空間整體配置參考。', img: 'assets/catalog/crossmax-kids-space.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-052.pdf' },
    { id: 30, brand: '飛樂克斯', cat: '兒童學校', title: '飛樂克斯體操墊 / 啦啦操墊', desc: '體操、啦啦操、學校與兒童運動空間用墊。', img: 'assets/catalog/flex-cheer-mat.jpg', pdf: 'assets/catalog/pdf/flex-cheer-mat.pdf' },
    { id: 31, brand: 'CROSSMAX', cat: '場地規劃', title: 'Commercial Gym Case / 商用場地案例', desc: '商用健身房、工作室與多功能訓練空間配置參考。', img: 'assets/catalog/crossmax-gym-case.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-063.pdf' },
    { id: 32, brand: 'CROSSMAX', cat: '場地規劃', title: 'Turf Sprint Lane / 跑道草坪配置', desc: '推雪橇、衝刺跑道與體能訓練區地面配置。', img: 'assets/catalog/crossmax-training-turf.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-060.pdf' },
    { id: 33, brand: 'GYMXF', cat: '場地規劃', title: 'Modular Rig Space / RIG 空間規劃', desc: '以模組化 RIG 建立團課、功能訓練與重訓複合區。', img: 'assets/catalog/gymxf-rig.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-004.pdf' },
    { id: 34, brand: 'GYMPAC', cat: '場地規劃', title: 'RIG IT UP 場地組合', desc: '大型訓練架、配件與團體訓練區整體配置。', img: 'assets/catalog/gympac-rig.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-018.pdf' }
  ];

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  window.catalogProducts = products.map((product) => ({
    ...product,
    slug: `${product.id}-${slugify(product.title)}`
  }));
})();
