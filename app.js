/**
 * E-PLUS MART (이플러스마트) — Integrated Retail Hub Engine
 * Benchmark: Whole Foods Market (Store Switcher, Deals Grid, Dual Pricing)
 *            Waitrose & Partners (Editorial Recipes, Quality Guide, JLP Partner Hub)
 * Compliance: 2026 FTC Price Display, Hiring Procedure Act Arts. 4-3 & 11, TLS Security
 */

// 1. Data Store Definition
const STORES = {
  toegyewon: {
    id: 'toegyewon',
    name: '퇴계원 대표점 (본점)',
    shortName: '퇴계원 대표점',
    roleTag: '역세권 신선 1등 허브',
    badge: '경춘선 퇴계원역 도보 4분 · 지역 밀착 1등 역세권 마트',
    heroTitle: '신선함의 기준, 퇴계원 이플러스마트',
    heroDesc: '매일 아침 가락시장과 전국 산지에서 직송되는 신선 농수축산물과 어머니의 손맛을 담은 당일 조리 수제반찬 코너! 퇴계원 주민 여러분의 알뜰하고 풍성한 식탁을 책임집니다.',
    heroImage: 'images/store-toegyewon.jpg',
    tel: '031-574-1134',
    address: '경기도 남양주시 퇴계원읍 퇴계원로6번길 7 (퇴계원역 2번 출구 도보 4분)',
    hoursText: '08:30 ~ 22:30 (연중무휴)',
    openHour: 8,
    openMin: 30,
    closeHour: 22,
    closeMin: 30,
    parking: '매장 앞 전용 주차 공간 완비 (구매 고객 무료 주차)',
    transit: '경춘선 퇴계원역 2번 출구에서 도보 4분 (퇴계원 극동아파트 맞은편)',
    deliveryTerms: '30,000원 이상 구매 시 퇴계원 전지역 무료 배송 (당일 4회 배송)',
    deliveryDeadlines: '1차 11:00 / 2차 14:00 / 3차 16:00 / 4차 18:00 (접수 마감)',
    appPackage: 'com.shuket.eplusmart.toegyewon',
    appUrl: 'https://play.google.com/store/apps/details?id=com.shuket.eplusmart.toegyewon',
    appScheme: 'market://details?id=com.shuket.eplusmart.toegyewon',
    naverMapUrl: 'https://map.naver.com/p/search/%EB%82%A8%EC%96%91%EC%A3%BC%20%EC%9D%B4%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8%20%ED%87%B4%EA%B3%84%EC%9B%90',
    kakaoMapUrl: 'https://map.kakao.com/link/search/%ED%87%B4%EA%B3%84%EC%9B%90%20%EC%9D%B4%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8',
    corporateName: '(주)이플러스마트',
    ceo: '이진형',
    corpNum: '132-81-79114',
    highlightSpecial: '⚡ [퇴계원 단독] 당일 직송 제주 은갈치 & 즉석 조리 수제 겉절이 특별 한정 세일!',
    deliveryApts: [
      { name: '퇴계원 주공 3단지 / 4단지', area: '퇴계원읍', minOrder: '30,000원', rounds: '당일 4회 (18시 마감)', status: '즉시 가능' },
      { name: '퇴계원 극동아파트', area: '퇴계원읍', minOrder: '30,000원', rounds: '당일 4회 (18시 마감)', status: '즉시 가능' },
      { name: '퇴계원 신우아파트', area: '퇴계원읍', minOrder: '30,000원', rounds: '당일 4회 (18시 마감)', status: '즉시 가능' },
      { name: '퇴계원 엘리시아 아파트', area: '퇴계원읍', minOrder: '30,000원', rounds: '당일 4회 (18시 마감)', status: '즉시 가능' },
      { name: '퇴계원 힐스테이트 (인접권)', area: '퇴계원읍/사능', minOrder: '30,000원', rounds: '당일 3회 (16시 마감)', status: '즉시 가능' },
      { name: '퇴계원 빌라 및 일반 주택가 전역', area: '퇴계원리 전역', minOrder: '30,000원', rounds: '당일 4회 (18시 마감)', status: '즉시 가능' }
    ]
  },
  pyeongnae: {
    id: 'pyeongnae',
    name: '평내 핵심점 (복합매장)',
    shortName: '평내 핵심점',
    roleTag: '대단지 가족 주거 중심 허브',
    badge: '경춘로 대로변 대형 복합매장 · 3.6만 세대 배후 대단지 중심',
    heroTitle: '가족의 건강한 식탁, 평내 이플러스마트',
    heroDesc: '지상·지하 넓은 전용 주차장과 엘리베이터 완비! 20여 개 아파트 대단지를 위한 맞춤 정기 순회 배송과 최상급 1++ 한우·제철 과일 큐레이션 매장입니다.',
    heroImage: 'images/store-pyeongnae.jpg',
    tel: '031-594-5988',
    address: '경기도 남양주시 경춘로 1291 (평내동 대로변 복합빌딩)',
    hoursText: '08:30 ~ 23:00 (연중무휴)',
    openHour: 8,
    openMin: 30,
    closeHour: 23,
    closeMin: 0,
    parking: '지상 및 지하 대형 자주식 주차장 완비 (카트 이동 엘리베이터 직결, 주차권 제공)',
    transit: '경춘선 평내호평역 방면 경춘로 대로변 버스정류장 바로 앞 (도보 1분)',
    deliveryTerms: '30,000원 이상 구매 시 평내·호평 전지역 무료 배송 (대단지 정기 순회)',
    deliveryDeadlines: '매일 19:00 당일 주문 접수 마감 (아파트별 순차 출발)',
    appPackage: 'com.shuket.eplusmart.pyeongnae',
    appUrl: 'https://play.google.com/store/apps/details?id=com.shuket.eplusmart.pyeongnae',
    appScheme: 'market://details?id=com.shuket.eplusmart.pyeongnae',
    naverMapUrl: 'https://map.naver.com/p/search/%EB%82%A8%EC%96%91%EC%A3%BC%20%ED%8F%89%EB%82%B4%EB%8F%99%20%EC%9D%B4%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8',
    kakaoMapUrl: 'https://map.kakao.com/link/search/%ED%8F%89%EB%82%B4%EB%8F%99%20%EC%9D%B4%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8',
    corporateName: '(주)피케이유통',
    ceo: '박규태',
    corpNum: '132-86-04281',
    highlightSpecial: '🥩 [평내 단독] 주말 온가족 1++ 한우 꽃등심 파티팩 & 샤인머스캣 패밀리 박스 파격 특가!',
    deliveryApts: [
      { name: '평내마을 주공 1~4단지', area: '평내동', minOrder: '30,000원', rounds: '당일 순회 (19시 마감)', status: '즉시 가능' },
      { name: '평내 중흥S-클래스 1~3단지', area: '평내동', minOrder: '30,000원', rounds: '당일 순회 (19시 마감)', status: '즉시 가능' },
      { name: '평내 신명스카이뷰 / 대주피렌체', area: '평내동', minOrder: '30,000원', rounds: '당일 순회 (19시 마감)', status: '즉시 가능' },
      { name: '평내 우남퍼스트빌 / 세진순화', area: '평내동', minOrder: '30,000원', rounds: '당일 순회 (19시 마감)', status: '즉시 가능' },
      { name: '호평 파라곤 / 아이파크 (인근)', area: '호평동', minOrder: '30,000원', rounds: '당일 순회 (18시 마감)', status: '즉시 가능' },
      { name: '호평 한화꿈에그린 / 중흥S클래스', area: '호평동', minOrder: '30,000원', rounds: '당일 순회 (18시 마감)', status: '즉시 가능' }
    ]
  },
  gwangju: {
    id: 'gwangju',
    name: '광주 신규점 (대용량 식자재)',
    shortName: '광주 신규점',
    roleTag: '차량 특화 대용량 벌크 직판 허브',
    badge: '벌원길 64-4 탄벌동 신규 거점 · 단독 대형 주차장 & 대용량 벌크 특화',
    heroTitle: '합리적 대용량·로컬 직배송, 광주 이플러스마트',
    heroDesc: '외식업소·소상공인 및 다인가구를 위한 대용량 식자재 직판관! 탄벌동 이웃사랑 나눔 저금통(10원 동전 18kg 기탁)과 함께하는 따뜻한 로컬 상생 마트입니다.',
    heroImage: 'images/store-gwangju.jpg',
    tel: '031-767-2633',
    address: '경기도 광주시 벌원길 64-4 (탄벌동 단독 매장)',
    hoursText: '08:30 ~ 22:00 (연중무휴)',
    openHour: 8,
    openMin: 30,
    closeHour: 22,
    closeMin: 0,
    parking: '단독 대형 지상 주차장 완비 (화물차 및 카트 승하차 편리, 대형 주차 무료)',
    transit: '탄벌동 행정복지센터 인근, 벌원사거리에서 차량 2분 거리',
    deliveryTerms: '50,000원 이상 구매 시 광주 전지역 무료 직배송 (업소용 정기 대량 배달)',
    deliveryDeadlines: '매일 18:00 당일 주문 접수 마감 (업소용 사전 예약제 직배송)',
    appPackage: 'com.shuket.eplusmart.gwangju',
    appUrl: 'https://play.google.com/store/apps/details?id=com.shuket.eplusmart.gwangju',
    appScheme: 'market://details?id=com.shuket.eplusmart.gwangju',
    naverMapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EA%B8%B0%20%EA%B4%91%EC%A3%BC%20%EC%9D%B4%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8%20%ED%83%84%EB%B2%8C%EB%8F%99',
    kakaoMapUrl: 'https://map.kakao.com/link/search/%EA%B4%91%EC%A3%BC%20%ED%83%84%EB%B2%8C%EB%8F%99%20%EC%9D%B4%ED%94%8C%EB%9F%AC%EC%8A%A4%EB%A7%88%ED%8A%B8',
    corporateName: '이플러스마트 주식회사',
    ceo: '김성훈',
    corpNum: '126-86-55412',
    highlightSpecial: '📦 [광주 단독] 신규 오픈 기념 업소용 쌀 20kg & 말통 식용유 18L 도매가 직판 대축제!',
    deliveryApts: [
      { name: '탄벌동 경남아너스빌 1~2단지', area: '탄벌동', minOrder: '50,000원', rounds: '당일 직배송 (18시 마감)', status: '즉시 가능' },
      { name: '탄벌동 현대 / 벽산블루밍', area: '탄벌동', minOrder: '50,000원', rounds: '당일 직배송 (18시 마감)', status: '즉시 가능' },
      { name: '광주 탄벌 에코델타 / 산이고은', area: '탄벌동', minOrder: '50,000원', rounds: '당일 직배송 (18시 마감)', status: '즉시 가능' },
      { name: '송정동 / 송정지구 대단지', area: '송정동', minOrder: '50,000원', rounds: '당일 직배송 (18시 마감)', status: '즉시 가능' },
      { name: '경안동 / 역동 아파트 및 상가', area: '경안동/역동', minOrder: '50,000원', rounds: '당일 직배송 (17시 마감)', status: '즉시 가능' },
      { name: '광주권 요양원 / 유치원 / 외식 식당', area: '광주시 전역', minOrder: '정기 B2B 협의', rounds: '새벽/오전 지정 배송', status: '정기 협약' }
    ]
  }
};

