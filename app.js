/**
 * (주)피케이유통 E플러스마트 평내점 & 퇴계원점 공식 홈페이지
 * Client-Side Interactive Hub (No-Database Static Architecture)
 */

const FLYERS_DATA = {
  weekend: {
    id: 'weekend',
    badge: '주말 3일간 반값 릴레이',
    branch: '평내본점 · 퇴계원점 동시 진행',
    period: '이번 주 금 · 토 · 일 (3일간 한정수량)',
    title: '주말 3일간 반값 릴레이 대특가전',
    subtitle: '산지직송 제철 청과부터 1등급 한우·한돈, 활수산물까지 주말 장바구니 물가를 확 낮춥니다.',
    image: 'images/hero-fresh-market.jpg',
    items: [
      { category: '정육특가', name: '국내산 1등급 한우 등심 / 국거리 (100g)', origin: '국내산', normalPrice: '9,800원', salePrice: '6,480원', badge: '34% 할인' },
      { category: '정육특가', name: '한돈 생삼겹살 / 목살 구이용 (100g)', origin: '국내산', normalPrice: '2,980원', salePrice: '1,980원', badge: '초특가' },
      { category: '산지청과', name: '김천 고당도 샤인머스캣 (1.5kg / 박스)', origin: '국내산(김천)', normalPrice: '18,900원', salePrice: '11,900원', badge: '당도보장' },
      { category: '산지청과', name: '문경 꿀부사 사과 (5~6입 / 봉)', origin: '국내산(문경)', normalPrice: '12,800원', salePrice: '8,900원', badge: '새벽입고' },
      { category: '수제반찬', name: '어머니 손맛 수제 밑반찬 골라담기 (3팩)', origin: '당일조리', normalPrice: '13,500원', salePrice: '10,000원', badge: '인기 1위' },
      { category: '공산생필', name: '해표 식용유 (1.8L) / 진라면 멀티팩 (5입)', origin: '기획특가', normalPrice: '6,500원', salePrice: '4,480원', badge: '한정수량' }
    ]
  },
  produce: {
    id: 'produce',
    badge: '산지직송 기획전',
    branch: '평내본점 · 퇴계원점 농산코너',
    period: '매주 수 · 목 산지직송 데이',
    title: '가락시장 & 전국 산지직송 제철 농수산물 모음전',
    subtitle: '매일 새벽 경매장과 산지 농가에서 직송된 가장 신선한 채소와 과일을 만나보세요.',
    image: 'images/corner-produce.jpg',
    items: [
      { category: '제철과일', name: '제주 서귀포 고당도 노지감귤 (3kg / 박스)', origin: '국내산(제주)', normalPrice: '13,900원', salePrice: '9,900원', badge: '산지직송' },
      { category: '신선채소', name: '해남 황토 속이 꽉 찬 알배기 배추 (망/3포기)', origin: '국내산(해남)', normalPrice: '11,500원', salePrice: '7,900원', badge: '김장·국거리' },
      { category: '신선채소', name: '친환경 흙대파 (1단) / 아삭이 상추·깻잎 모둠', origin: '국내산', normalPrice: '3,980원', salePrice: '2,480원', badge: '아침입고' },
      { category: '신선채소', name: '강원도 고랭지 완숙 토마토 (1.5kg / 팩)', origin: '국내산', normalPrice: '8,900원', salePrice: '5,980원', badge: '33% 할인' }
    ]
  },
  banchan: {
    id: 'banchan',
    badge: '당일조리 수제반찬',
    branch: '평내본점 반찬코너 특선',
    period: '매일 오전 10시 / 오후 3시 당일 조리',
    title: '어머니 손맛 수제반찬 3종 골라담기 10,000원',
    subtitle: '전문 조리사가 매일 아침 천연 육수와 신선한 재료로 직접 만들고 당일 소진합니다.',
    image: 'images/corner-banchan.jpg',
    items: [
      { category: '인기반찬', name: '한돈 메추리알 장조림 / 연근조림 / 우엉조림', origin: '당일조리', normalPrice: '팩당 4,500원', salePrice: '3팩 10,000원', badge: '골라담기' },
      { category: '나물·무침', name: '참기름 시금치나물 / 도라지무침 / 콩나물무침', origin: '국내산 채소', normalPrice: '팩당 4,000원', salePrice: '3팩 10,000원', badge: '골라담기' },
      { category: '일품요리', name: '두툼 수제 계란말이 / 잔멸치 견과류 볶음', origin: '당일조리', normalPrice: '팩당 4,500원', salePrice: '3팩 10,000원', badge: '인기메뉴' },
      { category: '국·찌개', name: '한우 사골 우거지된장국 / 얼큰 육개장 (2~3인분)', origin: '당일조리', normalPrice: '7,900원', salePrice: '5,900원', badge: '특선국물' }
    ]
  }
};

