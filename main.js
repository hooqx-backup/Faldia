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
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

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