// 2. Deals Data (Dual Pricing Compliance with 2026 FTC Guidelines)
const DEALS_DATA = [
  {
    id: 1,
    category: 'produce',
    name: '제주 조생 햇 노지감귤 (3kg 박스)',
    badgeType: 'badge-app-coupon',
    badgeText: '슈켓 앱 쿠폰 특가',
    origin: '국내산(제주 서귀포)',
    regPrice: '14,800',
    storePrice: '9,900',
    appPrice: '7,900',
    discountRate: '46%',
    image: 'images/corner-produce.jpg',
    tag: '당도 12Brix 선별 · 비타민 충전',
    desc: '제주 산지에서 직송되어 신선함이 살아있는 고당도 노지 햇감귤입니다.'
  },
  {
    id: 2,
    category: 'produce',
    name: '경북 영동 샤인머스캣 (2kg / 3수 박스)',
    badgeType: 'badge-direct-farm',
    badgeText: '산지직송 직큐(Jik-Q)',
    origin: '국내산(경북 영동)',
    regPrice: '23,900',
    storePrice: '16,900',
    appPrice: '13,900',
    discountRate: '41%',
    image: 'images/corner-produce.jpg',
    tag: '평균 17Brix 보장 · 아삭한 식감',
    desc: '새벽 경매를 거치지 않고 산지 농가와 계약 재배하여 알이 굵고 탱글탱글합니다.'
  },
  {
    id: 3,
    category: 'produce',
    name: '강원 평창 고랭지 배추 (3입 1망)',
    badgeType: 'badge-limited',
    badgeText: '김장 시즌 한정 (1인 2망)',
    origin: '국내산(강원 평창)',
    regPrice: '12,000',
    storePrice: '8,900',
    appPrice: '6,900',
    discountRate: '42%',
    image: 'images/mk-popup-kimjang.jpg',
    tag: '속이 꽉 찬 고랭지 속노란 배추',
    desc: '서리를 맞아 속이 샛노랗고 달콤한 김장철 필수 명품 고랭지 배추입니다.'
  },
  {
    id: 4,
    category: 'meat_fish',
    name: '1++ 최상급 한우 꽃등심 (100g 기준)',
    badgeType: 'badge-instore',
    badgeText: 'In-Store Only 매장한정',
    origin: '국내산 한우 1++ No.8~9',
    regPrice: '18,900',
    storePrice: '13,500',
    appPrice: '10,900',
    discountRate: '42%',
    image: 'images/food-korean-beef.jpg',
    tag: '환상적인 눈꽃 마블링 · 웻에이징',
    desc: '축산물 품질평가원 1++ 최고 등급 판정! 부드러운 육질과 깊은 육즙을 선사합니다.'
  },
  {
    id: 5,
    category: 'meat_fish',
    name: '국내산 1등급 암퇘지 생삼겹살 (100g)',
    badgeType: 'badge-app-coupon',
    badgeText: '주말 타임세일',
    origin: '국내산 돼지고기 1등급',
    regPrice: '3,480',
    storePrice: '2,480',
    appPrice: '1,880',
    discountRate: '46%',
    image: 'images/food-korean-beef.jpg',
    tag: '얼리지 않은 생육 · 황금 삼겹 비율',
    desc: '지방과 살코기가 이상적인 3:7 황금 비율을 이루는 신선 냉장 삼겹살입니다.'
  },
  {
    id: 6,
    category: 'meat_fish',
    name: '제주 생물 은갈치 (특대 사이즈 2미)',
    badgeType: 'badge-direct-farm',
    badgeText: '당일 새벽 경매 직송',
    origin: '국내산(제주 성산포)',
    regPrice: '22,000',
    storePrice: '14,900',
    appPrice: '11,900',
    discountRate: '45%',
    image: 'images/mk-event-seafood-meat.jpg',
    tag: '은빛 비늘 손상 제로 · 통통한 살집',
    desc: '낚시로 잡아 올린 당일바리 특선 은갈치로 조림과 구이용 모두 일품입니다.'
  },
  {
    id: 7,
    category: 'meat_fish',
    name: '동해안 생물 오징어 (3미 팩)',
    badgeType: 'badge-limited',
    badgeText: '당일 한정수량',
    origin: '국내산(동해안)',
    regPrice: '15,000',
    storePrice: '9,900',
    appPrice: '7,900',
    discountRate: '47%',
    image: 'images/mk-event-seafood-meat.jpg',
    tag: '투명하고 쫄깃한 식감 · 즉석 회/숙회',
    desc: '선도가 탁월하여 회로도 드실 수 있을 만큼 싱싱한 당일 하역 생물 오징어입니다.'
  },
  {
    id: 8,
    category: 'banchan',
    name: '매일 아침 조리 수제 알타리 겉절이 (1kg)',
    badgeType: 'badge-app-coupon',
    badgeText: '수제반찬 코너 특선',
    origin: '국내산 농산물 100%',
    regPrice: '11,000',
    storePrice: '7,900',
    appPrice: '5,900',
    discountRate: '46%',
    image: 'images/corner-banchan.jpg',
    tag: '영양 고춧가루 & 3년 숙성 멸치액젓',
    desc: '매장 조리실에서 어머니 손맛으로 매일 아침 즉석 버무려 판매하는 인기 1위 겉절이입니다.'
  },
  {
    id: 9,
    category: 'banchan',
    name: '전통 양념 소불고기 (600g 即석재움)',
    badgeType: 'badge-instore',
    badgeText: 'In-Store 즉석 조리',
    origin: '호주산 청정우 & 수제 과일양념',
    regPrice: '16,900',
    storePrice: '12,500',
    appPrice: '9,900',
    discountRate: '41%',
    image: 'images/corner-banchan.jpg',
    tag: '배, 사과를 갈아 넣은 천연 비법 양념',
    desc: '질기지 않고 부드러운 소고기에 천연 과일 양념을 재워 남녀노소 누구나 좋아하는 밥도둑입니다.'
  },
  {
    id: 10,
    category: 'banchan',
    name: '밥도둑 프리미엄 양념게장 (800g 1통)',
    badgeType: 'badge-limited',
    badgeText: '시즌 한정 특가',
    origin: '국내산 서해안 꽃게',
    regPrice: '18,000',
    storePrice: '13,900',
    appPrice: '11,000',
    discountRate: '38%',
    image: 'images/corner-banchan.jpg',
    tag: '살이 꽉 찬 서해안 가을 꽃게 수제 절임',
    desc: '매콤달콤 비법 양념장과 알찬 꽃게살의 환상적인 조화로 입맛을 돋워줍니다.'
  },
  {
    id: 11,
    category: 'bulk',
    name: '농협 신동진 쌀 햅쌀 (20kg 대포)',
    badgeType: 'badge-instore',
    badgeText: '식당·업소 대용량 특가',
    origin: '국내산(전북 농협 신동진)',
    regPrice: '58,000',
    storePrice: '48,900',
    appPrice: '44,900',
    discountRate: '22%',
    image: 'images/corner-grocery.jpg',
    tag: '쌀알이 크고 윤기가 흐르는 특등미',
    desc: '식당 사장님들과 다인가구가 가장 선호하는 찰기 넘치고 구수한 신동진 햅쌀입니다.'
  },
  {
    id: 12,
    category: 'bulk',
    name: '오뚜기 업소용 콩기름 식용유 (18L 대용량 말통)',
    badgeType: 'badge-direct-farm',
    badgeText: 'B2B 도매 최저가 직판',
    origin: '오뚜기 정품',
    regPrice: '54,000',
    storePrice: '45,900',
    appPrice: '41,900',
    discountRate: '22%',
    image: 'images/b2b-supply.jpg',
    tag: '튀김·볶음 전문 업소용 표준 식용유',
    desc: '남양주·광주 관내 외식업소 정기 납품 1위 품목으로 묶음 대량 주문 시 추가 할인이 가능합니다.'
  }
];