const NOTICES_DATA = [
  {
    id: 'notice-1',
    category: '공지',
    branch: '전 지점',
    date: '상시 안내',
    isPinned: true,
    title: '평내점 · 퇴계원점 연중무휴 정상영업 시간 및 무료 주차 안내',
    summary: '평내점(08:30~23:00) 및 퇴계원점(08:30~22:30)은 명절 및 법정공휴일에도 정상 영업합니다.',
    content: `안녕하세요, (주)피케이유통 E플러스마트입니다.\n\n저희 E플러스마트 평내 본점과 퇴계원점은 지역 주민 여러분의 편리한 장보기를 위해 연중무휴로 운영되고 있습니다.\n\n• 평내 본점: 오전 08:30 ~ 오후 23:00 (경기 남양주시 경춘로 1291 / 평내호평역 도보 12분)\n• 퇴계원점: 오전 08:30 ~ 오후 22:30 (경기 남양주시 퇴계원로 20 / 퇴계원역 도보 3분)\n• 주차 및 편의시설: 평내점 지상 전용 주차장(30여 대) 무료 이용 및 OTIS 대형 승강기로 쇼핑카트 전 층 이동이 가능합니다.`
  },
  {
    id: 'notice-2',
    category: '이벤트',
    branch: '평내 본점',
    date: '신규 혜택',
    isPinned: true,
    title: '이플러스마트 평내점 공식 앱(APP) 설치 시 3,000원 할인쿠폰 및 포인트 적립 안내',
    summary: '앱 설치 후 휴대폰 번호로 간편 로그인하시면 포인트 1% 즉시 적립과 스마트 영수증 혜택을 받으실 수 있습니다.',
    content: `복잡한 웹사이트 회원가입 없이, 기존 매장 POS와 100% 실시간 연동되는 '이플러스마트 평내점 APP'(애즈위메이크 개발)을 이용해 보세요!\n\n1. 모바일 포인트카드: 바코드 제시만으로 결제 금액 즉시 적립\n2. 스마트 전자영수증: 종이 영수증 없이 앱에서 구매 내역 및 교환·환불 확인\n3. 모바일 장보기 & 할인쿠폰: 앱 전용 특가 쿠폰 및 주말 세일 알림 푸시 제공\n\n구글 플레이스토어에서 '이플러스마트 평내점'을 검색하시거나 매장 내 QR코드를 스캔해 주세요.`
  },
  {
    id: 'notice-3',
    category: '안내',
    branch: '평내 · 퇴계원',
    date: '생활 밀착',
    isPinned: false,
    title: '남양주시 쓰레기 종량제봉투 공식 지정 판매소 및 지역화폐(Thank You Pay) 가맹 안내',
    summary: '남양주시 전 규격 종량제봉투(낱장/묶음) 상시 보유 및 남양주 지역화폐 인센티브 결제가 가능합니다.',
    content: `E플러스마트는 남양주시가 공식 지정한 쓰레기 종량제봉투 및 대형폐기물 스티커 판매소입니다.\n\n• 취급 품목: 일반용·음식물용 종량제봉투 전 규격 (5L, 10L, 20L, 50L 등 낱장 및 묶음 구매 가능)\n• 결제 혜택: 남양주시 지역화폐(Thank You Pay) 가맹점으로 충전 인센티브 혜택을 그대로 누리실 수 있습니다.`
  },
  {
    id: 'notice-4',
    category: '안내',
    branch: '평내 본점',
    date: '안전 점검',
    isPinned: false,
    title: '평내점 OTIS 정품 대형 엘리베이터 정기 안전점검 완료 안내',
    summary: '무거운 쇼핑 카트, 유모차, 어르신 고객님도 턱 없이 안전하게 이동하실 수 있습니다.',
    content: `E플러스마트 평내점은 매장 내 OTIS 정품 대형 엘리베이터를 완비하여 정기 안전점검을 철저히 시행하고 있습니다.\n\n무거운 대용량 식자재 카트는 물론 유모차나 휠체어를 이용하시는 고객님, 그리고 매장 근무 직원분들 모두 계단 부담 없이 쾌적하고 안전하게 이동하실 수 있습니다.`
  }
];

