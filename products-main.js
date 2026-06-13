/* ═══════════════════════════════════════════════════════════════
   CATEGORY DATA
   ═══════════════════════════════════════════════════════════════ */
const CATS = [
  {
    id: 'raw-sugar',
    label: 'Raw Sugar',
    subtitle: 'VHP / V-VHP',
    badge: 'Raw · Refining',
    accent: [217, 119, 6],          // amber-600
    iconPath: 'M12 3C7 3 3 7.5 3 12s4 9 9 9 9-4 9-9-4-9-9-9Zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7Zm-1-11h2v5h-2zm0 6h2v2h-2z',
    description: 'Direct-mill raw cane sugar for refinery feedstock. Available in VHP and V-VHP grades with flexible Pol specifications, sourced from Brazil, India, and Thailand.',
    specs: [
      { k: 'Grade',       v: 'VHP / V-VHP' },
      { k: 'ICUMSA',     v: '600–1500' },
      { k: 'Polarization', v: '98.5°+' },
      { k: 'Moisture',   v: '≤ 0.5%' },
    ],
    stats: [
      { num: '98.5°', label: 'Min Polarization' },
      { num: '5,000', label: 'MT Min Order' },
      { num: '4',     label: 'Source Origins' },
    ],
    images: [
      { src: 'assets/Raw Sugar/8075.jpg',          title: 'VHP Grade Raw Sugar',         grade: 'Pol 98.5°+',   tag: 'Mill Direct' },
      { src: 'assets/Raw Sugar/2151102178.jpg',     title: 'Industrial Processing',       grade: 'ICUMSA 1200',  tag: 'Brazil Origin' },
      { src: 'assets/Raw Sugar/2356.jpg',           title: 'Bulk Loading Operations',     grade: 'FOB / CIF',    tag: 'Bulk Vessel' },
      { src: 'assets/Raw Sugar/5734.jpg',           title: 'Third-party Inspection',      grade: 'SGS Verified',  tag: 'Quality Check' },
    ],
  },
  {
    id: 'refined-white',
    label: 'Refined White',
    subtitle: 'ICUMSA 45–150',
    badge: 'Refined · White',
    accent: [37, 99, 168],          // brand-500
    iconPath: 'M12 2 2 9l10 13 10-13L12 2Zm0 3.2L6.1 9.4 12 17.9l5.9-8.5L12 5.2Z',
    description: 'Premium refined white sugar meeting the strictest food-grade standards. Crystal clear, consistently spec-certified, ready for food, beverage, and confectionery processing.',
    specs: [
      { k: 'ICUMSA',  v: '45–150' },
      { k: 'Sucrose', v: '99.8%+' },
      { k: 'Moisture', v: '≤ 0.04%' },
      { k: 'Ash',     v: '≤ 0.04%' },
    ],
    stats: [
      { num: '99.8%',      label: 'Min Sucrose' },
      { num: 'ICUMSA 45',  label: 'Top Grade' },
      { num: 'SGS',        label: 'Inspection' },
    ],
    images: [
      { src: 'assets/Refined White Sugar/1925.jpg',                                           title: 'ICUMSA 45 Crystal',    grade: 'Food Grade',    tag: 'Top Grade' },
      { src: 'assets/Refined White Sugar/1926.jpg',                                           title: 'Premium White Crystal', grade: 'Sucrose 99.8%', tag: 'Certified' },
      { src: 'assets/Refined White Sugar/world-diabetes-day-sugar-wooden-bowl-dark-surface.jpg', title: 'ICUMSA 100 Grade',   grade: 'ICUMSA 100',    tag: 'Mid-grade' },
      { src: 'assets/Refined White Sugar/131274.jpg',                                         title: 'Bulk Refined Supply',   grade: 'ICUMSA 150',    tag: 'Export Ready' },
    ],
  },
  {
    id: 'indian-s30',
    label: 'Indian S-30',
    subtitle: 'Crystal · India',
    badge: 'Crystal · India',
    accent: [5, 150, 105],          // emerald-600
    iconPath: 'M3 6h18v12H3zM3 7l9 6 9-6',
    description: 'Indian-origin S-30 crystal sugar sourced directly from leading Indian mills. Uniform grain structure, distinctive clarity, and consistent colour — trusted by buyers across MENA and East Africa.',
    specs: [
      { k: 'Grade',    v: 'S-30' },
      { k: 'ICUMSA',  v: '150–300' },
      { k: 'Moisture', v: '≤ 0.5%' },
      { k: 'Origin',  v: 'India' },
    ],
    stats: [
      { num: 'S-30',     label: 'Grade Standard' },
      { num: '≤ 300',   label: 'Max ICUMSA' },
      { num: 'India',   label: 'Exclusive Origin' },
    ],
    images: [
      { src: 'assets/Indian S-30/6009.jpg',  title: 'S-30 Crystal Sugar',   grade: 'Grade S-30',    tag: 'India Origin' },
      { src: 'assets/Indian S-30/654.jpg',   title: 'Uniform Crystal Grain', grade: 'ICUMSA 150',   tag: 'Mill Verified' },
      { src: 'assets/Indian S-30/3241.jpg',  title: 'Quality Certified',     grade: 'SGS Certified', tag: 'Third-party' },
      { src: 'assets/Indian S-30/38742.jpg', title: 'Export Ready Stock',    grade: 'FCL / LCL',    tag: 'Container Load' },
    ],
  },
  {
    id: 'liquid-sugar',
    label: 'Liquid Sugar',
    subtitle: '65–70° Brix',
    badge: 'Liquid Syrup',
    accent: [124, 58, 237],         // violet-600
    iconPath: 'M12 2c-1 4-5 6-5 10a5 5 0 0 0 10 0c0-4-4-6-5-10Z',
    description: 'Ready-to-dose liquid sugar syrup purpose-built for beverage and industrial processing lines. Consistent Brix, zero handling waste, and direct-line compatibility — simplifying sugar procurement for manufacturers.',
    specs: [
      { k: 'Brix',     v: '65–70°' },
      { k: 'Sucrose',  v: '99.5%+' },
      { k: 'pH',       v: '6.5–7.5' },
      { k: 'Delivery', v: 'Tank / ISO' },
    ],
    stats: [
      { num: '70°',   label: 'Max Brix' },
      { num: '99.5%', label: 'Min Sucrose' },
      { num: 'Tank',  label: 'Delivery Mode' },
    ],
    images: [
      { src: 'assets/Liquid Sugar/27528.jpg',   title: 'Liquid Sugar Syrup',   grade: '67° Brix',        tag: 'Beverage Ready' },
      { src: 'assets/Liquid Sugar/3538752.jpg', title: 'Industrial Processing', grade: 'Processing Grade', tag: 'Direct Line' },
      { src: 'assets/Liquid Sugar/30582.jpg',   title: 'ISO Tank Delivery',    grade: 'Bulk Tanker',      tag: 'Tank Supply' },
      { src: 'assets/Liquid Sugar/2688.jpg',    title: 'High Brix Grade',      grade: '70° Brix',         tag: 'Industrial' },
    ],
  },
  {
    id: 'icing-sugar',
    label: 'Icing Sugar',
    subtitle: '6x–12x Mesh',
    badge: 'Icing · Fine',
    accent: [225, 29, 72],          // rose-600
    iconPath: 'M12 3v18M3 12h18M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7',
    description: 'Ultra-fine milled icing sugar for bakery, confectionery, and specialty food production. Available in multiple mesh sizes from 6x to 12x, with optional anti-caking agents for high-humidity markets.',
    specs: [
      { k: 'Mesh',      v: '6x to 12x' },
      { k: 'Sucrose',   v: '99.9%' },
      { k: 'Moisture',  v: '≤ 0.5%' },
      { k: 'Anti-cake', v: 'Optional' },
    ],
    stats: [
      { num: '12x',    label: 'Finest Mesh' },
      { num: '99.9%',  label: 'Sucrose' },
      { num: 'Bakery', label: 'Primary Use' },
    ],
    images: [
      { src: 'assets/Icing Sugar/1960.jpg',       title: 'Icing Sugar 6x',       grade: 'Mesh 6x',    tag: 'Standard' },
      { src: 'assets/Icing Sugar/21871.jpg',       title: 'Fine Icing Powder',    grade: 'Mesh 10x',   tag: 'Bakery Grade' },
      { src: 'assets/Icing Sugar/43883.jpg',       title: 'Ultra Fine 12x',       grade: 'Mesh 12x',   tag: 'Confectionery' },
      { src: 'assets/Icing Sugar/2150168799.jpg',  title: 'Premium Icing Grade',  grade: 'Anti-caking', tag: 'Premium' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════════ */
let activeCat = CATS[0].id;
let switching = false;

/* ═══════════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  renderAllGrades();

  const hash = location.hash.replace('#', '');
  const initial = CATS.find(c => c.id === hash) || CATS[0];
  activeCat = initial.id;
  renderShowcase(initial, false);
  markActiveTab(initial.id);
  applyAccent(initial.accent);

  initReveal();
  initTilt();
  initMagnetic();
});

/* ═══════════════════════════════════════════════════════════════
   TABS
   ═══════════════════════════════════════════════════════════════ */
function renderTabs() {
  const container = document.getElementById('catTabs');
  if (!container) return;

  CATS.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab';
    btn.dataset.cat = cat.id;
    btn.setAttribute('aria-label', cat.label);
    btn.innerHTML = `
      <span class="cat-tab-inner">
        <span class="cat-tab-label">${cat.label}</span>
        <span class="cat-tab-sub">${cat.subtitle}</span>
      </span>
    `;
    btn.addEventListener('click', () => {
      if (cat.id === activeCat || switching) return;
      switchCategory(cat.id);
    });
    container.appendChild(btn);
  });

  requestAnimationFrame(() => moveIndicator());
}

function markActiveTab(id) {
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === id);
  });
  moveIndicator();
}

