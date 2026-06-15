/* ═══════════════════════════════════════════════════════════════
   about-main.js  —  About page only (about.html)
   Loaded after main.js via <script defer>.
   All scroll-reveals, counters, tilt, and magnetic effects are
   already handled by main.js (shared). Add about-page-specific
   interactive behaviors here as the site grows.
   ═══════════════════════════════════════════════════════════════ */

/* ── Animated number counters (about hero stat pills) ────────────
   Targets elements with data-count inside .about-stat-pill.
   main.js handles [data-count] globally; this block is a
   fallback override if about page needs different easing.     */
document.querySelectorAll('.about-stat-pill [data-count]').forEach(el => {
  /* Already observed by main.js — no duplicate needed.
     Extend here if you need a different duration or suffix. */
});

/* ── Team card: reveal name tooltip on mobile tap ───────────────── */
document.querySelectorAll('.team-card-mobile-tap').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('tapped');
  });
});

/* ── Approach section: highlight active step on scroll ──────────── */
(function initApproachHighlight() {
  const steps = document.querySelectorAll('.process-step');
  if (!steps.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('step-active');
    });
  }, { threshold: 0.5 });
  steps.forEach(s => io.observe(s));
})();

/* ── Hero stat pills: spring entrance timed from page load ──────── */
(function initHeroStats() {
  const pills = document.querySelectorAll('.hero-stat-anim');
  if (!pills.length) return;
  pills.forEach((p, i) => setTimeout(() => p.classList.add('visible'), 540 + i * 110));
})();

/* ── Process step rows: cursor spotlight ────────────────────────── */
document.querySelectorAll('.approach-feature').forEach(row => {
  row.addEventListener('mousemove', e => {
    const r = row.getBoundingClientRect();
    row.style.setProperty('--ax', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
    row.style.setProperty('--ay', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
  });
  row.addEventListener('mouseleave', () => {
    row.style.setProperty('--ax', '50%');
    row.style.setProperty('--ay', '50%');
  });
});

/* ── Team cards: cursor spotlight ───────────────────────────────── */
document.querySelectorAll('.team-flip-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--tx', ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%');
    card.style.setProperty('--ty', ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%');
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--tx', '50%');
    card.style.setProperty('--ty', '50%');
  });
});

/* ── Origin / dest / buyer chips: wave bounce IO ────────────────── */
(function initOriginChips() {
  document.querySelectorAll('.chips-container').forEach(container => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      [...container.querySelectorAll('.origin-chip')].forEach((c, i) =>
        setTimeout(() => c.classList.add('visible'), i * 85)
      );
      io.disconnect();
    }, { threshold: 0.3 });
    io.observe(container);
  });
})();

/* ── Certification cards: rotateY flip-in IO ───────────────────── */
(function initCertCards() {
  const grid = document.querySelector('.cert-grid');
  if (!grid) return;
  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    [...grid.querySelectorAll('.cert-card')].forEach((c, i) =>
      setTimeout(() => c.classList.add('visible'), i * 100)
    );
    io.disconnect();
  }, { threshold: 0.25 });
  io.observe(grid);
})();
