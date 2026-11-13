# E-PLUS MART — Whole Foods Market Inspired Design System (`DESIGN-WHOLEFOODS.md`)

- **Stitch Project**: `projects/5742010111592971441` (Title: `E-Plus Mart - Whole Foods Market Inspired Redesign`)
- **Stitch Screen**: `projects/5742010111592971441/screens/9ef3df10bd5746d3b6c83a24e9e0da0e`
- **Stitch Design System**: `assets/789784e9ce0f45cb9d7fb45ef4052704` (`Botanical Artisanal Editorial`)
- **Generated Code File**: [`stitch/stitch-wholefoods.html`](file:///Users/jwlee/project/EPlusMart_hp/stitch/stitch-wholefoods.html)
- **Benchmark Reference**: [Whole Foods Market (wholefoodsmarket.com)](https://www.wholefoodsmarket.com/)

---

## 1. Brand Identity & Design Philosophy
Whole Foods Market(홀푸드 마켓)의 핵심 브랜드 철학인 **자연 친화적 프리미엄(Botanical Artisanal Luxury)**과 **타협 없는 식품 안전 기준(Uncompromising Quality Standards)**을 E-플러스 마트에 완벽히 접목했습니다.

화려하고 인위적인 할인 배너 중심의 기존 마트 UI를 탈피하고, **고품격 푸드 매거진 스타일의 에디토리얼 그리드**, **자연에서 온 어스톤(Earth-tone) 컬러 팔레트**, **명확한 로컬 매장 기반 옴니채널 유틸리티**를 구현했습니다.

---

## 2. Color Palette & Materiality
- **Primary Brand Green (식물성 딥 보태니컬 그린)**: `#046F46` / `#005434`
  - 유기농, 신선함, 지속가능성을 상징하는 홀푸드 마켓 시그니처 딥 그린. 브랜드 심볼, 주요 CTA, 인증 마크에 적용.
- **Canvas Base (언블리치드 파치먼트 / 내추럴 크림)**: `#F9F8F5`, `#F4F0EA`
  - 차가운 디지털 화이트/그레이를 배제하고 자연 양지박지 및 린넨 질감을 연상시키는 따뜻한 크림 베이스.
- **Card Surfaces (순백색 에디토리얼 타일)**: `#FFFFFF` (경계선: `1px solid #EFECE6`)
  - 신선한 농축산물 고화질 사진의 발색을 극대화하는 선명한 화이트 카드.
- **Accent Amber / Gold (프라임 스타일 클럽 회원 특가)**: `#D97706` / `#FE932C`
  - 홀푸드의 Amazon Prime Member Savings를 벤치마킹한 골드 앰버 리본 및 할인 배지.
- **Deep Neutral Ink (보태니컬 차콜)**: `#1A2E22` / `#0B1F14`
  - 완전한 블랙(#000) 대신 짙은 녹색조가 감도는 차콜을 사용하여 부드럽고 클래식한 가독성 확보.

---

## 3. Typography Hierarchy
- **Editorial Headlines & Display**: `Merriweather` + `Noto Serif KR` (Serif, `font-weight: 700~900`)
  - 홀푸드의 시그니처 전통 간판 및 장인정신(Artisanal)을 반영한 세리프 헤드라인.
- **UI Labels, Navigation & Commerce**: `Plus Jakarta Sans` + `Pretendard` (Geometric Sans, `font-weight: 500~700`)
  - 가격 정보, 상품명, 매장 유틸리티 등 빠르고 직관적인 정보 탐색을 위한 모던 산세리프.

---

## 4. 11 Core Section Architecture
1. **Top Utility Bar (상단 매장 유틸리티 바)**:
   - 현재 배송/픽업 매장인 `평내본점 (남양주시 평내로 124)` 실시간 영업 상태(08:30~23:00) 및 오늘 배송 마감 시각(21:00) 안내.
   - 금주의 전단(Weekly Circular), 클럽 멤버십 혜택, 고객센터(1588-0000), 로그인/회원가입 퀵 링크.
2. **Main Brand & Universal Search (GNB & 검색 네비게이션)**:
   - 딥 그린 보태니컬 배지 심볼과 `E-PLUS MART (FRESH & ORGANIC / SINCE 1998)` 로고.
   - 주문 방식 전환 필: `🚀 배달로 받기 (1시간 내 도착)` vs `🏬 매장 방문 픽업 (주차 2시간 무료)`.
   - 전체 카테고리 필터가 내장된 유기농 전용 검색창 + 퀵 재구매, 찜한상품(12), 장바구니 요약(3건 / ₩48,900).
3. **Sticky Department Mega Navigation (고정 카테고리 바)**:
   - 7대 핵심 부문: 유기농 과일·채소, 무항생제 축산, 당일 수산, 아티잔 베이커리 & 델리, 로컬 팬트리, 금주의 세일, 품질 기준(Our Standards).
   - 우측 실시간 입고 배지: `오늘 새벽수확 딸기 입고 🍓`.
4. **Editorial Hero Banner (산지 직송 스토리텔링 배너)**:
   - *"산지의 신선함을 그대로, 우리 가족을 위한 가장 정직한 식탁"*.
   - 아침 이슬 맺힌 유기농 채소와 아티잔 사워도우 비주얼 + 듀얼 CTA(`금주의 전단 특가 보기`, `오늘의 신선 직송 장보기`).
   - 홀푸드 프라임 스타일 클럽 회원 플로팅 혜택 배너 (10% 추가할인 + 첫 주문 무료배송).
5. **Whole Foods-Style 4 Value Pillars (식품 철학 4대 원칙)**:
   - `300+ 유해성분 무첨가` (인공감미료, 합성보존료 전면 퇴출)
   - `100% 동물복지 & 무항생제 인증` (자연방목, 성장촉진제 0%)
   - `반경 50km 로컬 푸드 상생` (수확 후 12시간 내 진열)
   - `신선 불만족 100% 무료 환불` (Love It or Return It 보장제)
6. **Visual Department Explorer (원형 비주얼 카테고리)**:
   - 유기농 과일&채소, 무항생제 축산, 산지직송 수산, 아티잔 베이커리, 셰프 델리, 유기농 유제품, 내추럴 와인&맥주 등 7개 부문 라운드 카드.
7. **Weekly Specials & Member Deals Grid (전단 특가 & 클럽 혜택)**:
   - 지리산 무농약 설향 딸기, 1++ 무항생제 한우 채끝, 제주 당일 은갈치, 천연 르방 사워도우 등 4대 대표 특가 상품 카드.
   - 정가 취소선, 회원 할인가, 100g당 단가, 인증 배지, 원클릭 플로팅 담기(+) 버튼.
8. **Our Standards 300+ Spotlight (품질 기준 선언)**:
   - 홀푸드의 상징적 매니페스토인 "우리가 판매하지 않는 것들이 우리의 자부심입니다." 에디토리얼 레이아웃.
   - 금지 성분 리스트(수소화유지 트랜스지방, 아스파탐, 타르색소 등) 및 품질 검사 보고서 열람 링크.
9. **Seasonal Dining & Chef Recipe Inspiration (제철 레시피 허브)**:
   - 셰프가 제안하는 주말 팟로스트 & 가든 샐러드 레시피.
   - 조리시간(35분), 난이도, 셰프 팁 및 `🛒 레시피 재료 5종 한 번에 장바구니 담기` 원클릭 구매 버튼.
10. **Local Store Information & Community Notice (평내본점 로컬 허브)**:
    - 매장 주소, 주차 및 전기차 급속 충전 6기 완비 정보, 픽업 카운터 안내.
    - 다회용 장바구니 사용 시 500원 할인 & 친환경 바이오 에코백 증정 캠페인.
11. **Comprehensive Whole Foods-Style Footer (종합 푸터)**:
    - 주간 셰프 레시피 및 시크릿 할인 쿠폰 뉴스레터 구독 폼.
    - 4개 부문(쇼핑, 품질기준, 회사소개, 고객지원) 디렉토리 링크 및 친환경 인증 마크, 법적 사업자 정보.