function moveIndicator() {
  const indicator = document.getElementById('tabIndicator');
  const activeBtn = document.querySelector('.cat-tab.active');
  if (!indicator || !activeBtn) return;
  const parent = activeBtn.closest('.cat-tabs-scroll') || activeBtn.parentElement;
  const parentRect = parent.getBoundingClientRect();
  const btnRect    = activeBtn.getBoundingClientRect();
  indicator.style.left  = (btnRect.left - parentRect.left + parent.scrollLeft) + 'px';
  indicator.style.width = btnRect.width + 'px';
}

/* ═══════════════════════════════════════════════════════════════
   CATEGORY SWITCH
   ═══════════════════════════════════════════════════════════════ */
function switchCategory(id) {
  const cat = CATS.find(c => c.id === id);
  if (!cat) return;
  switching = true;
  activeCat = id;

  history.replaceState(null, '', '#' + id);

  const showcase = document.getElementById('productShowcase');
  showcase.classList.add('showcase-exit');

  setTimeout(() => {
    renderShowcase(cat, true);
    applyAccent(cat.accent);
    showcase.classList.remove('showcase-exit');
    markActiveTab(id);
    initTilt();
    initMagnetic();
    switching = false;
  }, 320);
}

/* ═══════════════════════════════════════════════════════════════
   SHOWCASE RENDER
   ═══════════════════════════════════════════════════════════════ */
