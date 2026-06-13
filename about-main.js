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