// 3. Recipes Data (Waitrose Style Editorial Curation)
const RECIPES_DATA = [
  {
    id: 'recipe-1',
    title: '한우 차돌박이 우렁 된장찌개',
    subtitle: '15분 완성 · 진하고 구수한 고향의 맛',
    time: '15분',
    level: '초급 (쉬움)',
    storeCorner: '정육 코너(차돌박이) & 농산 코너(애호박, 두부, 버섯)',
    image: 'images/food-recipe-dish.jpg',
    relatedBranch: '평내 핵심점 특가 상품 연계',
    ingredients: [
      '이플러스마트 1++ 한우 차돌박이 150g',
      '전통 재래식 된장 2큰술, 고추장 반 큰술',
      '신선 애호박 반 개, 두부 반 모, 팽이버섯 1봉',
      '다진 마늘 1작은술, 청양고추 1개, 대파 반 대',
      '멸치 다시마 육수 또는 쌀뜨물 500ml'
    ],
    steps: [
      '뚝배기에 차돌박이를 먼저 넣고 중불에서 고소한 기름이 살짝 배어 나올 때까지 볶아줍니다.',
      '쌀뜨물을 붓고 끓어오르면 재래식 된장과 고추장을 체에 걸러 풀어 넣습니다.',
      '한입 크기로 썬 애호박, 두부, 팽이버섯, 다진 마늘을 넣고 7~8분간 보글보글 끓입니다.',
      '마지막으로 송송 썬 대파와 청양고추를 올리고 한소끔 더 끓여내면 완성됩니다.'
    ],
    chefTip: '차돌박이에서 나오는 감칠맛 가득한 기름이 된장의 떫은맛을 잡아주어 별도의 조미료 없이도 깊은 맛이 납니다.'
  },
  {
    id: 'recipe-2',
    title: '제주 은갈치 매콤 칼칼 무조림',
    subtitle: '20분 완성 · 밥 두 공기 비우는 명품 수산 요리',
    time: '20분',
    level: '중급 (보통)',
    storeCorner: '수산 코너(제주 은갈치 당일 손질) & 농산 코너(가을 무, 대파)',
    image: 'images/food-recipe-dish.jpg',
    relatedBranch: '퇴계원 대표점 새벽 경매 연계',
    ingredients: [
      '제주 생물 은갈치 특대 1마리 (토막 손질)',
      '단맛 가득한 가을 무 1/3개 (1.5cm 두께 나박썰기)',
      '양파 반 개, 대파 1대, 청홍고추 각 1개',
      '양념장: 진간장 4큰술, 고춧가루 3큰술, 다진 마늘 1큰술, 생강즙 약간, 맛술 2큰술, 물엿 1큰술, 육수 400ml'
    ],
    steps: [
      '냄비 바닥에 도톰하게 썬 무를 깔고 양념장의 1/3과 육수를 부어 무가 반쯤 익을 때까지 먼저 8분간 끓입니다.',
      '무가 투명해지면 깨끗이 손질된 은갈치 토막을 겹치지 않게 올립니다.',
      '남은 양념장을 갈치 위에 골고루 끼얹고 양파와 대파를 올린 후 중약불에서 뚜껑을 덮고 10분간 조립니다.',
      '국물이 자작해지면 숟가락으로 국물을 갈치 위에 끼얹어가며 2분간 더 끓여 윤기를 내줍니다.'
    ],
    chefTip: '무를 먼저 익힌 후 갈치를 올려야 갈치 살이 부서지지 않고 무에 갈치 풍미가 고스란히 뱁니다.'
  },
  {
    id: 'recipe-3',
    title: '샤인머스캣 & 부라타 치즈 브런치 샐러드',
    subtitle: '10분 완성 · 고급스러운 식탁을 위한 상큼한 에피타이저',
    time: '10분',
    level: '초급 (아주 쉬움)',
    storeCorner: '농산 코너(고당도 샤인머스캣) & 유제품 코너(부라타 치즈)',
    image: 'images/corner-produce.jpg',
    relatedBranch: '3개 지점 산지직송 직큐 공통',
    ingredients: [
      '산지직송 샤인머스캣 15~20알 (반으로 컷팅)',
      '신선한 생 부라타 치즈 1구',
      '루꼴라 또는 어린잎 채소 1줌',
      '엑스트라 버진 올리브오일 2큰술, 발사믹 글레이즈 1큰술',
      '통후추 약간, 구운 호두 또는 아몬드 슬라이스'
    ],
    steps: [
      '샤인머스캣은 깨끗이 씻어 물기를 제거한 뒤 알을 반으로 먹기 좋게 자릅니다.',
      '넓은 접시에 루꼴라를 깔고 중앙에 부라타 치즈를 소담하게 올립니다.',
      '치즈 주변으로 반으로 자른 샤인머스캣을 풍성하게 두릅니다.',
      '올리브오일과 발사믹 글레이즈를 지그재그로 뿌리고 그라인더로 통후추와 견과류를 곁들입니다.'
    ],
    chefTip: '샤인머스캣의 높은 당도와 부라타 치즈의 크리미한 고소함이 만나 카페 브런치 못지않은 우아함을 선사합니다.'
  },
  {
    id: 'recipe-4',
    title: '매콤 꽈리고추 즉석 소불고기 볶음',
    subtitle: '18분 완성 · 감칠맛 폭발 대용량 반찬 아이디어',
    time: '18분',
    level: '중급 (보통)',
    storeCorner: '정육 코너(소불고기용) & 농산 코너(싱싱한 꽈리고추)',
    image: 'images/corner-banchan.jpg',
    relatedBranch: '광주 신규점 대용량 정육 연계',
    ingredients: [
      '소불고기감 400g (키친타월로 핏물 제거)',
      '꼭지를 딴 신선한 꽈리고추 15개 (포크로 구멍)',
      '양파 반 개, 당근 약간, 통깨 1큰술, 참기름 1큰술',
      '양념: 간장 4큰술, 흑설탕 2큰술, 다진 마늘 1큰술, 배즙 3큰술, 후춧가루 약간'
    ],
    steps: [
      '소고기는 양념에 10분간 가볍게 재워둡니다. 꽈리고추는 간이 잘 배도록 포크로 콕콕 찔러줍니다.',
      '달군 팬에 기름을 두르고 양파와 꽈리고추를 먼저 강불에서 1분간 센 불로 볶아 향을 냅니다.',
      '양념한 소불고기를 넣고 젓가락으로 살살 펴가며 센 불에서 빠르게 볶아 수분이 생기지 않게 합니다.',
      '고기가 다 익으면 불을 끄고 참기름과 통깨를 둘러 마무리합니다.'
    ],
    chefTip: '꽈리고추의 은은한 매콤함이 소고기의 기름진 맛을 산뜻하게 잡아줍니다.'
  }
];