const JOBS_DATA = [
  {
    id: 'job-cashier',
    branch: 'both',
    branchLabel: '평내점 / 퇴계원점',
    partValue: 'cashier',
    badge: '신입 · 경력 무관',
    badgeType: 'green',
    title: '계산원 (캐셔) 파트 정직원 · 파트타임',
    desc: '고객 응대 및 POS 바코드 결제, 모바일 앱 포인트 적립 안내 / 초보자도 1:1 친절 교육 후 배치',
    salary: '월 250만 ~ 260만 원+',
    subInfo: '주 5일 근무 · 법정공휴일 대체휴무'
  },
  {
    id: 'job-logistics',
    branch: 'pyeongnae',
    branchLabel: '평내 본점',
    partValue: 'logistics',
    badge: '급구 · 정규직',
    badgeType: 'orange',
    title: '공산품 진열 및 매장 물류 관리 직원',
    desc: '가공식품·생활용품 입출고 검수, 매장 진열 및 재고 관리 / 엘리베이터 완비로 쾌적한 작업 동선',
    salary: '월 260만 ~ 280만 원+',
    subInfo: '경력자 급여 우대 협의 · 4대보험/퇴직금'
  },
  {
    id: 'job-produce',
    branch: 'toegyewon',
    branchLabel: '퇴계원점 / 평내점',
    partValue: 'produce',
    badge: '팀장 및 사원 (오후조 포함)',
    badgeType: 'green',
    title: '농산팀장 및 농산(청과·채소) 담당 직원',
    desc: '산지직송 과일·채소 신선도 관리, 소포장 및 진열 연출 / 마트 농산 파트 경력자 특별 우대',
    salary: '월 280만 ~ 330만 원+',
    subInfo: '직책 수당 별도 · 주 5일제 보장'
  },
  {
    id: 'job-banchan',
    branch: 'pyeongnae',
    branchLabel: '평내 본점',
    partValue: 'banchan',
    badge: '주방 경력자 환영',
    badgeType: 'orange',
    title: '수제 반찬코너 조리 및 포장 담당',
    desc: '매일 아침 가정식 밑반찬·국류 조리 및 위생 용기 포장, 쇼케이스 진열 / 한식 조리 유경험자 환영',
    salary: '월 260만 ~ 300만 원+',
    subInfo: '중식 및 유니폼 지급 · 쾌적한 조리실'
  }
];

/* ==========================================================================
   1. Light-Dismiss Dialog Support & Mandatory Fallback (light-dismiss-a-dialog)
   ========================================================================== */
function setupDialogs() {
  const dialogs = document.querySelectorAll('dialog[closedby="any"]');

  dialogs.forEach((dialog) => {
    // Fallback for browsers without native HTMLDialogElement.prototype.closedBy support
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (isDialogContent) return;
        dialog.close();
      });
    }
  });
}

/* ==========================================================================
   2. Required Field Feedback & ARIA Sync (required-field-feedback)
   ========================================================================== */
