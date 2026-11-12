/**
 * EPLUS MART — Martking Corporate Retail Interactive Frontend (app.js)
 * Client-side interactive preview (No database connected)
 */

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================================
     1. STICKY HEADER & SCROLL-TO-TOP BUTTON
     ========================================================================= */
  const topHeader = document.getElementById("topHeader");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const handleScroll = () => {
    if (window.scrollY > 20) {
      topHeader?.classList.add("is-scrolled");
    } else {
      topHeader?.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* =========================================================================
     2. MARTKING FLOATING TOP-RIGHT LAYER POPUP (3 Slides + Hide Today)
     ========================================================================= */
  const layerPopup = document.getElementById("mkLayerPopup");
  const popupSlides = Array.from(document.querySelectorAll("[data-popup-slide]"));
  const popupDots = Array.from(document.querySelectorAll("[data-popup-dot]"));
  const closePopupBtn = document.getElementById("closePopupBtn");
  const hidePopupTodayBtn = document.getElementById("hidePopupTodayBtn");
  const reopenPopupBtn = document.getElementById("reopenPopupBtn");

  const POPUP_STORAGE_KEY = "eplus_martking_popup_hide_date";
  const todayStr = new Date().toISOString().slice(0, 10);
  let currentPopupSlide = 0;
  let popupTimer = null;

  const setPopupSlide = (index) => {
    currentPopupSlide = (index + popupSlides.length) % popupSlides.length;
    popupSlides.forEach((slide, idx) => {
      const active = idx === currentPopupSlide;
      slide.classList.toggle("is-active", active);
      slide.hidden = !active;
    });
    popupDots.forEach((dot, idx) => {
      const active = idx === currentPopupSlide;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });
  };

  const startPopupRotation = () => {
    stopPopupRotation();
    popupTimer = window.setInterval(() => {
      if (layerPopup && !layerPopup.classList.contains("is-hidden")) {
        setPopupSlide(currentPopupSlide + 1);
      }
    }, 5200);
  };

  const stopPopupRotation = () => {
    if (popupTimer) {
      window.clearInterval(popupTimer);
      popupTimer = null;
    }
  };

  // Check if hidden today
  try {
    if (localStorage.getItem(POPUP_STORAGE_KEY) === todayStr) {
      layerPopup?.classList.add("is-hidden");
    } else {
      startPopupRotation();
    }
  } catch {
    startPopupRotation();
  }

  popupDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.popupDot || 0);
      setPopupSlide(idx);
      startPopupRotation();
    });
  });

  layerPopup?.addEventListener("mouseenter", stopPopupRotation);
  layerPopup?.addEventListener("mouseleave", startPopupRotation);

  closePopupBtn?.addEventListener("click", () => {
    layerPopup?.classList.add("is-hidden");
    stopPopupRotation();
  });

  hidePopupTodayBtn?.addEventListener("click", () => {
    try {
      localStorage.setItem(POPUP_STORAGE_KEY, todayStr);
    } catch {
      // Ignore storage error
    }
    layerPopup?.classList.add("is-hidden");
    stopPopupRotation();
  });

  reopenPopupBtn?.addEventListener("click", () => {
    try {
      localStorage.removeItem(POPUP_STORAGE_KEY);
    } catch {
      // Ignore
    }
    layerPopup?.classList.remove("is-hidden");
    setPopupSlide(0);
    startPopupRotation();
  });

  document.querySelectorAll("[data-close-popup-link]").forEach((el) => {
    el.addEventListener("click", () => {
      layerPopup?.classList.add("is-hidden");
      stopPopupRotation();
    });
  });

  /* =========================================================================
     3. SPEC COUNTER ANIMATION (47,878 / 2 / 260)
     ========================================================================= */
  const counterEls = document.querySelectorAll("[data-counter]");
  const animateCounter = (el) => {
    const target = Number(el.dataset.counter || 0);
    if (!target) return;
    const duration = 1100;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      el.textContent = current.toLocaleString("ko-KR");
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("ko-KR");
      }
    };
    requestAnimationFrame(step);
  };

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    counterEls.forEach((el) => counterObserver.observe(el));
  }

  /* =========================================================================
     4. . STORE INFORMATION — INTERACTIVE BRANCH SWITCHER & MAP
     ========================================================================= */
  const BRANCH_DATA = {
    pyeongnae: {
      badge: "본점 · 지상 300대 대형 주차타워 완비",
      title: "E플러스마트 평내 본점",
      status: "365일 연중무휴 · 오늘 정상영업 (08:30~23:00)",
      roadAddr: "경기 남양주시 경춘로 1291 (평내동 203-1)",
      hours: "매일 08:30 ~ 23:00 (365일 연중무휴)",
      phone: "031-574-1134",
      parking: "지상 전용 300대 대형 주차타워 · OTIS 정품 대형 카트 엘리베이터 완비",
      transit: "경춘선 평내호평역 도보권 · 평내초교 / 평내동 주민센터 인근 경춘로 대로변",
      corners:
        "산지직송 청과·야채, 1등급 한우·한돈 정육, 활수산, 당일조리 수제반찬(3팩 10,000원), 남양주시 종량제봉투 공식 지정판매소",
      naverUrl: "https://map.naver.com/p/entry/place/1298755380",
      kakaoUrl: "https://map.kakao.com/link/search/경기 남양주시 경춘로 1291",
      stationLabel: "경춘선 평내호평역",
      landmark1: "평내 대단지 아파트 (3.6만세대)",
      landmark2: "지상 300대 주차타워",
      roadLabel: "경춘로 1291 (대로변 직결)",
      pinTop: "49%",
      pinLeft: "50%",
      bottomSummary: "평내 본점 : 지상 300대 주차타워 · OTIS 카트 전용 엘리베이터 운영",
    },
    toegyewon: {
      badge: "직영 2호점 · 퇴계원역 역세권 밀착형 매장",
      title: "E플러스마트 퇴계원점",
      status: "365일 연중무휴 · 오늘 정상영업 (08:30~22:30)",
      roadAddr: "경기 남양주시 퇴계원읍 퇴계원로 20",
      hours: "매일 08:30 ~ 22:30 (365일 연중무휴)",
      phone: "031-574-1135",
      parking: "매장 전면 고객 전용 지상 주차장 완비 · 카트 진입 편리",
      transit: "경춘선 퇴계원역 2번 출구 도보 3분 · 퇴계원 중심상권 대로변 위치",
      corners:
        "산지직송 제철 과일·야채, 정육·수산 특화코너, 당일조리 즉석반찬, 업소용 대용량 식자재, 남양주 종량제봉투 판매",
      naverUrl: "https://map.naver.com/p/search/남양주시 퇴계원읍 퇴계원로 20",
      kakaoUrl: "https://map.kakao.com/link/search/경기 남양주시 퇴계원읍 퇴계원로 20",
      stationLabel: "경춘선 퇴계원역 (도보 3분)",
      landmark1: "퇴계원 주거단지 (1.1만세대)",
      landmark2: "퇴계원 중심상권 사거리",
      roadLabel: "퇴계원로 20 (역세권 중심)",
      pinTop: "46%",
      pinLeft: "54%",
      bottomSummary: "퇴계원점 : 경춘선 퇴계원역 도보 3분 · 퇴근길 알뜰 장보기 특화",
    },
  };

  const branchTabs = Array.from(document.querySelectorAll("[data-branch]"));
  const mapBranchSelect = document.getElementById("mapBranchSelect");
  const copyAddrBtn = document.getElementById("copyAddrBtn");

  const renderBranch = (branchKey) => {
    const info = BRANCH_DATA[branchKey] || BRANCH_DATA.pyeongnae;

    branchTabs.forEach((tab) => {
      const active = tab.dataset.branch === branchKey;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    if (mapBranchSelect && mapBranchSelect.value !== branchKey) {
      mapBranchSelect.value = branchKey;
    }

    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setText("storeBadge", info.badge);
    setText("storeTitle", info.title);
    setText("storeOpenBadge", info.status);
    setText("storeRoadAddr", info.roadAddr);
    setText("storeHours", info.hours);
    setText("storeParking", info.parking);
    setText("storeTransit", info.transit);
    setText("storeCorners", info.corners);

    const phoneLink = document.getElementById("storePhoneLink");
    if (phoneLink) {
      phoneLink.textContent = info.phone;
      phoneLink.href = `tel:${info.phone}`;
    }

    const callBtn = document.getElementById("storeCallBtn");
    if (callBtn) {
      callBtn.href = `tel:${info.phone}`;
    }

    const naverLink = document.getElementById("storeNaverMapLink");
    if (naverLink) naverLink.href = info.naverUrl;

    const kakaoLink = document.getElementById("storeKakaoMapLink");
    if (kakaoLink) kakaoLink.href = info.kakaoUrl;

    const mapDirectLink = document.getElementById("mapDirectLink");
    if (mapDirectLink) mapDirectLink.href = info.naverUrl;

    // SVG Map & Pin updates
    setText("mapStationLabel", info.stationLabel);
    setText("mapLandmark1", info.landmark1);
    setText("mapLandmark2", info.landmark2);
    setText("mapRoadLabel", info.roadLabel);
    setText("mapPinTitle", info.title);
    setText("mapPinAddr", info.roadAddr);
    setText("mapBottomSummary", info.bottomSummary);

    const mapPin = document.getElementById("mkMapPin");
    if (mapPin) {
      mapPin.style.top = info.pinTop;
      mapPin.style.left = info.pinLeft;
    }
  };

  branchTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      renderBranch(tab.dataset.branch || "pyeongnae");
    });
  });

  mapBranchSelect?.addEventListener("change", () => {
    renderBranch(mapBranchSelect.value);
  });

  copyAddrBtn?.addEventListener("click", async () => {
    const addrText = document.getElementById("storeRoadAddr")?.textContent || "";
    try {
      await navigator.clipboard.writeText(addrText);
      copyAddrBtn.textContent = "복사완료 ✓";
      setTimeout(() => {
        copyAddrBtn.textContent = "주소복사";
      }, 1800);
    } catch {
      copyAddrBtn.textContent = "복사됨";
    }
  });

  /* =========================================================================
     5. . EVENT FILTERING & DIGITAL FLYER DIALOG (light-dismiss-a-dialog)
     ========================================================================= */
  const eventFilterBtns = Array.from(document.querySelectorAll("[data-event-filter]"));
  const eventItems = Array.from(document.querySelectorAll(".mk-event-item"));

  eventFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.eventFilter || "all";
      eventFilterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));

      eventItems.forEach((item) => {
        const itemCats = (item.dataset.eventCat || "").split(" ");
        const show = cat === "all" || itemCats.includes(cat);
        item.style.display = show ? "" : "none";
      });
    });
  });

  // Dialog helpers with light-dismiss (clicking ::backdrop closes dialog)
  const allDialogs = Array.from(document.querySelectorAll("dialog.mk-dialog"));
  allDialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  });

  document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-close-dialog");
      const dlg = id ? document.getElementById(id) : btn.closest("dialog");
      if (dlg && typeof dlg.close === "function") dlg.close();
    });
  });

  // Flyer Dialog & Tabs
  const flyerDialog = document.getElementById("flyerDialog");
  const flyerTabs = Array.from(document.querySelectorAll("[data-flyer-tab]"));
  const flyerItems = Array.from(document.querySelectorAll(".mk-flyer-item"));

  const filterFlyerModal = (tabKey) => {
    flyerTabs.forEach((t) => {
      t.classList.toggle("is-active", t.dataset.flyerTab === tabKey);
    });
    flyerItems.forEach((item) => {
      const show = tabKey === "all" || item.dataset.flyerCat === tabKey;
      item.style.display = show ? "" : "none";
    });
  };

  flyerTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterFlyerModal(tab.dataset.flyerTab || "all");
    });
  });

  const openFlyerModal = (tabKey = "all") => {
    filterFlyerModal(tabKey);
    if (flyerDialog && typeof flyerDialog.showModal === "function") {
      flyerDialog.showModal();
    }
  };

  document.querySelectorAll("[data-open-flyer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openFlyerModal(btn.getAttribute("data-open-flyer") || "all");
    });
  });

  document.getElementById("heroOpenFlyerBtn")?.addEventListener("click", () => openFlyerModal("all"));
  document.getElementById("openFullFlyerBtn")?.addEventListener("click", () => openFlyerModal("all"));

  /* =========================================================================
     6. FULL-SCREEN MENU DRAWER DIALOG
     ========================================================================= */
  const menuDialog = document.getElementById("menuDialog");
  const openMenuBtn = document.getElementById("openMenuBtn");

  openMenuBtn?.addEventListener("click", () => {
    if (menuDialog && typeof menuDialog.showModal === "function") {
      menuDialog.showModal();
    }
  });

  document.querySelectorAll("[data-drawer-link]").forEach((link) => {
    link.addEventListener("click", () => {
      menuDialog?.close();
    });
  });

  /* =========================================================================
     7. . RECRUITMENT & B2B FORMS (Filter, Quick Select, Validation, Confirm Modal)
     ========================================================================= */
  const jobFilterBtns = Array.from(document.querySelectorAll("[data-job-filter]"));
  const jobRows = Array.from(document.querySelectorAll("#jobTableBody tr"));

  jobFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const branch = btn.dataset.jobFilter || "all";
      jobFilterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));
      jobRows.forEach((row) => {
        const show = branch === "all" || row.dataset.jobBranch === branch;
        row.style.display = show ? "" : "none";
      });
    });
  });

  // Quick-select job role into 30-second form
  const appRoleSelect = document.getElementById("appRole");
  const quickApplyCard = document.getElementById("quickApplyCard");

  document.querySelectorAll("[data-select-job]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const roleValue = btn.getAttribute("data-select-job") || "";
      if (appRoleSelect) {
        appRoleSelect.value = roleValue;
      }
      quickApplyCard?.scrollIntoView({ behavior: "smooth", block: "center" });
      document.getElementById("appName")?.focus({ preventScroll: true });
    });
  });

  // Phone number auto-hyphenation
  const formatPhoneInput = (inputEl) => {
    inputEl?.addEventListener("input", () => {
      const digits = inputEl.value.replace(/\D/g, "").slice(0, 11);
      if (digits.length < 4) {
        inputEl.value = digits;
      } else if (digits.length < 8) {
        inputEl.value = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      } else {
        inputEl.value = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
      }
    });
  };
  formatPhoneInput(document.getElementById("appPhone"));
  formatPhoneInput(document.getElementById("b2bPhone"));

  // Confirmation Dialog helper
  const confirmDialog = document.getElementById("confirmDialog");
  const showConfirmation = ({ eyebrow, title, message, summaryHtml }) => {
    const eyebrowEl = document.getElementById("confirmDialogEyebrow");
    const titleEl = document.getElementById("confirmDialogTitle");
    const msgEl = document.getElementById("confirmDialogMessage");
    const sumEl = document.getElementById("confirmDialogSummary");

    if (eyebrowEl) eyebrowEl.textContent = eyebrow;
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    if (sumEl) sumEl.innerHTML = summaryHtml;

    if (confirmDialog && typeof confirmDialog.showModal === "function") {
      confirmDialog.showModal();
    }
  };

  // 30-Second Recruitment Form Submission
  const recruitForm = document.getElementById("recruitForm");
  recruitForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    recruitForm.classList.add("was-submitted");

    if (!recruitForm.checkValidity()) {
      const firstInvalid = recruitForm.querySelector(":invalid");
      firstInvalid?.focus();
      return;
    }

    const name = document.getElementById("appName")?.value.trim();
    const phone = document.getElementById("appPhone")?.value.trim();
    const area = document.getElementById("appArea")?.value.trim();
    const role = document.getElementById("appRole")?.value;
    const career = document.getElementById("appCareer")?.value;
    const talentPool = document.getElementById("consentTalentPool")?.checked
      ? "동의 (6개월 인재풀 우선연락)"
      : "미동의 (전형 종료 후 5일 이내 즉시 파기)";
    const refNo = `EP-HR-${Date.now().toString().slice(-6)}`;

    showConfirmation({
      eyebrow: "30-SECOND RECRUITMENT COMPLETE",
      title: "간편 입사지원이 정상 접수되었습니다",
      message: `${name} 지원자님, (주)피케이유통 E플러스마트 인사담당자가 확인 후 24시간 이내에 기재하신 연락처로 면접 일정을 안내해 드립니다.`,
      summaryHtml: `
        <div><strong>접수 번호:</strong> ${refNo}</div>
        <div><strong>지원자 / 연락처:</strong> ${name} (${phone})</div>
        <div><strong>거주 지역:</strong> ${area}</div>
        <div><strong>지원 지점·파트:</strong> ${role}</div>
        <div><strong>경력 구분:</strong> ${career}</div>
        <div><strong>서류 파기·인재풀:</strong> ${talentPool}</div>
      `,
    });

    recruitForm.reset();
    recruitForm.classList.remove("was-submitted");
  });

  // B2B Wholesale Form Submission
  const b2bForm = document.getElementById("b2bForm");
  b2bForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    b2bForm.classList.add("was-submitted");

    if (!b2bForm.checkValidity()) {
      const firstInvalid = b2bForm.querySelector(":invalid");
      firstInvalid?.focus();
      return;
    }

    const type = document.getElementById("b2bType")?.value;
    const org = document.getElementById("b2bOrg")?.value.trim();
    const person = document.getElementById("b2bContactName")?.value.trim();
    const phone = document.getElementById("b2bPhone")?.value.trim();
    const details = document.getElementById("b2bDetails")?.value.trim();
    const refNo = `EP-B2B-${Date.now().toString().slice(-6)}`;

    showConfirmation({
      eyebrow: "B2B WHOLESALE & PARTNERSHIP",
      title: "B2B 식자재 견적 · 제휴 문의가 접수되었습니다",
      message: `${org} (${person} 님), E플러스마트 B2B 전담 바이어가 맞춤 도매 단가표 및 배송 일정을 준비하여 빠르게 연락드리겠습니다.`,
      summaryHtml: `
        <div><strong>접수 번호:</strong> ${refNo}</div>
        <div><strong>문의 유형:</strong> ${type}</div>
        <div><strong>기관·상호명:</strong> ${org}</div>
        <div><strong>담당자 / 연락처:</strong> ${person} (${phone})</div>
        <div><strong>요청 내용:</strong> ${details}</div>
      `,
    });

    b2bForm.reset();
    b2bForm.classList.remove("was-submitted");
  });
});
