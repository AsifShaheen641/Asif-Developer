/* ═══════════════════════════════════════════════════════════
   ASIF SHAHEEN PORTFOLIO — script.js
   ═══════════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────────────
   PROJECT DATA
   All three real projects with full details for modal display
   ──────────────────────────────────────────────────────────── */
const PROJECTS = {

  solarshaft: {
    type:   "Solar Energy · Business Website",
    title:  "SolarShaft.com",
    url:    "https://solarshaft.com/",
    desc:   "A full-featured professional website for a solar energy company, built entirely on WordPress. The project covered custom theme development, comprehensive on-page SEO, performance tuning for fast load times, and a conversion-optimized structure to turn visitors into leads. The site is architected to rank for solar-related search terms and includes clear call-to-action funnels throughout.",
    details: [
      { label: "Platform",  value: "WordPress" },
      { label: "Industry",  value: "Solar / Renewable Energy" },
      { label: "Services",  value: "WP Dev, SEO, Performance Optimization" },
      { label: "Status",    value: "✅ Live & Active" }
    ],
    badges: ["WordPress", "Custom Theme", "On-Page SEO", "Lead Generation", "Speed Optimized"],
    result: "Professional solar energy site built for rankings & conversions"
  },

  islamic: {
    type:   "Religion · Content Portal · Norway 🇳🇴",
    title:  "Islamic.no",
    url:    "https://www.islamic.no/",
    desc:   "A Norwegian Islamic content and resource portal serving the Scandinavian Muslim community. This project required multilingual WordPress configuration (Arabic + Norwegian), strict security hardening to protect sensitive religious content, mobile-first design for Norway's predominantly mobile audience, and full SEO tuning for Norwegian-language keywords. Special focus was placed on accessibility and site speed.",
    details: [
      { label: "Platform",  value: "WordPress" },
      { label: "Industry",  value: "Religion / Islamic Content" },
      { label: "Services",  value: "WP Dev, Security, Multilingual SEO" },
      { label: "Region",    value: "Norway 🇳🇴" }
    ],
    badges: ["WordPress", "Multilingual (AR/NO)", "Security Hardened", "Mobile-First", "Norwegian SEO"],
    result: "Secure multilingual Islamic portal serving Scandinavia"
  },

  mystique: {
    type:   "Wellness · WooCommerce · Netherlands 🇳🇱",
    title:  "MystiqueCrystalsAndHealing.nl",
    url:    "https://www.mystiquecrystalsandhealing.nl/",
    desc:   "A Dutch healing crystals and Reiki therapy e-commerce website powered by WooCommerce. Built with WP Rocket 3.17 for exceptional speed scores, Dutch-language SEO to dominate the Netherlands market, an integrated Reiki booking system, product catalog management, and full mobile optimization. The site targets customers seeking crystal therapy, energy healing, and stress reduction services in the Netherlands.",
    details: [
      { label: "Platform",  value: "WordPress + WooCommerce" },
      { label: "Industry",  value: "Wellness / Healing / Crystals" },
      { label: "Services",  value: "E-commerce, Speed Optimization, Dutch SEO" },
      { label: "Region",    value: "Netherlands 🇳🇱" }
    ],
    badges: ["WooCommerce", "WP Rocket 3.17", "Dutch SEO", "Reiki Booking", "Mobile Optimized"],
    result: "Live WooCommerce store — WP Rocket powered for blazing speed"
  }

};

/* ────────────────────────────────────────────────────────────
   MODAL — Open
   Builds and shows the project detail modal
   ──────────────────────────────────────────────────────────── */
function openModal(key) {
  const p = PROJECTS[key];
  if (!p) return;

  // Build detail grid cells
  const detailsHTML = p.details
    .map(d => `
      <div class="modal-cell">
        <div class="modal-cell-label">${d.label}</div>
        <div class="modal-cell-val">${d.value}</div>
      </div>`)
    .join('');

  // Build badge pills
  const badgesHTML = p.badges
    .map(b => `<span class="badge">${b}</span>`)
    .join('');

  // WhatsApp message pre-filled for "Build something similar"
  const waMsg = `Hi Asif! I saw your ${p.title} project and want something similar for my business.`;

  // Inject HTML into modal
  document.getElementById('modal-inner').innerHTML = `
    <div class="modal-header">
      <div class="modal-type">${p.type}</div>
      <div class="modal-title">${p.title}</div>
      <div class="modal-url">🔗 <a href="${p.url}" target="_blank">${p.url}</a></div>
    </div>
    <div class="modal-body">
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-grid">${detailsHTML}</div>
      <div class="p-badges" style="margin-bottom:1.5rem">${badgesHTML}</div>
      <div class="p-result" style="margin-bottom:1.75rem">${p.result}</div>
      <div class="modal-actions">

        <a href="${p.url}" target="_blank" class="modal-btn green">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
               stroke="currentColor" stroke-width="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Visit Live Site
        </a>

        <a href="https://wa.me/923136045037?text=${encodeURIComponent(waMsg)}"
           target="_blank" class="modal-btn wa">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Build Something Similar
        </a>

        <button onclick="closeModal()" class="modal-btn ghost">← Back</button>

      </div>
    </div>`;

  // Show overlay & lock scroll
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ────────────────────────────────────────────────────────────
   MODAL — Close
   ──────────────────────────────────────────────────────────── */
function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* Close when clicking outside the modal box */
function closeBg(event) {
  if (event.target === document.getElementById('overlay')) {
    closeModal();
  }
}

/* Close on Escape key */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

/* Keyboard accessibility for portfolio cards */
document.querySelectorAll('.portfolio-card').forEach(function (card) {
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') card.click();
  });
});

/* ────────────────────────────────────────────────────────────
   WHATSAPP CONTACT FORM
   Collects form data and opens WhatsApp with pre-filled message
   ──────────────────────────────────────────────────────────── */
function sendWA() {
  var name    = document.getElementById('fn').value.trim();
  var email   = document.getElementById('fe').value.trim();
  var service = document.getElementById('fs').value;
  var message = document.getElementById('fm').value.trim();

  // Validation
  if (!name || !service) {
    alert('Please enter your name and select a service before sending.');
    return;
  }

  // Build the WhatsApp message
  var text =
    'Hi Asif! I found your portfolio and want to discuss a project.%0A%0A' +
    '*Name:* '     + encodeURIComponent(name)                      + '%0A' +
    '*Email:* '    + encodeURIComponent(email   || 'Not provided') + '%0A' +
    '*Service:* '  + encodeURIComponent(service)                   + '%0A' +
    '*Details:* '  + encodeURIComponent(message || 'Not provided');

  // Show confirmation note
  var note = document.getElementById('fnote');
  note.style.display = 'block';

  // Redirect to WhatsApp after short delay
  setTimeout(function () {
    window.open('https://wa.me/923136045037?text=' + text, '_blank');
  }, 500);
}

/* ────────────────────────────────────────────────────────────
   SCROLL FADE-UP ANIMATION
   Uses IntersectionObserver for smooth entrance animations
   ──────────────────────────────────────────────────────────── */
var fadeObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, index) {
    if (entry.isIntersecting) {
      setTimeout(function () {
        entry.target.classList.add('visible');
      }, index * 80); // stagger delay
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(function (el) {
  fadeObserver.observe(el);
});

/* ────────────────────────────────────────────────────────────
   SKILL BAR ANIMATION
   Animates width when skills section scrolls into view
   ──────────────────────────────────────────────────────────── */
var skillObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(function (bar) {
        bar.style.width = bar.getAttribute('data-w') + '%';
      });
    }
  });
}, { threshold: 0.3 });

var skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);
