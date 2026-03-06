/* ── Navigation ─────────────────────────────────────────────── */
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

// Scroll: add .scrolled class
window.addEventListener('scroll', () => {
  if (window.scrollY > 32) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile burger
navBurger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  navBurger.setAttribute('aria-expanded', String(open));
});

// Close mobile menu on link click
navMobile.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  });
});

/* ── Scroll Reveal ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
  }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Smooth scroll for anchor links ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Active nav link highlight ──────────────────────────────── */
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.style.color = 'var(--text)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach(section => sectionObserver.observe(section));

/* ── Newsletter form feedback ───────────────────────────────── */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.newsletter-input');
    const btn = newsletterForm.querySelector('.newsletter-btn');
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = 'rgba(255, 80, 80, 0.5)';
      setTimeout(() => { input.style.borderColor = ''; }, 2000);
      return;
    }
    btn.textContent = '✓';
    btn.style.background = '#2a9d5c';
    input.value = '';
    input.placeholder = 'You\'re subscribed!';
    setTimeout(() => {
      btn.textContent = '→';
      btn.style.background = '';
      input.placeholder = 'your@email.com';
    }, 3000);
  });
}

/* ── Drosophila Flies ───────────────────────────────────────── */
const FLY_SVG = `
<svg class="fly-svg" viewBox="-13 -15 26 30" width="26" height="30" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="-8" cy="-3" rx="7" ry="4" fill="rgba(255,102,0,0.18)" stroke="rgba(255,102,0,0.5)" stroke-width="0.5" transform="rotate(-15,-8,-3)"/>
  <ellipse cx="8" cy="-3" rx="7" ry="4" fill="rgba(255,102,0,0.18)" stroke="rgba(255,102,0,0.5)" stroke-width="0.5" transform="rotate(15,8,-3)"/>
  <ellipse cx="0" cy="-2" rx="2.5" ry="4" fill="#FF6600"/>
  <ellipse cx="0" cy="6" rx="2.2" ry="6" fill="#E05500"/>
  <circle cx="0" cy="-8" r="2.5" fill="#FF6600"/>
  <g stroke="rgba(255,102,0,0.6)" stroke-width="0.5" stroke-linecap="round">
    <line x1="-2" y1="-3" x2="-7" y2="-1"/>
    <line x1="-2" y1="-1" x2="-7" y2=" 2"/>
    <line x1="-2" y1=" 1" x2="-6" y2=" 5"/>
    <line x1=" 2" y1="-3" x2=" 7" y2="-1"/>
    <line x1=" 2" y1="-1" x2=" 7" y2=" 2"/>
    <line x1=" 2" y1=" 1" x2=" 6" y2=" 5"/>
  </g>
</svg>`;

function parseCsv(text) {
  const [header, ...rows] = text.trim().split('\n');
  const keys = header.split(',').map(k => k.trim());
  return rows.map(row => {
    const vals = row.split(',').map(v => v.trim());
    return Object.fromEntries(keys.map((k, i) => [k, vals[i] ?? '']));
  });
}

function rand(min, max) { return min + Math.random() * (max - min); }

/* ── Content zone avoidance ─────────────────────────────────── */
let contentZones = [];

function buildZones() {
  const pad = 14;
  contentZones = Array.from(
    document.querySelectorAll('nav, .container, footer')
  ).map(el => {
    const r = el.getBoundingClientRect();
    return {
      l: r.left - pad,
      r: r.right + pad,
      t: r.top + window.scrollY - pad,
      b: r.bottom + window.scrollY + pad,
      cx: r.left + r.width / 2,
      cy: r.top + window.scrollY + r.height / 2,
    };
  }).filter(z => (z.r - z.l) > 30 && (z.b - z.t) > 30);
}

class Fly {
  constructor(customer) {
    this.customer = customer;
    this.x = rand(60, window.innerWidth - 60);
    this.y = rand(100, document.body.scrollHeight - 100);
    this.angle = rand(0, Math.PI * 2);
    this.targetAngle = this.angle;
    this.baseSpeed = rand(0.4, 0.8);
    this.speed = this.baseSpeed;

    this.dirTimer = 0;
    this.dirInterval = rand(60, 180);

    this.pauseTimer = 0;
    this.nextPauseIn = rand(300, 600); // ~5–10 s at 60 fps
    this.hovered = false;

    this.el = document.createElement('div');
    this.el.className = 'fly walking';
    this.el.innerHTML = FLY_SVG;
    this.el.style.transform = `translate(${this.x - 13}px, ${this.y - 15}px) rotate(0deg)`;
  }