const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  const updateState = (input) => {
    const isValid = input.checkValidity();
    input.classList.toggle('user-invalid-fallback', !isValid);
    input.classList.toggle('user-valid-fallback', isValid);

    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  };

  const handleEvent = (event) => {
    const input = event.target;

    if (event.type === 'reset') {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove('user-invalid-fallback', 'user-valid-fallback');
        control.removeAttribute('aria-invalid');
      }
      return;
    }

    if (!input || !input.checkValidity) return;

    if (event.type === 'input' || event.type === 'change') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred) {
        updateState(input);
      }
    } else if (event.type === 'blur') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted) {
        updateState(input);
      }
    }
  };

  const init = (root = document) => {
    if (CSS.supports('selector(:user-invalid)')) return;
    root.addEventListener('blur', handleEvent, true);
    root.addEventListener('input', handleEvent);
    root.addEventListener('change', handleEvent);
    root.addEventListener('reset', handleEvent, true);
  };

  return { init };
})();

function setupFormAriaSync(form) {
  if (!form) return;
  UserInvalidFallback.init(form);

  const syncAriaInvalid = (input) => {
    if (!input.checkValidity()) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  };

  form.addEventListener('blur', (e) => {
    if (e.target && e.target.matches && e.target.matches('[required]')) {
      syncAriaInvalid(e.target);
    }
  }, true);

  form.addEventListener('submit', () => {
    form.querySelectorAll('[required]').forEach(syncAriaInvalid);
  });

  form.addEventListener('input', (e) => {
    if (e.target && e.target.matches && e.target.matches('[required]') && e.target.checkValidity()) {
      e.target.removeAttribute('aria-invalid');
    }
  });
}

/* ==========================================================================
   3. Real-Time KST Store Status Badge
   ========================================================================== */
function updateStoreLiveStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  // 평내점: 08:30 (510) ~ 23:00 (1380)
  const pyeongnaeOpen = totalMinutes >= 510 && totalMinutes < 1380;
  // 퇴계원점: 08:30 (510) ~ 22:30 (1350)
  const toegyewonOpen = totalMinutes >= 510 && totalMinutes < 1350;

  const pBadge = document.getElementById('status-pyeongnae');
  const tBadge = document.getElementById('status-toegyewon');

  if (pBadge) {
    pBadge.innerHTML = pyeongnaeOpen
      ? '<span class="w-2 h-2 rounded-full bg-primary animate-ping inline-block mr-1"></span>영업중 (08:30 ~ 23:00)'
      : '<span class="w-2 h-2 rounded-full bg-outline inline-block mr-1"></span>영업준비중 (08:30 오픈)';
  }
  if (tBadge) {
    tBadge.innerHTML = toegyewonOpen
      ? '<span class="w-2 h-2 rounded-full bg-secondary-container animate-ping inline-block mr-1"></span>영업중 (08:30 ~ 22:30)'
      : '<span class="w-2 h-2 rounded-full bg-outline inline-block mr-1"></span>영업준비중 (08:30 오픈)';
  }
}

/* ==========================================================================
   4. Interactive Weekly Flyer Modal Viewer
   ========================================================================== */
window.openFlyerModal = function (flyerKey) {
  const data = FLYERS_DATA[flyerKey] || FLYERS_DATA.weekend;
  const dialog = document.getElementById('flyer-dialog');
  if (!dialog) return;

  document.getElementById('flyer-dialog-badge').textContent = data.badge;
  document.getElementById('flyer-dialog-branch').textContent = data.branch;
  document.getElementById('flyer-dialog-title').textContent = data.title;
  document.getElementById('flyer-dialog-subtitle').textContent = data.subtitle;
  document.getElementById('flyer-dialog-period').textContent = data.period;

  const imgEl = document.getElementById('flyer-dialog-img');
  imgEl.src = data.image;
  imgEl.alt = data.title;

  const zoomContainer = document.getElementById('flyer-zoom-box');
  zoomContainer.classList.remove('zoomed');

  const tbody = document.getElementById('flyer-dialog-items');
  tbody.innerHTML = data.items
    .map(
      (item) => `
      <tr class="border-b border-surface-variant/60 hover:bg-surface-container-low/60 transition-colors">
        <td class="py-3 px-3 font-semibold text-primary text-xs whitespace-nowrap">${item.category}</td>
        <td class="py-3 px-3 font-bold text-on-surface text-sm">
          ${item.name}
          <span class="inline-block ml-1.5 px-2 py-0.5 text-[11px] rounded-full bg-primary/10 text-primary font-semibold">${item.origin}</span>
        </td>
        <td class="py-3 px-3 text-right text-outline line-through text-xs whitespace-nowrap">${item.normalPrice}</td>
        <td class="py-3 px-3 text-right font-extrabold text-secondary-container text-sm whitespace-nowrap">${item.salePrice}</td>
        <td class="py-3 px-3 text-right whitespace-nowrap">
          <span class="px-2.5 py-0.5 rounded-full bg-secondary-container/15 text-secondary text-xs font-bold">${item.badge}</span>
        </td>
      </tr>
    `
    )
    .join('');

  dialog.showModal();
};

