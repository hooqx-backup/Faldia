/* ── Scroll progress bar ──────────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max > 0) progressBar.style.width = (window.scrollY / max * 100) + '%';
}, { passive: true });

/* ── Navbar scroll state ──────────────────────────────────────── */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Intersection observer — scroll reveals ───────────────────── */
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -52px 0px' });

document.querySelectorAll(
  '.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .stagger'
).forEach(el => revealIO.observe(el));

/* ── Counter animation ────────────────────────────────────────── */
const countIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el     = e.target;
    const target = +el.dataset.count;
    const dur    = 1800;
    const start  = performance.now();
    const tick   = (now) => {
      const t   = Math.min((now - start) / dur, 1);
      const val = Math.round((1 - Math.pow(1 - t, 3)) * target);
      el.textContent = val;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]:not([data-suffix])').forEach(el => countIO.observe(el));

/* ── Hero parallax orbs ───────────────────────────────────────── */
const parallaxEls = document.querySelectorAll('[data-speed]');
if (parallaxEls.length) {
  window.addEventListener('scroll', () => {
    parallaxEls.forEach(el => {
      el.style.transform = `translateY(${window.scrollY * +el.dataset.speed}px)`;
    });
  }, { passive: true });
}

/* ── 3-D card tilt ────────────────────────────────────────────── */
document.querySelectorAll('.card-tilt').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px) scale(1.015)`;
    card.style.boxShadow = `${-x * 14}px ${-y * 14}px 32px rgba(23,63,112,.18)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
  });
});

/* ── Magnetic buttons ─────────────────────────────────────────── */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.28;
    const y = (e.clientY - r.top  - r.height / 2) * 0.28;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ── Floating hero particles ──────────────────────────────────── */
(function spawnParticles() {
  const field = document.querySelector('.particle-field');
  if (!field) return;
  for (let i = 0; i < 24; i++) {
    const p  = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 5 + 2;
    Object.assign(p.style, {
      width:             s + 'px',
      height:            s + 'px',
      left:              Math.random() * 100 + '%',
      animationDuration: (Math.random() * 20 + 14) + 's',
      animationDelay:    (Math.random() * -28) + 's',
      opacity:           String(Math.random() * 0.32 + 0.06),
    });
    field.appendChild(p);
  }
})();

/* ── Solutions: cursor spotlight inside each card ─────────────── */
document.querySelectorAll('.sol-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--sx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
    card.style.setProperty('--sy', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--sx', '50%');
    card.style.setProperty('--sy', '50%');
  });
});

/* ── Featured grades: scroll-driven image parallax ───────────── */
(function initProdParallax() {
  const imgs = document.querySelectorAll('.prod-img');
  if (!imgs.length) return;
  function update() {
    imgs.forEach(img => {
      const card = img.closest('.prod-card');
      const r = card.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const mid = r.top + r.height / 2 - window.innerHeight / 2;
      img.style.setProperty('--py', (mid * -0.09).toFixed(1) + 'px');
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ── Featured grades: magnetic directional shadow ─────────────── */
document.querySelectorAll('.prod-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width  - 0.5;
    const cy = (e.clientY - r.top)  / r.height - 0.5;
    card.style.setProperty('--ms-x', (cx * 22).toFixed(1) + 'px');
    card.style.setProperty('--ms-y', (cy * 22 + 18).toFixed(1) + 'px');
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--ms-x', '0px');
    card.style.setProperty('--ms-y', '20px');
  });
});

/* ── Featured grades: word-split heading reveal ───────────────── */
(function initFeatHeading() {
  const h2 = document.getElementById('featured-heading');
  if (!h2) return;
  const words = h2.textContent.trim().split(/\s+/);
  h2.innerHTML = words.map((w, i) =>
    `<span class="feat-word"><span class="feat-word-inner" style="transition-delay:${(i * 0.14).toFixed(2)}s">${w}</span></span>`
  ).join(' ');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.feat-word-inner').forEach(s => s.classList.add('revealed'));
      io.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  io.observe(h2);
})();

/* ── 4. Hero "simplified." letter scramble on load ───────────── */
(function initHeroScramble() {
  const el = document.querySelector('.gradient-animated-hero');
  if (!el) return;
  const final = el.textContent.trim();
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const dur = 1100;
  let t0 = null;
  function run(ts) {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    const locked = Math.floor(p * final.length);
    let out = '';
    for (let i = 0; i < final.length; i++) {
      if (final[i] === ' ' || final[i] === '.') { out += final[i]; continue; }
      out += i < locked ? final[i] : alpha[Math.floor(Math.random() * alpha.length)];
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(run);
    else el.textContent = final;
  }
  setTimeout(() => requestAnimationFrame(run), 680);
})();

/* ── 3. Intro stat cards: rotateY flip-in IO ─────────────────── */
(function initStatCards() {
  const grid = document.querySelector('.stat-grid');
  if (!grid) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    [...grid.querySelectorAll('.stat-card')].forEach((c, i) =>
      setTimeout(() => c.classList.add('visible'), i * 100)
    );
    io.disconnect();
  }, { threshold: 0.25 });
  io.observe(grid);
})();

/* ── 6. Active desk: count-up with optional suffix ───────────── */
(function initSuffixCounters() {
  const els = document.querySelectorAll('[data-suffix]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, tgt = +el.dataset.count, sfx = el.dataset.suffix || '';
      const s = performance.now();
      (function tick(now) {
        const t = Math.min((now - s) / 1600, 1);
        el.textContent = Math.round((1 - Math.pow(1 - t, 3)) * tgt) + sfx;
        if (t < 1) requestAnimationFrame(tick);
      })(s);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  els.forEach(el => io.observe(el));
})();

/* ── 7. Market intel rows: perspective stagger reveal ────────── */
(function initMktRows() {
  const container = document.querySelector('.mkt-rows-container');
  if (!container) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    [...container.querySelectorAll('.mkt-row')].forEach((r, i) =>
      setTimeout(() => r.classList.add('visible'), i * 130)
    );
    io.disconnect();
  }, { threshold: 0.2 });
  io.observe(container);
})();

/* ── 8. Markets region cards: cursor spotlight ───────────────── */
document.querySelectorAll('.mkt-region').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--rx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    card.style.setProperty('--ry', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rx', '50%');
    card.style.setProperty('--ry', '50%');
  });
});

/* ── 10. CTA heading: typewriter when scrolled into view ─────── */
(function initTypewriter() {
  const h = document.getElementById('cta-heading');
  if (!h) return;
  const text = h.textContent.trim();
  h.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cta-cursor';
  h.appendChild(cursor);
  let done = false;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting || done) return;
    done = true; io.disconnect();
    let i = 0;
    (function type() {
      if (i < text.length) {
        h.insertBefore(document.createTextNode(text[i++]), cursor);
        setTimeout(type, 44);
      } else {
        setTimeout(() => { cursor.style.animation = 'none'; cursor.style.opacity = '0'; }, 1600);
      }
    })();
  }, { threshold: 0.55 });
  io.observe(h);
})();

/* ── Mobile menu ──────────────────────────────────────────────── */
const btn  = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const icon = document.getElementById('menuIcon');
let open = false;
btn.addEventListener('click', () => {
  open = !open;
  menu.classList.toggle('hidden', !open);
  icon.innerHTML = open
    ? '<path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/>'
    : '<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/>';
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  open = false; menu.classList.add('hidden');
  icon.innerHTML = '<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round"/>';
}));