function renderShowcase(cat, animate) {
  const showcase = document.getElementById('productShowcase');
  if (!showcase) return;

  showcase.innerHTML = `
    ${renderCatHeader(cat)}
    ${renderBento(cat, animate)}
  `;

  initBentoLightbox(cat);

  if (animate) {
    requestAnimationFrame(() => {
      document.querySelectorAll('.bento-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 80}ms`;
        card.classList.add('bento-card--in');
      });
      document.querySelectorAll('.cat-header-left, .cat-header-right').forEach((el, i) => {
        el.style.transitionDelay = `${i * 60}ms`;
        el.classList.add('header-anim--in');
      });
    });
  } else {
    requestAnimationFrame(() => {
      document.querySelectorAll('.bento-card').forEach(card => card.classList.add('bento-card--in'));
      document.querySelectorAll('.cat-header-left, .cat-header-right').forEach(el => el.classList.add('header-anim--in'));
    });
  }
}

/* ─── Category Header ─────────────────────────────────────────── */
function renderCatHeader(cat) {
  const r = cat.accent;
  const accentRgb = `${r[0]},${r[1]},${r[2]}`;
  const specChips = cat.specs.map(s => `
    <span class="spec-chip">
      <span class="spec-chip-key">${s.k}</span>
      <span class="spec-chip-val">${s.v}</span>
    </span>
  `).join('');

  const stats = cat.stats.map(s => `
    <div class="stat-pill">
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${s.label}</span>
    </div>
  `).join('');

  return `
    <div class="cat-header-wrap">
      <div class="cat-header-left header-anim">
        <span class="cat-badge" style="background:rgba(${accentRgb},.12);color:rgb(${accentRgb});border-color:rgba(${accentRgb},.25)">${cat.badge}</span>
        <h2 class="cat-title">${cat.label}</h2>
        <p class="cat-desc">${cat.description}</p>
        <div class="spec-chips-row">${specChips}</div>
        <a href="contact.html" class="cat-cta magnetic glossy sheen" style="--btn-accent:${accentRgb}">
          <span class="relative">Request Spec Sheet</span>
          <svg viewBox="0 0 20 20" class="h-4 w-4" fill="currentColor"><path d="M11 4.2 16.8 10 11 15.8l-1.3-1.3 3.6-3.6H3v-1.8h10.3L9.7 5.5 11 4.2Z"/></svg>
        </a>
      </div>
      <div class="cat-header-right header-anim">
        <div class="stats-cluster">${stats}</div>
        <div class="origins-note">
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>
          Sourced from Brazil · India · Thailand · EU
        </div>
      </div>
    </div>
  `;
}