window.toggleFlyerZoom = function () {
  const zoomContainer = document.getElementById('flyer-zoom-box');
  if (zoomContainer) {
    zoomContainer.classList.toggle('zoomed');
  }
};

/* ==========================================================================
   5. Store Notices Filter & Detail Modal
   ========================================================================== */
function renderNotices(filterCategory = '전체') {
  const container = document.getElementById('notices-list-container');
  if (!container) return;

  const filtered =
    filterCategory === '전체'
      ? NOTICES_DATA
      : NOTICES_DATA.filter((n) => n.category === filterCategory);

  container.innerHTML = filtered
    .map((notice) => {
      const badgeStyle =
        notice.category === '공지'
          ? 'bg-primary/10 text-primary'
          : notice.category === '이벤트'
          ? 'bg-secondary-container/15 text-secondary'
          : 'bg-surface-container-high text-on-surface';

      return `
      <div class="pb-3.5 border-b border-surface-variant/60 last:border-b-0 last:pb-0">
        <div class="flex items-center justify-between gap-2 mb-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded ${badgeStyle} font-label-xs text-label-xs font-bold">${notice.category}</span>
            <span class="text-xs font-semibold text-on-surface-variant">${notice.branch}</span>
          </div>
          <span class="text-outline text-label-xs">${notice.date}</span>
        </div>
        <button
          type="button"
          onclick="openNoticeModal('${notice.id}')"
          class="text-left font-label-lg text-label-lg font-bold text-on-surface hover:text-primary transition-colors block w-full"
        >
          ${notice.title}
        </button>
        <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-1">
          ${notice.summary}
        </p>
      </div>
    `;
    })
    .join('');
}

window.filterNotices = function (category, btnEl) {
  document.querySelectorAll('.notice-filter-btn').forEach((btn) => {
    btn.classList.remove('bg-primary', 'text-on-primary');
    btn.classList.add('bg-surface-container-low', 'text-on-surface-variant');
  });
  if (btnEl) {
    btnEl.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
    btnEl.classList.add('bg-primary', 'text-on-primary');
  }
  renderNotices(category);
};

window.openNoticeModal = function (noticeId) {
  const notice = NOTICES_DATA.find((n) => n.id === noticeId) || NOTICES_DATA[0];
  const dialog = document.getElementById('notice-dialog');
  if (!dialog) return;

  document.getElementById('notice-dialog-category').textContent = `${notice.category} · ${notice.branch}`;
  document.getElementById('notice-dialog-title').textContent = notice.title;
  document.getElementById('notice-dialog-date').textContent = notice.date;
  document.getElementById('notice-dialog-body').textContent = notice.content;

  dialog.showModal();
};

/* ==========================================================================
   6. Recruiting Position Filter & One-Click Form Auto-Fill
   ========================================================================== */
