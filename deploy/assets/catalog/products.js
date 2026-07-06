(() => {
  const products = [
    { brand: 'CROSSMAX', cat: '拳擊設備', title: 'CRX Functional Ring & Cage / CRX 功能擂台', desc: '拳擊、MMA 與體能訓練區可用的擂台與籠架系統。', img: 'assets/catalog/crossmax-crx-ring.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-028.pdf' },
    { brand: 'CROSSMAX', cat: '拳擊設備', title: 'CRX Boxing Ring Options / 擂台規格', desc: '不同擂台尺寸與配置，可依場地尺寸討論。', img: 'assets/catalog/crossmax-ring-options.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-029.pdf' },
    { brand: 'CROSSMAX', cat: '拳擊設備', title: 'Boxing & MMA 拳擊與綜合格鬥設備', desc: '拳擊台、籠架與格鬥訓練空間設備。', img: 'assets/catalog/crossmax-boxing-mma.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-054.pdf' },
    { brand: 'CROSSMAX', cat: '地墊牆墊', title: 'Mats & Flooring 橡膠地墊', desc: '商用健身房、拳擊區與體能區地面材料。', img: 'assets/catalog/crossmax-rubber-flooring.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-056.pdf' },
    { brand: 'CROSSMAX', cat: '地墊牆墊', title: 'Training Turf / 刻度草坪', desc: '衝刺跑道、推雪橇區與功能訓練地材。', img: 'assets/catalog/crossmax-training-turf.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-060.pdf' },
    { brand: 'GYMXF', cat: '地墊牆墊', title: 'Gym Flooring / Rubber Tiles', desc: '健身房橡膠地墊、拼接地材與訓練區鋪面。', img: 'assets/catalog/gymxf-flooring.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-041.pdf' },
    { brand: 'GYMPAC', cat: '地墊牆墊', title: 'Flooring / Turf / Rubber Mat', desc: 'GYMPAC 地墊、人工草坪與訓練鋪面類商品。', img: 'assets/catalog/gympac-flooring.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-039.pdf' },
    { brand: 'Dollamur', cat: '地墊牆墊', title: 'Dollamur 格鬥地墊', desc: '柔道、摔跤、格鬥訓練空間用地墊，可依場域詢問。', img: 'assets/catalog/dollamur-mats.jpg', pdf: 'assets/catalog/pdf/dollamur-mats.pdf' },
    { brand: 'CROSSMAX', cat: '商用健身', title: 'Commercial Rack System / 商用訓練架', desc: '商用健身房與體能區使用的 Rack / Rig 組合。', img: 'assets/catalog/crossmax-commercial-racks.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-006.pdf' },
    { brand: 'CROSSMAX', cat: '商用健身', title: 'Weightlifting Platform / 舉重平台', desc: '重訓區、舉重區與工作室可配置的平台系統。', img: 'assets/catalog/crossmax-platform.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-011.pdf' },
    { brand: 'GYMXF', cat: '商用健身', title: 'Rig Combination Series 1', desc: '模組化 RIG 系統，適合商用健身房與功能訓練區。', img: 'assets/catalog/gymxf-rig.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-004.pdf' },
    { brand: 'GYMXF', cat: '商用健身', title: 'Weightlifting Platform Series', desc: '舉重平台與重訓地面區域配置。', img: 'assets/catalog/gymxf-platform.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-008.pdf' },
    { brand: 'GYMXF', cat: '商用健身', title: 'Functional Trainer / Cable Machine', desc: '多功能滑輪訓練機與商用 cable 系列。', img: 'assets/catalog/gymxf-functional-trainer.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-012.pdf' },
    { brand: 'GYMXF', cat: '商用健身', title: 'Strength Machine / 訓練機台', desc: '商用肌力訓練機台與單站式器材。', img: 'assets/catalog/gymxf-strength-machine.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-015.pdf' },
    { brand: 'GYMPAC', cat: '商用健身', title: 'Bench Series / 訓練椅系列', desc: '平椅、可調椅、臥推椅與商用訓練椅。', img: 'assets/catalog/gympac-bench.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-003.pdf' },
    { brand: 'GYMPAC', cat: '商用健身', title: 'Racks / Training Racks', desc: '商用深蹲架、半框架與訓練架。', img: 'assets/catalog/gympac-racks.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-009.pdf' },
    { brand: 'GYMPAC', cat: '商用健身', title: 'RIG IT UP / Rig System', desc: '大型 RIG 組合與團課訓練區配置。', img: 'assets/catalog/gympac-rig.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-018.pdf' },
    { brand: 'CROSSMAX', cat: '自由重量', title: 'Bumper Plates / Olympic Plates', desc: '槓片、彩色槓片與自由重量區基礎配置。', img: 'assets/catalog/crossmax-bumper-plates.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-033.pdf' },
    { brand: 'GYMXF', cat: '自由重量', title: 'Bars / Barbells / Specialty Bars', desc: '槓鈴、特殊槓與自由重量訓練配件。', img: 'assets/catalog/gymxf-bars.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-026.pdf' },
    { brand: 'GYMXF', cat: '自由重量', title: 'Bumper Plates / 彩色槓片', desc: '競技槓片、彩色槓片與配重選項。', img: 'assets/catalog/gymxf-bumper-plates.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-031.pdf' },
    { brand: 'GYMXF', cat: '自由重量', title: 'Medicine Balls / Wall Balls', desc: '藥球、牆球與體能訓練球類。', img: 'assets/catalog/gymxf-balls.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-038.pdf' },
    { brand: 'GYMPAC', cat: '自由重量', title: 'Olympic Plates / 奧林匹克槓片', desc: '多款槓片與商用自由重量區配件。', img: 'assets/catalog/gympac-plates.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-021.pdf' },
    { brand: 'GYMPAC', cat: '自由重量', title: 'Dumbbells / Kettlebells', desc: '啞鈴、壺鈴、彩色槓片與自由重量套組。', img: 'assets/catalog/gympac-dumbbells.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-024.pdf' },
    { brand: 'CROSSMAX', cat: '兒童學校', title: 'CF20 運動卷墊 / CF365 PVC 運動地板', desc: '少兒體適能、快樂體操、幼兒園與學校空間用地墊。', img: 'assets/catalog/kids-flooring.jpg', pdf: 'assets/catalog/pdf/split/kids/page-001.pdf' },
    { brand: 'CROSSMAX', cat: '兒童學校', title: '軟式階梯 / 平衡木 / 圓柱', desc: '兒童體適能軟式器材，可做基礎動作與協調訓練。', img: 'assets/catalog/kids-soft-shapes.jpg', pdf: 'assets/catalog/pdf/split/kids/page-002.pdf' },
    { brand: 'CROSSMAX', cat: '兒童學校', title: '軟式跳箱 / 八角組合跳箱', desc: '學校與兒童運動中心常用的軟式跳箱組合。', img: 'assets/catalog/kids-plyo.jpg', pdf: 'assets/catalog/pdf/split/kids/page-003.pdf' },
    { brand: 'CROSSMAX', cat: '兒童學校', title: '敏捷梯 / 標誌盤 / 訓練欄', desc: '兒童體能、協調與敏捷訓練用小器材。', img: 'assets/catalog/kids-agility.jpg', pdf: 'assets/catalog/pdf/split/kids/page-004.pdf' },
    { brand: 'CROSSMAX', cat: '兒童學校', title: '跳球 / 觸覺球 / 軟式球類', desc: '兒童訓練用球類、感統器材與遊戲式訓練配件。', img: 'assets/catalog/kids-balls.jpg', pdf: 'assets/catalog/pdf/split/kids/page-005.pdf' },
    { brand: 'CROSSMAX', cat: '兒童學校', title: 'Kid Fitness Space / 兒童體適能場地', desc: '兒童學校與親子運動空間整體配置參考。', img: 'assets/catalog/crossmax-kids-space.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-052.pdf' },
    { brand: '飛樂克斯', cat: '兒童學校', title: '飛樂克斯體操墊 / 啦啦操墊', desc: '體操、啦啦操、學校與兒童運動空間用墊。', img: 'assets/catalog/flex-cheer-mat.jpg', pdf: 'assets/catalog/pdf/flex-cheer-mat.pdf' },
    { brand: 'CROSSMAX', cat: '場地規劃', title: 'Commercial Gym Case / 商用場地案例', desc: '商用健身房、工作室與多功能訓練空間配置參考。', img: 'assets/catalog/crossmax-gym-case.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-063.pdf' },
    { brand: 'CROSSMAX', cat: '場地規劃', title: 'Turf Sprint Lane / 跑道草坪配置', desc: '推雪橇、衝刺跑道與體能訓練區地面配置。', img: 'assets/catalog/crossmax-training-turf.jpg', pdf: 'assets/catalog/pdf/split/crossmax/page-060.pdf' },
    { brand: 'GYMXF', cat: '場地規劃', title: 'Modular Rig Space / RIG 空間規劃', desc: '用模組化 RIG 建立團課、功能訓練與重訓複合區。', img: 'assets/catalog/gymxf-rig.jpg', pdf: 'assets/catalog/pdf/split/gymxf/page-004.pdf' },
    { brand: 'GYMPAC', cat: '場地規劃', title: 'RIG IT UP 場地組合', desc: '大型訓練架、配件與團體訓練區整體配置。', img: 'assets/catalog/gympac-rig.jpg', pdf: 'assets/catalog/pdf/split/gympac/page-018.pdf' }
  ];

  function slugify(value) {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  window.catalogProducts = products.map((product, index) => ({
    ...product,
    slug: `${index + 1}-${slugify(product.title)}`
  }));
})();
