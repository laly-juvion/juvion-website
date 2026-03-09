/* ── SVG Icons ───────────────────────────────────────────────── */
const ICON_LINKEDIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
const ICON_EMAIL    = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>`;

/* ── Navigation ─────────────────────────────────────────────── */
const nav = document.getElementById('nav');
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 32);
}, { passive: true });

navBurger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  navBurger.setAttribute('aria-expanded', String(open));
});

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
  { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Smooth scroll ──────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Active nav highlight ───────────────────────────────────── */
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
        });
      }
    });
  },
  { threshold: 0.3 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ── Newsletter — Formspree ─────────────────────────────────── */
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.newsletter-input');
    const btn   = newsletterForm.querySelector('.newsletter-btn');
    if (!input.value || !input.value.includes('@')) {
      input.style.borderColor = 'rgba(255, 80, 80, 0.5)';
      setTimeout(() => { input.style.borderColor = ''; }, 2000);
      return;
    }
    btn.textContent = '…';
    btn.disabled = true;
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: input.value }),
      });
      if (res.ok) {
        btn.textContent = '✓';
        btn.style.background = '#2a9d5c';
        input.value = '';
        input.placeholder = "You're subscribed!";
        setTimeout(() => {
          btn.textContent = '→';
          btn.style.background = '';
          btn.disabled = false;
          input.placeholder = 'your@email.com';
        }, 3000);
      } else {
        throw new Error('server');
      }
    } catch {
      btn.textContent = '→';
      btn.disabled = false;
      input.style.borderColor = 'rgba(255, 80, 80, 0.5)';
      setTimeout(() => { input.style.borderColor = ''; }, 2000);
    }
  });
}

/* ── Render: Team ───────────────────────────────────────────── */
function teamCardHTML(m, delay) {
  const style = delay ? ` style="--delay:${delay}"` : '';
  return `
    <div class="team-card reveal"${style}>
      <div class="team-photo">
        <img src="https://placehold.co/220x220/141414/2a2a2a?text=${encodeURIComponent(m.initials)}" alt="${m.name}" loading="lazy">
      </div>
      <div class="team-info">
        <div class="team-name">${m.name}</div>
        <div class="team-role">${m.role}</div>
        <div class="team-socials">
          <a href="${m.linkedin || '#'}" class="team-social-link" aria-label="LinkedIn" target="_blank" rel="noopener">${ICON_LINKEDIN}</a>
          <a href="${m.email ? 'mailto:' + m.email : '#'}" class="team-social-link" aria-label="Email">${ICON_EMAIL}</a>
        </div>
      </div>
    </div>`;
}

function advisorCardHTML(m, delay) {
  const style = delay ? ` style="--delay:${delay}"` : '';
  return `
    <div class="advisor-card reveal"${style}>
      <div class="advisor-photo">
        <img src="https://placehold.co/72x72/141414/2a2a2a?text=${encodeURIComponent(m.initials)}" alt="${m.name}" loading="lazy">
      </div>
      <div>
        <div class="team-name">${m.name}</div>
        <div class="team-role">${m.role}</div>
      </div>
    </div>`;
}

function renderTeam() {
  const coreGrid      = document.getElementById('teamCoreGrid');
  const expandedEl    = document.getElementById('teamExpanded');
  const expandedGrid  = document.getElementById('teamExpandedGrid');
  const advisorList   = document.getElementById('teamAdvisorList');
  const boardList     = document.getElementById('teamBoardList');
  const expandBtn     = document.getElementById('teamExpandBtn');
  if (!coreGrid) return;

  const featured = TEAM_MEMBERS.filter(m => m.featured);
  const rest     = TEAM_MEMBERS.filter(m => !m.featured);

  coreGrid.innerHTML = featured.map((m, i) => teamCardHTML(m, i ? `${i * 0.06}s` : null)).join('');
  coreGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  if (expandedGrid) {
    expandedGrid.innerHTML = rest.map((m, i) => teamCardHTML(m, `${i * 0.06}s`)).join('');
  }
  if (advisorList) {
    advisorList.innerHTML = ADVISORS.map((m, i) => advisorCardHTML(m, i ? `${i * 0.1}s` : null)).join('');
  }
  if (boardList) {
    boardList.innerHTML = BOARD_MEMBERS.map((m, i) => advisorCardHTML(m, i ? `${i * 0.1}s` : null)).join('');
  }

  if (expandBtn && expandedEl) {
    expandBtn.addEventListener('click', () => {
      const isHidden = expandedEl.hasAttribute('hidden');
      if (isHidden) {
        expandedEl.removeAttribute('hidden');
        expandBtn.textContent = 'Show less ↑';
        expandedEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
      } else {
        expandedEl.setAttribute('hidden', '');
        expandBtn.textContent = 'Show more ↓';
      }
    });
  }
}

/* ── Render: Publications ───────────────────────────────────── */
function renderPublications(containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = PUBLICATIONS.map((p, i) => `
    <a href="${p.doi}" class="pub-card reveal group" ${i ? `style="--delay:${i * 0.1}s"` : ''}>
      <div class="pub-journal">${p.journal}</div>
      <h3 class="pub-title">${p.title}</h3>
      <p class="pub-excerpt">${p.excerpt}</p>
      <div class="pub-footer">
        <span class="pub-year">${p.year}</span>
        <span class="pub-arrow">→</span>
      </div>
    </a>`).join('');
  containerEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ── Render: News ───────────────────────────────────────────── */
function renderNews(containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = NEWS_ITEMS.map((n, i) => `
    <a href="${n.href}" class="news-card reveal group" ${i ? `style="--delay:${i * 0.1}s"` : ''}>
      <div class="news-image">
        <img src="${n.image}" alt="" loading="lazy">
      </div>
      <div class="news-body">
        <div class="news-tag">${n.tag}</div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-date">${n.date}</p>
      </div>
    </a>`).join('');
  containerEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ── Render: News Hub (news.html) ───────────────────────────── */
function renderNewsHub() {
  const newsEl      = document.getElementById('hubNewsGrid');
  const useCaseEl   = document.getElementById('hubUseCaseGrid');
  const pubEl       = document.getElementById('hubPubGrid');
  if (!newsEl && !useCaseEl && !pubEl) return;

  if (newsEl) {
    const items = NEWS_ITEMS.filter(n => n.tag !== 'Use Case');
    newsEl.innerHTML = items.map((n, i) => `
      <a href="${n.href}" class="news-card reveal group" ${i ? `style="--delay:${i * 0.1}s"` : ''}>
        <div class="news-image"><img src="${n.image}" alt="" loading="lazy"></div>
        <div class="news-body">
          <div class="news-tag">${n.tag}</div>
          <h3 class="news-title">${n.title}</h3>
          <p class="news-date">${n.date}</p>
        </div>
      </a>`).join('');
    newsEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  if (useCaseEl) {
    const items = NEWS_ITEMS.filter(n => n.tag === 'Use Case');
    useCaseEl.innerHTML = items.map((n, i) => `
      <a href="${n.href}" class="news-card reveal group" ${i ? `style="--delay:${i * 0.1}s"` : ''}>
        <div class="news-image"><img src="${n.image}" alt="" loading="lazy"></div>
        <div class="news-body">
          <div class="news-tag">${n.tag}</div>
          <h3 class="news-title">${n.title}</h3>
          <p class="news-date">${n.date}</p>
        </div>
      </a>`).join('');
    useCaseEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  if (pubEl) {
    renderPublications(pubEl);
  }
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

let contentZones = [];

function buildZones() {
  const pad = 14;
  contentZones = Array.from(
    document.querySelectorAll('nav, .container, footer')
  ).map(el => {
    const r = el.getBoundingClientRect();
    return {
      l: r.left - pad, r: r.right + pad,
      t: r.top + window.scrollY - pad, b: r.bottom + window.scrollY + pad,
      cx: r.left + r.width / 2, cy: r.top + window.scrollY + r.height / 2,
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
    this.nextPauseIn = rand(300, 600);
    this.hovered = false;

    this.el = document.createElement('div');
    this.el.className = 'fly walking';
    this.el.innerHTML = FLY_SVG;
    this.el.style.transform = `translate(${this.x - 13}px, ${this.y - 15}px) rotate(0deg)`;
  }

  update() {
    if (this.hovered) return;
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
    this.dirTimer++;
    if (this.dirTimer >= this.dirInterval) {
      this.dirTimer = 0;
      this.dirInterval = rand(60, 180);
      this.targetAngle = this.angle + rand(-1.2, 1.2);
    }
    const da = ((this.targetAngle - this.angle + Math.PI) % (Math.PI * 2)) - Math.PI;
    this.angle += da * 0.04;
    this.speed = this.baseSpeed * (1 - 0.3 * Math.abs(da) / Math.PI);
    this.x += Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;

    const W = window.innerWidth, H = document.body.scrollHeight;
    if (this.x < -20)    this.x = W + 20;
    if (this.x > W + 20) this.x = -20;
    if (this.y < -20)    this.y = H + 20;
    if (this.y > H + 20) this.y = -20;

    for (const z of contentZones) {
      if (this.x > z.l && this.x < z.r && this.y > z.t && this.y < z.b) {
        this.targetAngle = Math.atan2(this.x - z.cx, -(this.y - z.cy));
        this.dirTimer = 0;
        break;
      }
    }
    const deg = this.angle * 180 / Math.PI;
    this.el.style.transform = `translate(${this.x - 13}px, ${this.y - 15}px) rotate(${deg}deg)`;
  }
}

async function initFlies() {
  const layer   = document.getElementById('flyLayer');
  const tooltip = document.getElementById('flyTooltip');
  if (!layer || !tooltip) return;

  setTimeout(buildZones, 200);
  window.addEventListener('resize', buildZones, { passive: true });

  let customers = [];
  try {
    const text = await fetch('customers.csv').then(r => r.text());
    customers = parseCsv(text);
  } catch { return; }

  let activeFly = null, tooltipHovered = false;

  function hideTooltip() {
    tooltip.classList.remove('visible');
    if (activeFly) { activeFly.hovered = false; activeFly = null; }
  }

  tooltip.addEventListener('mouseenter', () => { tooltipHovered = true; });
  tooltip.addEventListener('mouseleave', () => { tooltipHovered = false; hideTooltip(); });

  const flies = customers.map(c => {
    const fly = new Fly(c);
    fly.el.addEventListener('mouseenter', () => {
      if (activeFly && activeFly !== fly) activeFly.hovered = false;
      activeFly = fly;
      fly.hovered = true;
      fly.el.classList.remove('walking');
      tooltip.querySelector('.fly-tooltip-name').textContent     = c.customer;
      tooltip.querySelector('.fly-tooltip-location').textContent = c.location;
      tooltip.querySelector('.fly-tooltip-date').textContent     = c.date;
      const link = tooltip.querySelector('.fly-tooltip-link');
      link.href = c.url;
      link.style.display = c.url ? 'inline-flex' : 'none';
      const rect = fly.el.getBoundingClientRect();
      tooltip.style.left = Math.min(rect.right + 8, window.innerWidth - 256) + 'px';
      tooltip.style.top  = Math.max(16, Math.min(rect.top - 20, window.innerHeight - 126)) + 'px';
      tooltip.classList.add('visible');
    });
    fly.el.addEventListener('mouseleave', () => {
      setTimeout(() => { if (!tooltipHovered) hideTooltip(); }, 80);
    });
    layer.appendChild(fly.el);
    return fly;
  });

  function tick() { flies.forEach(f => f.update()); requestAnimationFrame(tick); }
  requestAnimationFrame(tick);
}

/* ── Init ────────────────────────────────────────────────────── */
renderTeam();
renderPublications(document.getElementById('pubGrid'));
renderNews(document.getElementById('newsGrid'));
renderNewsHub();
initFlies();