function renderJobs(branchFilter = 'all') {
  const container = document.getElementById('jobs-list-container');
  if (!container) return;

  const filtered =
    branchFilter === 'all'
      ? JOBS_DATA
      : JOBS_DATA.filter((job) => job.branch === branchFilter || job.branch === 'both');

  container.innerHTML = filtered
    .map((job) => {
      const badgeClass =
        job.badgeType === 'orange'
          ? 'bg-secondary-container/15 text-secondary'
          : 'bg-primary/10 text-primary';

      return `
      <div class="bg-surface-container-lowest p-5 rounded-2xl border border-surface-variant elevation-ambient flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/50 transition-all">
        <div>
          <div class="flex flex-wrap items-center gap-2 mb-1.5">
            <span class="px-2.5 py-0.5 rounded-full ${badgeClass} font-label-xs text-label-xs font-bold">${job.badge}</span>
            <span class="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs font-semibold">${job.branchLabel}</span>
          </div>
          <h4 class="font-title-md text-title-md font-bold text-on-surface">${job.title}</h4>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">${job.desc}</p>
        </div>
        <div class="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-surface-variant/50">
          <div class="sm:text-right">
            <span class="block font-label-lg text-label-lg font-extrabold text-primary">${job.salary}</span>
            <span class="text-outline text-label-xs block">${job.subInfo}</span>
          </div>
          <button
            type="button"
            onclick="selectJobForApplication('${job.branch}', '${job.partValue}', '${job.title}')"
            class="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-on-primary font-label-md text-label-md font-bold transition-colors"
          >
            <span>선택 후 지원</span>
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    `;
    })
    .join('');
}

window.filterJobsByBranch = function (branch, btnEl) {
  document.querySelectorAll('.job-filter-btn').forEach((btn) => {
    btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
    btn.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
  });
  if (btnEl) {
    btnEl.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');
    btnEl.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
  }
  renderJobs(branch);
};

window.selectJobForApplication = function (branch, partValue, jobTitle) {
  const branchSelect = document.getElementById('apply-branch');
  const partSelect = document.getElementById('apply-part');
  const nameInput = document.getElementById('apply-name');
  const formCard = document.getElementById('recruitment-form');

  if (branchSelect) {
    branchSelect.value = branch === 'toegyewon' ? 'toegyewon' : 'pyeongnae';
  }
  if (partSelect) {
    partSelect.value = partValue;
  }
  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  showToast(`'${jobTitle}' 포지션이 지원폼에 자동 선택되었습니다.`);
  setTimeout(() => {
    if (nameInput) nameInput.focus();
  }, 450);
};

/* ==========================================================================
   7. Form Submissions (No-DB Client Preview + Direct SMS Action)
   ========================================================================== */
function setupForms() {
  const applyForm = document.getElementById('quick-apply-form');
  const b2bForm = document.getElementById('b2b-inquiry-form');

  setupFormAriaSync(applyForm);
  setupFormAriaSync(b2bForm);

  if (applyForm) {
    applyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!applyForm.checkValidity()) return;

      const name = document.getElementById('apply-name').value.trim();
      const phone = document.getElementById('apply-phone').value.trim();
      const dong = document.getElementById('apply-dong').value.trim();
      const branchEl = document.getElementById('apply-branch');
      const branchText = branchEl.options[branchEl.selectedIndex].text;
      const partEl = document.getElementById('apply-part');
      const partText = partEl.options[partEl.selectedIndex].text;
      const expEl = document.getElementById('apply-exp');
      const expText = expEl.options[expEl.selectedIndex].text;
      const memo = document.getElementById('apply-memo').value.trim() || '없음';

      const smsBody = encodeURIComponent(
        `[(주)피케이유통 E플러스마트 입사지원]\n• 성명: ${name}\n• 연락처: ${phone}\n• 거주지: ${dong}\n• 희망지점: ${branchText}\n• 지원파트: ${partText}\n• 경력: ${expText}\n• 메모: ${memo}`
      );

      openSubmissionModal({
        badge: '30초 간편 입사지원 완료',
        title: `${name}님의 입사지원서가 준비되었습니다!`,
        description:
          '현재 홈페이지는 비로그인·무데이터베이스(No-DB) 모드로 동작 중입니다. 아래 접수 내용을 확인하시거나 원클릭 문자 전송 버튼으로 채용담당자에게 즉시 발송하실 수 있습니다.',
        summaryRows: [
          ['지원자 성명', name],
          ['연락처', phone],
          ['거주 지역', dong],
          ['희망 근무지점', branchText],
          ['희망 지원파트', partText],
          ['경력 사항', expText],
          ['추가 메모', memo]
        ],
        smsHref: `sms:031-574-1134?body=${smsBody}`,
        smsLabel: '스마트폰 문자로 채용담당자에게 즉시 발송'
      });

      applyForm.reset();
    });
  }

  if (b2bForm) {
    b2bForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!b2bForm.checkValidity()) return;

      const typeEl = document.getElementById('b2b-type');
      const typeText = typeEl.options[typeEl.selectedIndex].text;
      const company = document.getElementById('b2b-company').value.trim();
      const contact = document.getElementById('b2b-contact').value.trim();
      const phone = document.getElementById('b2b-phone').value.trim();
      const items = document.getElementById('b2b-items').value.trim() || '상담 시 협의';

      const smsBody = encodeURIComponent(
        `[E플러스마트 B2B 제휴·납품 문의]\n• 문의유형: ${typeText}\n• 업체/단체명: ${company}\n• 담당자: ${contact}\n• 연락처: ${phone}\n• 희망품목/내용: ${items}`
      );

      openSubmissionModal({
        badge: 'B2B 식자재 납품 · 입점 제휴 접수',
        title: `'${company}' 제휴 상담 내용이 정리되었습니다`,
        description:
          '(주)피케이유통 종합유통 담당팀에서 확인 후 신속히 연락드립니다. 급하신 경우 아래 직통 전화 또는 문자 발송을 이용해 주세요.',
        summaryRows: [
          ['문의 구분', typeText],
          ['업체 / 기관명', company],
          ['담당자 성명', contact],
          ['연락처', phone],
          ['희망 품목 / 제안', items]
        ],
        smsHref: `sms:031-574-1134?body=${smsBody}`,
        smsLabel: '유통담당팀에 문자(SMS)로 바로 보내기'
      });

      b2bForm.reset();
    });
  }
}