// 4. Global State
let currentStoreKey = 'toegyewon';
let currentFlyerPage = 1;
let flyerZoomLevel = 1;

// 5. Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initStoreContext();
  initOperatingHoursTicker();
  initDealTabs();
  initDealsGrid('all');
  initCountdownTimer();
  initDeliverySearch();
  initRecruitmentForm();
  initB2BForm();
  initModalListeners();
  initMobileDrawer();
});

// 6. Store Context Switching (localStorage persistence)
function initStoreContext() {
  const savedStore = localStorage.getItem('eplus_selected_branch');
  if (savedStore && STORES[savedStore]) {
    currentStoreKey = savedStore;
  }
  applyStoreContext(currentStoreKey);

  // Switcher Buttons Binding
  document.querySelectorAll('[data-store-target]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = btn.getAttribute('data-store-target');
      if (STORES[target]) {
        currentStoreKey = target;
        localStorage.setItem('eplus_selected_branch', target);
        applyStoreContext(target);
      }
    });
  });
}

function applyStoreContext(storeKey) {
  const s = STORES[storeKey];
  if (!s) return;

  // 1. Update Switcher active styling
  document.querySelectorAll('[data-store-target]').forEach(btn => {
    if (btn.getAttribute('data-store-target') === storeKey) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // 2. Update Header Info
  const headerBranchName = document.getElementById('header-branch-name');
  if (headerBranchName) headerBranchName.textContent = s.shortName;

  const headerBranchTel = document.getElementById('header-branch-tel');
  if (headerBranchTel) {
    headerBranchTel.textContent = s.tel;
    headerBranchTel.href = `tel:${s.tel.replace(/-/g, '')}`;
  }

  // 3. Update Hero Section
  const heroBadge = document.getElementById('hero-store-badge');
  if (heroBadge) heroBadge.textContent = s.badge;

  const heroTitle = document.getElementById('hero-store-title');
  if (heroTitle) heroTitle.textContent = s.heroTitle;

  const heroDesc = document.getElementById('hero-store-desc');
  if (heroDesc) heroDesc.textContent = s.heroDesc;

  const heroImg = document.getElementById('hero-store-img');
  if (heroImg) {
    heroImg.src = s.heroImage;
    heroImg.alt = s.name;
  }

  const heroTelBtn = document.getElementById('hero-tel-btn');
  if (heroTelBtn) {
    heroTelBtn.href = `tel:${s.tel.replace(/-/g, '')}`;
    heroTelBtn.setAttribute('title', `${s.shortName} 직통 전화: ${s.tel}`);
  }

  const heroMapBtn = document.getElementById('hero-map-btn');
  if (heroMapBtn) heroMapBtn.href = s.naverMapUrl;

  const specialRibbon = document.getElementById('special-ribbon-text');
  if (specialRibbon) specialRibbon.textContent = s.highlightSpecial;

  // 4. Update Spoke & Delivery Section
  const spokeName = document.getElementById('spoke-store-name');
  if (spokeName) spokeName.textContent = s.name;

  const spokeImg = document.getElementById('spoke-store-img');
  if (spokeImg) spokeImg.src = s.heroImage;

  const spokeAddress = document.getElementById('spoke-store-address');
  if (spokeAddress) spokeAddress.textContent = s.address;

  const spokeTel = document.getElementById('spoke-store-tel');
  if (spokeTel) {
    spokeTel.textContent = s.tel;
    spokeTel.href = `tel:${s.tel.replace(/-/g, '')}`;
  }

  const spokeHours = document.getElementById('spoke-store-hours');
  if (spokeHours) spokeHours.textContent = s.hoursText;

  const spokeParking = document.getElementById('spoke-store-parking');
  if (spokeParking) spokeParking.textContent = s.parking;

  const spokeTransit = document.getElementById('spoke-store-transit');
  if (spokeTransit) spokeTransit.textContent = s.transit;

  const spokeDeliveryTerms = document.getElementById('spoke-delivery-terms');
  if (spokeDeliveryTerms) spokeDeliveryTerms.textContent = s.deliveryTerms;

  const spokeDeliveryDeadlines = document.getElementById('spoke-delivery-deadlines');
  if (spokeDeliveryDeadlines) spokeDeliveryDeadlines.textContent = s.deliveryDeadlines;

  const spokeNaverMap = document.getElementById('spoke-naver-map-btn');
  if (spokeNaverMap) spokeNaverMap.href = s.naverMapUrl;

  const spokeKakaoMap = document.getElementById('spoke-kakao-map-btn');
  if (spokeKakaoMap) spokeKakaoMap.href = s.kakaoMapUrl;

  // 5. Update Shuket App Buttons
  const headerAppBtn = document.getElementById('header-app-btn');
  if (headerAppBtn) headerAppBtn.href = s.appUrl;

  const modalAppDownload = document.getElementById('modal-app-download-btn');
  if (modalAppDownload) modalAppDownload.href = s.appUrl;

  const mobileBottomCall = document.getElementById('mobile-bottom-call-btn');
  if (mobileBottomCall) mobileBottomCall.href = `tel:${s.tel.replace(/-/g, '')}`;

  const mobileBottomApp = document.getElementById('mobile-bottom-app-btn');
  if (mobileBottomApp) mobileBottomApp.href = s.appUrl;

  // 6. Update Delivery Table
  renderDeliveryTable(s.deliveryApts);

  // 7. Update Real-time Status Badge
  updateOperatingStatusBadge();
}

// 7. Operating Status Calculator
function updateOperatingStatusBadge() {
  const s = STORES[currentStoreKey];
  if (!s) return;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = s.openHour * 60 + s.openMin;
  const closeMinutes = s.closeHour * 60 + s.closeMin;

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  const badgeEl = document.getElementById('live-status-pill');
  if (badgeEl) {
    if (isOpen) {
      badgeEl.innerHTML = `<span class="status-indicator"></span> <span class="font-bold text-green-700">지금 영업중</span> <span class="text-xs text-gray-500">(${s.hoursText.split(' ')[0]})</span>`;
    } else {
      badgeEl.innerHTML = `<span class="status-indicator closed"></span> <span class="font-bold text-red-600">영업 준비중</span> <span class="text-xs text-gray-500">(익일 ${String(s.openHour).padStart(2,'0')}:${String(s.openMin).padStart(2,'0')} 오픈)</span>`;
    }
  }
}

function initOperatingHoursTicker() {
  updateOperatingStatusBadge();
  setInterval(updateOperatingStatusBadge, 30000); // Check every 30s
}

// 8. Deals Category Tabs & Grid
function initDealTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      initDealsGrid(category);
    });
  });
}