/* ─── Bento Grid ──────────────────────────────────────────────── */
function renderBento(cat, animate) {
  const cards = cat.images.map((img, i) => `
    <article class="bento-card bento-card--${i} card-tilt${animate ? '' : ' bento-card--in'}" style="--delay:${i * 80}ms" data-lb-index="${i}">
      <div class="bento-img-wrap">
        <img src="${img.src}" alt="${img.title}" loading="${i === 0 ? 'eager' : 'lazy'}" class="bento-img" />
        <div class="bento-shimmer"></div>
      </div>
      <span class="bento-tag">${img.tag}</span>
      <div class="bento-expand-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="bento-overlay">
        <div class="bento-overlay-inner">
          <p class="bento-grade">${img.grade}</p>
          <p class="bento-title">${img.title}</p>
          <a href="contact.html" class="bento-cta">
            Request spec →
          </a>
        </div>
      </div>
    </article>
  `).join('');

  return `<div class="bento-grid">${cards}</div>`;
}

/* ═══════════════════════════════════════════════════════════════
   ALL GRADES OVERVIEW (BOTTOM)
   ═══════════════════════════════════════════════════════════════ */
function renderAllGrades() {
  const grid = document.getElementById('allGradesGrid');
  if (!grid) return;

  CATS.forEach(cat => {
    const r = cat.accent;
    const accentRgb = `${r[0]},${r[1]},${r[2]}`;
    const card = document.createElement('article');
    card.className = 'grade-mini-card card-tilt';
    card.innerHTML = `
      <div class="grade-mini-img-wrap">
        <img src="${cat.images[0].src}" alt="${cat.label}" loading="lazy" class="grade-mini-img" />
        <div class="grade-mini-overlay" style="background:linear-gradient(to top, rgba(${accentRgb},.7) 0%, transparent 60%)"></div>
      </div>
      <div class="grade-mini-body">
        <span class="grade-mini-badge" style="color:rgb(${accentRgb})">${cat.badge}</span>
        <p class="grade-mini-name">${cat.label}</p>
        <p class="grade-mini-sub">${cat.subtitle}</p>
        <button class="grade-mini-btn" data-cat="${cat.id}" style="color:rgb(${accentRgb})">
          View grade
          <svg viewBox="0 0 20 20" class="h-3.5 w-3.5" fill="currentColor"><path d="M11 4.2 16.8 10 11 15.8l-1.3-1.3 3.6-3.6H3v-1.8h10.3L9.7 5.5 11 4.2Z"/></svg>
        </button>
      </div>
    `;
    card.querySelector('.grade-mini-btn').addEventListener('click', () => {
      const navWrap = document.querySelector('.cat-nav-outer');
      if (navWrap) {
        const top = navWrap.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setTimeout(() => switchCategory(cat.id), 400);
    });
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   ACCENT COLOR
   ═══════════════════════════════════════════════════════════════ */
function applyAccent([r, g, b]) {
  document.documentElement.style.setProperty('--cat-accent', `${r},${g},${b}`);
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATION HELPERS (re-run after dynamic renders)
   ═══════════════════════════════════════════════════════════════ */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger').forEach(el => io.observe(el));
}

function initTilt() {
  document.querySelectorAll('.card-tilt:not([data-tilt])').forEach(card => {
    card.dataset.tilt = '1';
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg) translateY(-5px) scale(1.012)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

function initMagnetic() {
  document.querySelectorAll('.magnetic:not([data-mag])').forEach(btn => {
    btn.dataset.mag = '1';
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.28;
      const y = (e.clientY - r.top  - r.height / 2) * 0.28;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* Scroll progress, navbar, mobile menu, particles, parallax
   are all handled by main.js which is loaded before this file. */

/* ─── Hash change (switching categories while already on products.html) ─── */
window.addEventListener('hashchange', () => {
  const hash = location.hash.replace('#', '');
  const cat  = CATS.find(c => c.id === hash);
  if (cat && cat.id !== activeCat) switchCategory(cat.id);
});

/* ─── Tab indicator resize ─────────────────────────────────────── */
window.addEventListener('resize', () => moveIndicator());

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */
let lbCat   = null;
let lbIndex = 0;

function initBentoLightbox(cat) {
  document.querySelectorAll('.bento-card[data-lb-index]').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.bento-cta')) return;
      openLightbox(cat, parseInt(card.dataset.lbIndex, 10));
    });
  });
}

function openLightbox(cat, idx) {
  lbCat   = cat;
  lbIndex = idx;
  refreshLightbox();
  document.getElementById('lightbox').classList.add('lb-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('lb-open');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  lbIndex = (lbIndex + dir + lbCat.images.length) % lbCat.images.length;
  refreshLightbox();
}

function refreshLightbox() {
  const img       = lbCat.images[lbIndex];
  const lbImg     = document.getElementById('lbImg');
  const lbTitle   = document.getElementById('lbTitle');
  const lbGrade   = document.getElementById('lbGrade');
  const lbTag     = document.getElementById('lbTag');
  const lbCounter = document.getElementById('lbCounter');
  const lbDots    = document.getElementById('lbDots');

  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = img.src;
    lbImg.alt = img.title;
    lbImg.style.opacity = '1';
  }, 160);

  lbTitle.textContent   = img.title;
  lbGrade.textContent   = img.grade;
  lbTag.textContent     = img.tag;
  lbCounter.textContent = `${lbIndex + 1} / ${lbCat.images.length}`;

  lbDots.innerHTML = lbCat.images
    .map((_, i) => `<span class="lb-dot${i === lbIndex ? ' active' : ''}"></span>`)
    .join('');
}

/* ── Wire up lightbox UI once DOM is ready ── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lbBackdrop')?.addEventListener('click', closeLightbox);
  document.getElementById('lbPrev')?.addEventListener('click', () => navigateLightbox(-1));
  document.getElementById('lbNext')?.addEventListener('click', () => navigateLightbox(1));

  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('lb-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
});