function openSubmissionModal({ badge, title, description, summaryRows, smsHref, smsLabel }) {
  const dialog = document.getElementById('submission-dialog');
  if (!dialog) return;

  document.getElementById('submission-dialog-badge').textContent = badge;
  document.getElementById('submission-dialog-title').textContent = title;
  document.getElementById('submission-dialog-desc').textContent = description;

  const listEl = document.getElementById('submission-dialog-summary');
  listEl.innerHTML = summaryRows
    .map(
      ([label, val]) => `
      <div class="flex items-start justify-between gap-4 py-2 border-b border-surface-variant/60 last:border-b-0 text-sm">
        <span class="text-on-surface-variant font-medium shrink-0">${label}</span>
        <span class="text-on-surface font-bold text-right">${val}</span>
      </div>
    `
    )
    .join('');

  const smsBtn = document.getElementById('submission-dialog-sms');
  if (smsBtn) {
    smsBtn.href = smsHref;
    smsBtn.querySelector('span.btn-text').textContent = smsLabel;
  }

  dialog.showModal();
}

/* ==========================================================================
   8. App QR Dialog & Utility Toast
   ========================================================================== */
window.openAppQrModal = function () {
  const dialog = document.getElementById('app-qr-dialog');
  if (dialog) dialog.showModal();
};

window.copyTextWithToast = function (text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || `클립보드에 복사되었습니다: ${text}`);
    });
  } else {
    showToast(message || text);
  }
};

window.shareFlyerLink = function (title) {
  const shareUrl = window.location.href.split('#')[0] + '#flyers';
  if (navigator.share) {
    navigator
      .share({
        title: `(주)피케이유통 E플러스마트 - ${title}`,
        text: `${title} 행사 전단을 확인해 보세요!`,
        url: shareUrl
      })
      .catch(() => {});
  } else {
    window.copyTextWithToast(shareUrl, `'${title}' 전단 페이지 주소가 복사되었습니다. 카카오톡이나 문자로 붙여넣기 하세요!`);
  }
};

function showToast(message) {
  const toast = document.getElementById('global-toast');
  const toastText = document.getElementById('global-toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 3200);
}

/* Initialize on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
  updateStoreLiveStatus();
  renderNotices('전체');
  renderJobs('all');
  setupDialogs();
  setupForms();
});
