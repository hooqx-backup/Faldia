/* ═══════════════════════════════════════════════════════════════
   contact-main.js  —  Contact page only (contact.html)
   Loaded after main.js via <script defer>.
   On submit: validates fields, composes a WhatsApp message from
   the form data, opens wa.me in a new tab, then shows confirmation.
   ═══════════════════════════════════════════════════════════════ */

/* ── WhatsApp number (include country code, no +/spaces) ──────── */
const WA_NUMBER = '971500000000';

(function initContactForm() {
  const form      = document.getElementById('contactForm');
  const toast     = document.getElementById('successToast');
  const toastClose = document.getElementById('toastClose');
  const submitBtn = form ? form.querySelector('.contact-submit-btn') : null;
  if (!form) return;

  let toastTimer;
  function showToast() {
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 5000);
  }
  toastClose?.addEventListener('click', () => {
    toast.classList.remove('show');
    clearTimeout(toastTimer);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* ── Validation ─────────────────────────────────────────── */
    const name    = form.querySelector('[name="name"]');
    const company = form.querySelector('[name="company"]');
    const email   = form.querySelector('[name="email"]');
    const phone   = form.querySelector('[name="phone"]');
    const type    = form.querySelector('[name="inquiry_type"]');
    const grade   = form.querySelector('[name="grade"]');
    const volume  = form.querySelector('[name="volume"]');
    const dest    = form.querySelector('[name="destination"]');
    const message = form.querySelector('[name="message"]');
    const consent = form.querySelector('[name="consent"]');

    let valid = true;

    [name, company, email].forEach(el => {
      if (!el.value.trim()) {
        el.style.borderColor = '#ef4444';
        el.addEventListener('input', () => (el.style.borderColor = ''), { once: true });
        valid = false;
      }
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#ef4444';
      valid = false;
    }

    if (!consent.checked) {
      consent.style.outline = '2px solid #ef4444';
      consent.addEventListener('change', () => (consent.style.outline = ''), { once: true });
      valid = false;
    }

    if (!valid) return;

    /* ── Compose WhatsApp message ───────────────────────────── */
    const lines = [
      '🔷 *New Trade Inquiry — Falcon Diamond*',
      '',
      `👤 *Name:* ${name.value.trim()}`,
      `🏢 *Company:* ${company.value.trim()}`,
      `📧 *Email:* ${email.value.trim()}`,
    ];

    if (phone.value.trim())   lines.push(`📞 *Phone / WhatsApp:* ${phone.value.trim()}`);
    if (type.value)           lines.push(`📋 *Inquiry Type:* ${type.value}`);
    if (grade.value)          lines.push(`🍬 *Sugar Grade:* ${grade.value}`);
    if (volume.value.trim())  lines.push(`📦 *Volume (MT):* ${volume.value.trim()}`);
    if (dest.value.trim())    lines.push(`🚢 *Destination:* ${dest.value.trim()}`);

    if (message.value.trim()) {
      lines.push('', `💬 *Message:*`, message.value.trim());
    }

    lines.push('', '─────────────────────────', 'Sent via faldia.com contact form');

    const waText = encodeURIComponent(lines.join('\n'));
    const waURL  = `https://wa.me/${WA_NUMBER}?text=${waText}`;

    /* ── Loading state ──────────────────────────────────────── */
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="relative">Opening WhatsApp…</span>';

    /* ── Open WhatsApp & show confirmation ──────────────────── */
    setTimeout(() => {
      window.open(waURL, '_blank', 'noopener,noreferrer');

      showToast();
      form.reset();

      /* Reset button after 3s so user can send another message */
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="relative">Send to Trading Desk</span><svg viewBox="0 0 20 20" class="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor"><path d="M11 4.2 16.8 10 11 15.8l-1.3-1.3 3.6-3.6H3v-1.8h10.3L9.7 5.5 11 4.2Z"/></svg>';
      }, 3000);
    }, 600);
  });
})();

/* ── Map pin: show label on mobile tap ──────────────────────── */
document.querySelectorAll('.map-pin').forEach(pin => {
  pin.addEventListener('click', () => pin.classList.toggle('pin-active'));
});