function initDealsGrid(category) {
  const grid = document.getElementById('deals-grid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? DEALS_DATA 
    : DEALS_DATA.filter(item => item.category === category);

  grid.innerHTML = filtered.map(item => `
    <article class="deal-card rounded-xl overflow-hidden flex flex-col justify-between p-4 group">
      <div>
        <div class="relative overflow-hidden rounded-lg aspect-square mb-3 bg-gray-100">
          <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute top-2 left-2 flex flex-col gap-1 items-start">
            <span class="${item.badgeType}">${item.badgeText}</span>
          </div>
          <span class="absolute top-2 right-2 bg-red-600 text-white font-extrabold text-xs px-2 py-1 rounded shadow">
            ${item.discountRate} OFF
          </span>
        </div>
        <div class="text-xs font-medium text-gray-500 mb-1">${item.origin} · ${item.tag}</div>
        <h4 class="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-red-600 transition-colors">
          ${item.name}
        </h4>
        <p class="text-xs text-gray-600 line-clamp-2 mb-3">${item.desc}</p>
      </div>

      <!-- Whole Foods Style Dual Pricing Box -->
      <div class="pt-3 border-t border-gray-100 bg-gray-50 -mx-4 -mb-4 p-4 rounded-b-xl">
        <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>기준가 (종전가/시가)</span>
          <span class="price-regular">${item.regPrice}원</span>
        </div>
        <div class="flex items-center justify-between text-sm text-gray-700 mb-2">
          <span>매장 일반 할인가</span>
          <span class="price-store">${item.storePrice}원</span>
        </div>
        <div class="flex items-center justify-between bg-red-50 p-2 rounded-lg border border-red-100">
          <div class="text-xs font-bold text-red-700 flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">redeem</span> 슈켓 앱 쿠폰가
          </div>
          <div class="price-app">${item.appPrice}<span class="text-xs font-bold ml-0.5">원</span></div>
        </div>
        <button onclick="openDealDetailModal(${item.id})" class="w-full mt-2.5 py-1.5 text-xs font-bold text-gray-700 bg-white border border-gray-200 hover:border-red-500 hover:text-red-600 rounded-md transition-colors flex items-center justify-center gap-1">
          <span class="material-symbols-outlined text-sm">info</span> 상세 안내 & 레시피 보기
        </button>
      </div>
    </article>
  `).join('');
}

// 9. Countdown Timer for Weekly Deals
function initCountdownTimer() {
  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  // Next Thursday 23:59:59 Target
  function getNextThursday() {
    const d = new Date();
    const day = d.getDay();
    let diff = (4 - day + 7) % 7;
    if (diff === 0 && d.getHours() >= 23) {
      diff = 7;
    }
    const target = new Date(d);
    target.setDate(d.getDate() + diff);
    target.setHours(23, 59, 59, 0);
    return target;
  }

  const targetDate = getNextThursday();

  function update() {
    const now = new Date();
    const remaining = targetDate - now;

    if (remaining <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const h = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const m = Math.floor((remaining / (1000 * 60)) % 60);
    const s = Math.floor((remaining / 1000) % 60);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// 10. Delivery Search Filter
function renderDeliveryTable(apts) {
  const tbody = document.getElementById('delivery-table-body');
  if (!tbody) return;

  if (!apts || apts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-6 text-center text-gray-500">배달 가능 권역 정보를 불러오는 중입니다.</td></tr>`;
    return;
  }

  tbody.innerHTML = apts.map(apt => `
    <tr class="border-b border-gray-100 hover:bg-red-50/40 transition-colors">
      <td class="py-3.5 px-4 font-bold text-gray-900">${apt.name}</td>
      <td class="py-3.5 px-4 text-sm text-gray-600">${apt.area}</td>
      <td class="py-3.5 px-4 text-sm font-semibold text-gray-800">${apt.minOrder}</td>
      <td class="py-3.5 px-4 text-sm text-gray-600">${apt.rounds}</td>
      <td class="py-3.5 px-4 text-sm">
        <span class="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-xs border border-emerald-200">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> ${apt.status}
        </span>
      </td>
    </tr>
  `).join('');
}

function initDeliverySearch() {
  const searchInput = document.getElementById('delivery-apt-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const apts = STORES[currentStoreKey].deliveryApts;

    if (!query) {
      renderDeliveryTable(apts);
      return;
    }

    const filtered = apts.filter(a => 
      a.name.toLowerCase().includes(query) || 
      a.area.toLowerCase().includes(query)
    );

    const tbody = document.getElementById('delivery-table-body');
    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5" class="py-8 text-center text-gray-500">
            <span class="material-symbols-outlined text-3xl mb-1 text-gray-400">search_off</span>
            <div>'${query}' 검색 결과가 없습니다.</div>
            <div class="text-xs text-gray-400 mt-1">인근 빌라 및 주택가는 지점 전화(${STORES[currentStoreKey].tel})로 문의하시면 즉시 배송 여부를 확인해 드립니다.</div>
          </td>
        </tr>`;
    } else {
      renderDeliveryTable(filtered);
    }
  });
}

// 11. Recruitment Form (Hiring Procedure Act Arts. 4-3 & 11 Compliant)
function initRecruitmentForm() {
  const form = document.getElementById('recruit-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['applicant_name'].value.trim();
    const phone = form.elements['applicant_phone'].value.trim();
    const area = form.elements['applicant_area'].value.trim();
    const branch = form.elements['applicant_branch'].value;
    const role = form.elements['applicant_role'].value;
    const exp = form.elements['applicant_exp'].value;
    const consentEssential = form.elements['consent_essential'].checked;
    const consentTalentPool = form.elements['consent_talent_pool'].checked;

    if (!name || !phone || !area || !branch || !role || !exp) {
      alert('필수 입력 항목을 모두 입력해 주세요.');
      return;
    }

    if (!consentEssential) {
      alert('채용절차법 및 개인정보보호법에 따른 [필수] 개인정보 수집 및 5일 이내 파기 동의에 체크해 주셔야 지원이 가능합니다.');
      return;
    }

    // Success Modal
    openRecruitSuccessModal({
      name,
      phone,
      branchName: STORES[branch] ? STORES[branch].shortName : branch,
      role,
      consentTalentPool
    });

    form.reset();
  });
}

// 12. B2B Wholesale Form Handling
function initB2BForm() {
  const form = document.getElementById('b2b-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const company = form.elements['b2b_company'].value.trim();
    const manager = form.elements['b2b_manager'].value.trim();
    const phone = form.elements['b2b_phone'].value.trim();
    const bizType = form.elements['b2b_biz_type'].value;
    const items = form.elements['b2b_items'].value.trim();
    const branch = form.elements['b2b_branch'].value;

    if (!company || !manager || !phone || !bizType) {
      alert('기관/업체명, 담당자 성함, 연락처 및 업종을 모두 입력해 주세요.');
      return;
    }

    openB2BSuccessModal({
      company,
      manager,
      phone,
      bizType,
      items,
      branchName: STORES[branch] ? STORES[branch].shortName : '경기 동부 통합센터'
    });

    form.reset();
  });
}

// 13. Modals Management
function initModalListeners() {
  // Close buttons with class 'modal-close-trigger'
  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close on outside click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Digital Flyer Buttons
  const openFlyerBtns = document.querySelectorAll('.open-flyer-modal-btn');
  openFlyerBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      openDigitalFlyerModal();
    });
  });

  // App Guide Modal Buttons
  const openAppBtns = document.querySelectorAll('.open-app-guide-btn');
  openAppBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      openAppGuideModal();
    });
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(el => {
    el.classList.remove('active');
  });
  document.body.style.overflow = '';
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Digital Flyer Modal Functions
function openDigitalFlyerModal() {
  currentFlyerPage = 1;
  flyerZoomLevel = 1;
  updateFlyerModalView();
  showModal('modal-digital-flyer');
}

function updateFlyerModalView() {
  const s = STORES[currentStoreKey];
  const pageText = document.getElementById('flyer-page-indicator');
  const flyerImg = document.getElementById('flyer-modal-image');
  const flyerTitle = document.getElementById('flyer-modal-title');

  if (flyerTitle) flyerTitle.textContent = `${s.shortName} 금주의 고해상도 스마트 전단 (2026.11.13 ~ 11.19)`;
  if (pageText) pageText.textContent = `${currentFlyerPage} / 2 페이지`;

  if (flyerImg) {
    flyerImg.src = currentFlyerPage === 1 ? 'images/mk-event-seafood-meat.jpg' : 'images/mk-popup-kimjang.jpg';
    flyerImg.style.transform = `scale(${flyerZoomLevel})`;
  }
}

window.nextFlyerPage = function() {
  if (currentFlyerPage < 2) {
    currentFlyerPage++;
    updateFlyerModalView();
  }
};

window.prevFlyerPage = function() {
  if (currentFlyerPage > 1) {
    currentFlyerPage--;
    updateFlyerModalView();
  }
};

window.zoomInFlyer = function() {
  if (flyerZoomLevel < 2.5) {
    flyerZoomLevel += 0.25;
    const flyerImg = document.getElementById('flyer-modal-image');
    if (flyerImg) flyerImg.style.transform = `scale(${flyerZoomLevel})`;
  }
};

window.zoomOutFlyer = function() {
  if (flyerZoomLevel > 0.75) {
    flyerZoomLevel -= 0.25;
    const flyerImg = document.getElementById('flyer-modal-image');
    if (flyerImg) flyerImg.style.transform = `scale(${flyerZoomLevel})`;
  }
};

window.shareFlyerKakao = function() {
  const shareUrl = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert(`[${STORES[currentStoreKey].shortName}] 금주 스마트 전단 링크가 복사되었습니다!\n카카오톡 또는 문자로 지인에게 공유해 보세요.`);
    });
  } else {
    alert(`전단 링크: ${shareUrl}`);
  }
};

// Deal Detail Modal
window.openDealDetailModal = function(id) {
  const item = DEALS_DATA.find(d => d.id === id);
  if (!item) return;

  const content = document.getElementById('deal-detail-content');
  if (content) {
    content.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="rounded-xl overflow-hidden bg-gray-100 aspect-square">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        </div>
        <div>
          <span class="${item.badgeType} mb-2">${item.badgeText}</span>
          <div class="text-xs text-gray-500 mb-1">${item.origin} · ${item.tag}</div>
          <h3 class="text-2xl font-black text-gray-900 mb-2">${item.name}</h3>
          <p class="text-sm text-gray-600 mb-4">${item.desc}</p>
          
          <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4">
            <div class="flex justify-between items-center text-sm text-gray-500 mb-1">
              <span>기준가격 (공정위 20일 최저가/시가)</span>
              <span class="line-through font-medium">${item.regPrice}원</span>
            </div>
            <div class="flex justify-between items-center text-base text-gray-800 font-bold mb-2">
              <span>매장 일반 판매가</span>
              <span>${item.storePrice}원</span>
            </div>
            <div class="flex justify-between items-center bg-red-100/70 p-3 rounded-lg border border-red-200 text-red-900">
              <span class="font-extrabold flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">phone_iphone</span> 슈켓 앱 쿠폰 적용가
              </span>
              <span class="text-2xl font-black text-red-600">${item.appPrice}원 <span class="text-xs font-bold text-red-700">(${item.discountRate} 할인)</span></span>
            </div>
          </div>

          <div class="flex gap-2">
            <a href="${STORES[currentStoreKey].appUrl}" target="_blank" class="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm text-center rounded-lg shadow-md transition-colors flex items-center justify-center gap-1">
              <span class="material-symbols-outlined text-sm">redeem</span> 슈켓 앱에서 쿠폰받기
            </a>
            <button onclick="closeAllModals()" class="px-5 py-3 border border-gray-300 hover:bg-gray-100 font-bold text-sm text-gray-700 rounded-lg">
              닫기
            </button>
          </div>
        </div>
      </div>
    `;
  }
  showModal('modal-deal-detail');
};

// Recipe Detail Modal
window.openRecipeModal = function(recipeId) {
  const r = RECIPES_DATA.find(x => x.id === recipeId);
  if (!r) return;

  const content = document.getElementById('recipe-modal-content');
  if (content) {
    content.innerHTML = `
      <div class="mb-4">
        <span class="text-xs font-extrabold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">${r.relatedBranch}</span>
        <h3 class="text-2xl font-black text-gray-900 mt-2">${r.title}</h3>
        <p class="text-sm text-gray-500">${r.subtitle} · 조리시간 ${r.time} · 난이도 ${r.level}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="rounded-xl overflow-hidden aspect-video bg-gray-100">
          <img src="${r.image}" alt="${r.title}" class="w-full h-full object-cover">
        </div>
        <div class="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
          <h4 class="font-extrabold text-amber-900 text-sm mb-2 flex items-center gap-1">
            <span class="material-symbols-outlined text-base">shopping_basket</span> 재료 & 매장 코너 안내
          </h4>
          <div class="text-xs text-amber-800 font-medium mb-3">📍 ${r.storeCorner}</div>
          <ul class="text-xs text-gray-700 space-y-1.5 list-disc pl-4">
            ${r.ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="font-extrabold text-gray-900 text-base mb-3 flex items-center gap-1">
          <span class="material-symbols-outlined text-red-600">restaurant</span> 20분 완성 4단계 조리법
        </h4>
        <div class="space-y-3">
          ${r.steps.map((step, idx) => `
            <div class="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span class="w-6 h-6 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">${idx + 1}</span>
              <p class="text-sm text-gray-800 leading-relaxed">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="bg-gray-100 p-3.5 rounded-lg text-xs text-gray-700 flex items-start gap-2">
        <span class="material-symbols-outlined text-base text-amber-600 shrink-0">lightbulb</span>
        <div><strong>셰프의 팁:</strong> ${r.chefTip}</div>
      </div>
    `;
  }
  showModal('modal-recipe-detail');
};

// App Guide Modal
function openAppGuideModal() {
  const s = STORES[currentStoreKey];
  const nameEl = document.getElementById('app-modal-store-name');
  if (nameEl) nameEl.textContent = s.shortName;
  showModal('modal-app-guide');
}

// Recruit Success Modal
function openRecruitSuccessModal(data) {
  const content = document.getElementById('recruit-success-content');
  if (content) {
    content.innerHTML = `
      <div class="text-center py-4">
        <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <span class="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-2">입사 지원이 정상 접수되었습니다!</h3>
        <p class="text-sm text-gray-600 mb-6">
          <strong>${data.name}</strong> 님의 지원서가 <strong>${data.branchName} (${data.role})</strong> 담당 지점장에게 실시간 안전하게 전달되었습니다.
        </p>

        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-left text-xs text-gray-700 space-y-2 mb-6">
          <div class="flex justify-between">
            <span class="text-gray-500">지원 지점</span>
            <span class="font-bold">${data.branchName}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">희망 직무</span>
            <span class="font-bold">${data.role}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">연락처</span>
            <span class="font-bold">${data.phone}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">인재풀 보관 동의</span>
            <span class="font-bold text-blue-600">${data.consentTalentPool ? '동의 (결원 시 우선 연락)' : '미동의 (5일 내 즉시 파기)'}</span>
          </div>
        </div>

        <div class="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs text-amber-800 text-left mb-6">
          ⚖️ <strong>채용절차법 제11조 및 개인정보보호법 준수 안내:</strong><br>
          합격 여부는 접수 후 2영업일 이내에 기재하신 휴대전화로 유선 또는 문자 안내드립니다. 불합격자의 개인정보는 채용 종료 후 5일 이내에 지체 없이 영구 파기됩니다.
        </div>

        <button onclick="closeAllModals()" class="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-md transition-colors">
          확인 완료
        </button>
      </div>
    `;
  }
  showModal('modal-recruit-success');
}

// B2B Success Modal
function openB2BSuccessModal(data) {
  const content = document.getElementById('b2b-success-content');
  const ticketNo = 'B2B-' + Math.floor(100000 + Math.random() * 900000);
  if (content) {
    content.innerHTML = `
      <div class="text-center py-4">
        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <span class="material-symbols-outlined text-4xl">verified</span>
        </div>
        <h3 class="text-2xl font-black text-gray-900 mb-1">식자재 대량 납품 견적이 접수되었습니다!</h3>
        <p class="text-xs font-mono text-gray-400 mb-4">접수 번호: ${ticketNo}</p>
        <p class="text-sm text-gray-600 mb-6">
          <strong>${data.company} (${data.manager} 담당자님)</strong>의 대량 견적 요청서가 E플러스마트 ${data.branchName} B2B 전문 MD에게 전달되었습니다.
        </p>

        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-left text-xs text-gray-700 space-y-2 mb-6">
          <div class="flex justify-between">
            <span class="text-gray-500">기관/업체명</span>
            <span class="font-bold">${data.company}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">업종 분류</span>
            <span class="font-bold">${data.bizType}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">납품 희망 품목</span>
            <span class="font-bold">${data.items || '농수축산 및 공산품 종합'}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">담당자 연락처</span>
            <span class="font-bold">${data.phone}</span>
          </div>
        </div>

        <div class="bg-blue-50 p-3 rounded-lg border border-blue-200 text-xs text-blue-800 text-left mb-6">
          🚚 <strong>새벽 콜드체인 맞춤 배송 & 세금계산서 발행 안내:</strong><br>
          신청 후 24시간 이내에 담당 MD가 유선으로 상세 단가표(도매가 기준) 및 일별 지정 배송 스케줄을 친절히 상담해 드립니다.
        </div>

        <button onclick="closeAllModals()" class="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-md transition-colors">
          확인 완료
        </button>
      </div>
    `;
  }
  showModal('modal-b2b-success');
}

// 14. Mobile Drawer Navigation
function initMobileDrawer() {
  const drawerBtn = document.getElementById('mobile-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('mobile-drawer-close');

  if (drawerBtn && drawer) {
    drawerBtn.addEventListener('click', () => {
      drawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', () => {
      drawer.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  // Close drawer when clicking a link
  if (drawer) {
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }
}