  update() {
    if (this.hovered) return;

    // Land briefly
    if (this.pauseTimer > 0) {
      this.pauseTimer--;
      this.el.classList.remove('walking');
      return;
    }
    this.el.classList.add('walking');

    this.nextPauseIn--;
    if (this.nextPauseIn <= 0) {
      this.pauseTimer = Math.round(rand(40, 150));
      this.nextPauseIn = Math.round(rand(300, 600));
      return;
    }

    // Pick a new target heading periodically (max ±~70° per interval)
    this.dirTimer++;
    if (this.dirTimer >= this.dirInterval) {
      this.dirTimer = 0;
      this.dirInterval = rand(60, 180);
      this.targetAngle = this.angle + rand(-1.2, 1.2);
    }

    // Smoothly steer toward target angle (lerp) — produces flowing curves
    const da = ((this.targetAngle - this.angle + Math.PI) % (Math.PI * 2)) - Math.PI;
    this.angle += da * 0.04;

    // Slow down when banking sharply
    this.speed = this.baseSpeed * (1 - 0.3 * Math.abs(da) / Math.PI);

    this.x += Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;

    // Wrap around edges (toroidal — no more getting stuck)
    const W = window.innerWidth;
    const H = document.body.scrollHeight;
    if (this.x < -20)    this.x = W + 20;
    if (this.x > W + 20) this.x = -20;
    if (this.y < -20)    this.y = H + 20;
    if (this.y > H + 20) this.y = -20;

    // Steer away from content zones
    for (const z of contentZones) {
      if (this.x > z.l && this.x < z.r && this.y > z.t && this.y < z.b) {
        this.targetAngle = Math.atan2(this.x - z.cx, -(this.y - z.cy));
        this.dirTimer = 0;
        break;
      }
    }

    const deg = this.angle * 180 / Math.PI;
    this.el.style.transform =
      `translate(${this.x - 13}px, ${this.y - 15}px) rotate(${deg}deg)`;
  }
}

async function initFlies() {
  const layer = document.getElementById('flyLayer');
  const tooltip = document.getElementById('flyTooltip');
  if (!layer || !tooltip) return;

  // Build zones once layout is stable, refresh on resize
  setTimeout(buildZones, 200);
  window.addEventListener('resize', buildZones, { passive: true });

  let customers = [];
  try {
    const text = await fetch('customers.csv').then(r => r.text());
    customers = parseCsv(text);
  } catch { return; }

  let activeFly = null;
  let tooltipHovered = false;

  function hideTooltip() {
    tooltip.classList.remove('visible');
    if (activeFly) {
      activeFly.hovered = false;
      activeFly = null;
    }
  }

  tooltip.addEventListener('mouseenter', () => { tooltipHovered = true; });
  tooltip.addEventListener('mouseleave', () => {
    tooltipHovered = false;
    hideTooltip();
  });

  const flies = customers.map(c => {
    const fly = new Fly(c);

    fly.el.addEventListener('mouseenter', () => {
      if (activeFly && activeFly !== fly) activeFly.hovered = false;
      activeFly = fly;
      fly.hovered = true;
      fly.el.classList.remove('walking');

      // Populate tooltip
      tooltip.querySelector('.fly-tooltip-name').textContent = c.customer;
      tooltip.querySelector('.fly-tooltip-location').textContent = c.location;
      tooltip.querySelector('.fly-tooltip-date').textContent = c.date;
      const link = tooltip.querySelector('.fly-tooltip-link');
      link.href = c.url;
      link.style.display = c.url ? 'inline-flex' : 'none';

      // Position tooltip near fly (viewport-relative, stays on screen)
      const rect = fly.el.getBoundingClientRect();
      const tx = rect.right + 8;
      const ty = rect.top - 20;
      const tw = 240, th = 110;
      tooltip.style.left = Math.min(tx, window.innerWidth - tw - 16) + 'px';
      tooltip.style.top  = Math.max(16, Math.min(ty, window.innerHeight - th - 16)) + 'px';
      tooltip.classList.add('visible');
    });

    fly.el.addEventListener('mouseleave', () => {
      // Give the mouse time to reach the tooltip before hiding
      setTimeout(() => {
        if (!tooltipHovered) hideTooltip();
      }, 80);
    });

    layer.appendChild(fly.el);
    return fly;
  });

  // Animation loop
  function tick() {
    flies.forEach(f => f.update());
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

initFlies();
