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
// Page-based highlight for all pages
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const effectivePage = currentPage === '' ? 'index.html' : currentPage;
document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && effectivePage === href) {
    link.classList.add('nav-link--active');
  }
});

// Section-based highlight for index.html anchor links
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
      const res = await fetch('https://formspree.io/f/mvzwaebj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: input.value, _replyto: input.value }),
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

/* ── Render: Team Featured Panel ────────────────────────────── */
function teamFeaturedPanelHTML(m, delay) {
  const style = delay ? ` style="--delay:${delay}"` : '';
  const imgSrc = m.photo
    ? m.photo
    : `https://placehold.co/260x260/141414/2a2a2a?text=${encodeURIComponent(m.initials)}`;
  return `
    <div class="team-featured-panel reveal"${style}>
      <div class="tfp-photo">
        <img src="${imgSrc}" alt="${m.name}" loading="lazy">
      </div>
      <div class="tfp-content">
        <div class="tfp-name">${m.name}</div>
        <div class="tfp-role">${m.role}</div>
        <p class="tfp-bio">${m.bio || 'Neuroscientist with a PhD from Miami University and research experience at Columbia and EPFL. He leads Juvion’s work on therapeutics and healthy aging.'}</p>
        <div class="tfp-links">
          <a href="${m.linkedin || '#'}" class="team-social-link${m.linkedin ? '' : ' team-social-link--disabled'}" aria-label="LinkedIn" ${m.linkedin ? 'target="_blank" rel="noopener"' : ''}>${ICON_LINKEDIN}</a>
        </div>
      </div>
    </div>`;
}

/* ── Render: Team ───────────────────────────────────────────── */
function teamCardHTML(m, delay) {
  const style = delay ? ` style="--delay:${delay}"` : '';
  const imgSrc = m.photo
    ? m.photo
    : `https://placehold.co/220x220/141414/2a2a2a?text=${encodeURIComponent(m.initials)}`;
  return `
    <div class="team-card reveal"${style}>
      <div class="team-photo">
        <img src="${imgSrc}" alt="${m.name}" loading="lazy">
      </div>
      <div class="team-info">
        <div class="team-name">${m.name}</div>
        <div class="team-role">${m.role}</div>
        <div class="team-socials">
          <a href="${m.linkedin || '#'}" class="team-social-link${m.linkedin ? '' : ' team-social-link--disabled'}" aria-label="LinkedIn" ${m.linkedin ? 'target="_blank" rel="noopener"' : ''}>${ICON_LINKEDIN}</a>
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
      <div class="advisor-info">
        <div class="team-name">${m.name}</div>
        <div class="team-role">${m.role}</div>
      </div>
      <a href="${m.linkedin || '#'}" class="team-social-link${m.linkedin ? '' : ' team-social-link--disabled'}" aria-label="LinkedIn" ${m.linkedin ? 'target="_blank" rel="noopener"' : ''}>${ICON_LINKEDIN}</a>
    </div>`;
}


function renderTeam() {
  const featuredEl       = document.getElementById('teamFeatured');
  const coreGrid         = document.getElementById('teamCoreGrid');
  const expandedEl       = document.getElementById('teamExpanded');
  const collaboratorList = document.getElementById('teamCollaboratorList');
  const advisorList      = document.getElementById('teamAdvisorList');
  const boardList        = document.getElementById('teamBoardList');
  const expandBtn        = document.getElementById('teamExpandBtn');
  if (!expandedEl) return;

  // Prefer content/team.js (TEAM array); fall back to legacy data.js arrays
  const teamSrc = typeof TEAM !== 'undefined' ? TEAM : null;

  const coreRaw        = teamSrc ? teamSrc.filter(m => m.group === 'core')         : [...TEAM_MEMBERS];
  const collaborators  = teamSrc ? teamSrc.filter(m => m.group === 'collaborator') : [...COLLABORATORS];
  const advisors       = teamSrc ? teamSrc.filter(m => m.group === 'advisor')      : [...ADVISORS];
  const board          = teamSrc ? teamSrc.filter(m => m.group === 'board')        : [...BOARD_MEMBERS];

  const sorted     = coreRaw.sort((a, b) => (a.rank || 0) - (b.rank || 0));
  const featured   = sorted.slice(0, 2);
  const coreMembers = sorted.slice(2);

  if (featuredEl) {
    featuredEl.innerHTML = featured.map((m, i) => teamFeaturedPanelHTML(m, i ? `${i * 0.1}s` : null)).join('');
    featuredEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  if (coreGrid) {
    coreGrid.innerHTML = coreMembers.map((m, i) => teamCardHTML(m, i ? `${i * 0.06}s` : null)).join('');
  }

  if (collaboratorList) {
    collaboratorList.innerHTML = collaborators.map((m, i) => advisorCardHTML(m, i ? `${i * 0.1}s` : null)).join('');
  }

  if (advisorList) {
    advisorList.innerHTML = advisors.map((m, i) => advisorCardHTML(m, i ? `${i * 0.1}s` : null)).join('');
  }

  if (boardList) {
    boardList.innerHTML = board.map((m, i) => advisorCardHTML(m, i ? `${i * 0.1}s` : null)).join('');
  }

  if (expandBtn) {
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
  const src = typeof PUBLICATIONS !== 'undefined' ? PUBLICATIONS : [];
  containerEl.innerHTML = src.map((p, i) => `
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

/* ── Render: Partners ───────────────────────────────────────── */
function renderPartners() {
  const track = document.getElementById('partnersTrack');
  if (!track) return;
  const src = typeof PARTNERS !== 'undefined' ? PARTNERS : [];
  const logo = p => `<div class="partner-logo"><img src="${p.logo}" alt="${p.name}"${p.height ? ` style="height:${p.height}px"` : ''}></div>`;
  track.innerHTML = src.map(logo).join('') + src.map(logo).join('');
}

/* ── Render: Jobs ───────────────────────────────────────────── */
function renderJobs() {
  const el = document.getElementById('jobsList');
  if (!el) return;
  const src = typeof JOBS !== 'undefined' ? JOBS : [];
  if (!src.length) {
    el.innerHTML = `<div class="job-card job-card--empty"><p class="job-card__empty-text">There are no available positions at the moment. Check back soon or send an open application below.</p></div>`;
    return;
  }
  el.innerHTML = src.map((j, i) => `
    <div class="job-card reveal" style="--delay:${i * 0.1}s">
      <div class="job-card__meta">
        <span class="job-tag">${j.department}</span>
        <span class="job-location">${j.location}</span>
        <span class="job-type">${j.type}</span>
      </div>
      <h3 class="job-card__title">${j.title}</h3>
      <p class="job-card__desc">${j.description}</p>
    </div>`).join('');
  el.querySelectorAll('.reveal').forEach(e => revealObserver.observe(e));
}

/* ── Render: Pipeline ───────────────────────────────────────── */
function renderPipeline() {
  const chart  = document.getElementById('pipelineChart');
  const detail = document.getElementById('pipelineDetails');
  const src    = typeof PIPELINE !== 'undefined' ? PIPELINE : [];

  if (chart) {
    chart.innerHTML = src.map((c, i) => `
      <div class="pipeline-row${i === src.length - 1 ? ' pipeline-row--last' : ''}">
        <div class="pipeline-compound">
          <span class="pipeline-compound-id">${c.id}</span>
          <span class="pipeline-compound-area">${c.area}</span>
        </div>
        <div class="pipeline-bar pipeline-bar--solid pipeline-bar--${c.barLevel}"
             style="grid-column: 2 / ${c.chartColEnd}; width: ${c.chartWidth}">
          <div class="pb-body"></div><div class="pb-tip"></div>
        </div>
      </div>`).join('');
  }

  if (detail) {
    detail.innerHTML = src.map((c, i) => {
      const stagesHTML = c.stages.map((s, si) => {
        const nextIsFuture = c.stages[si + 1] && c.stages[si + 1].status === 'future';
        const arrow = si < c.stages.length - 1
          ? `<span class="pcd-stage-arrow${nextIsFuture ? ' pcd-stage-arrow--muted' : ''}">→</span>`
          : '';
        return `<span class="pcd-stage pcd-stage--${s.status}">${s.name}</span>${arrow}`;
      }).join('');
      return `
        <section class="section${i % 2 === 1 ? ' section--surface' : ''}" id="${c.id.toLowerCase().replace(/-/g, '-')}">
          <div class="container">
            <div class="pipeline-compound-detail reveal">
              <div class="pcd-header">
                <div class="pcd-tag pipeline-bar--solid pipeline-bar--${c.barLevel}">
                  <div class="pb-body"></div><div class="pb-tip"></div>
                </div>
                <div>
                  <h2 class="pcd-id">${c.id}</h2>
                  <p class="pcd-area">${c.areaDetail}</p>
                </div>
              </div>
              <div class="pcd-stages">${stagesHTML}</div>
              <div class="pcd-body">${c.description.map(p => `<p>${p}</p>`).join('')}</div>
            </div>
          </div>
        </section>`;
    }).join('');
    detail.querySelectorAll('.reveal').forEach(e => revealObserver.observe(e));
  }
}

/* ── Render: News ───────────────────────────────────────────── */
function renderNews(containerEl, limit) {
  if (!containerEl) return;
  let items = typeof NEWS_ITEMS !== 'undefined' ? NEWS_ITEMS : [];
  if (limit) items = items.slice(0, limit);
  containerEl.innerHTML = items.map((n, i) => {
    const hasPreview = n.previewImage && !n.previewImage.includes('placehold.co');
    const imageHTML = hasPreview
      ? `<img src="${n.previewImage}" alt="" loading="lazy">`
      : `<img src="assets/JuvionLogo.png" alt="" class="news-logo-fallback">`;
    return `
    <a href="${n.href}" class="news-card reveal group" ${i ? `style="--delay:${i * 0.1}s"` : ''}>
      <div class="news-image${hasPreview ? '' : ' news-image--fallback'}">
        ${imageHTML}
      </div>
      <div class="news-body">
        <div class="news-tag">${n.tag}</div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-date">${n.date}</p>
      </div>
    </a>`;
  }).join('');
  containerEl.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ── Render: News Accordion (news.html) ─────────────────────── */
function renderNewsAccordion(containerEl) {
  if (!containerEl) return;
  const items = typeof NEWS_ITEMS !== 'undefined' ? NEWS_ITEMS : [];
  containerEl.innerHTML = items.map((n, i) => `
    <div class="news-row${i === 0 ? ' news-row--expanded' : ''}" data-idx="${i}">
      <div class="news-row-summary" role="button" tabindex="0" aria-expanded="${i === 0}">
        <span class="news-row-tag">${n.tag}</span>
        <h3 class="news-row-title">${n.title}</h3>
        <span class="news-row-date">${n.date}</span>
        <span class="news-row-chevron">↓</span>
      </div>
      <div class="news-row-body${n.media && n.media.src ? '' : ' news-row-body--text-only'}">
        <div class="news-row-content">
          <p class="news-row-excerpt">${n.excerpt || ''}</p>
          ${n.href && n.href !== '#' ? `<a href="${n.href}" class="btn-ghost news-row-link" target="_blank" rel="noopener">Read more →</a>` : ''}
        </div>
        ${n.media && n.media.src ? (n.media.type === 'video'
          ? `<video src="${n.media.src}" class="news-row-img" autoplay loop muted playsinline></video>`
          : `<img src="${n.media.src}" alt="" class="news-row-img" loading="lazy">`) : ''}
      </div>
    </div>`).join('');

  containerEl.querySelectorAll('.news-row-summary').forEach(summary => {
    const toggle = () => {
      const row = summary.closest('.news-row');
      const expanded = row.classList.toggle('news-row--expanded');
      summary.setAttribute('aria-expanded', expanded);
    };
    summary.addEventListener('click', toggle);
    summary.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
}

/* ── Render: News Hub (news.html) ───────────────────────────── */
function renderNewsHub() {
  const accordionEl = document.getElementById('hubNewsAccordion');
  const useCaseEl   = document.getElementById('hubUseCaseGrid');
  const pubEl       = document.getElementById('hubPubGrid');
  if (!accordionEl && !useCaseEl && !pubEl) return;

  if (accordionEl) {
    renderNewsAccordion(accordionEl);
  }

  if (useCaseEl) {
    useCaseEl.innerHTML = USE_CASES.map((n, i) => `
      <a href="${n.href}" class="news-card reveal group" ${i ? `style="--delay:${i * 0.1}s"` : ''}>
        <div class="news-image"><img src="${n.image}" alt="" loading="lazy"></div>
        <div class="news-body">
          ${n.id ? `<div class="pipeline-meta"><span class="pipeline-id">${n.id}</span><span class="pipeline-status">${n.status}</span></div>` : ''}
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
const FLY_SVG = `<img src="assets/drosophila.svg" width="28" height="28" alt="" style="display:block;">`;


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

function initFlies() {
  const layer   = document.getElementById('flyLayer');
  const tooltip = document.getElementById('flyTooltip');
  if (!layer || !tooltip) return;

  setTimeout(buildZones, 200);
  window.addEventListener('resize', buildZones, { passive: true });

  const customers = typeof CUSTOMERS !== 'undefined' ? CUSTOMERS : [];
  if (!customers.length) return;

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

/* ── Page Subnav active highlight ───────────────────────────── */
const pageSubnav = document.getElementById('pageSubnav');
if (pageSubnav) {
  nav.classList.add('has-subnav');
  pageSubnav.style.top = nav.offsetHeight + 'px';

  const subnavLinks = Array.from(pageSubnav.querySelectorAll('.page-subnav-link'));
  const subnavTargets = subnavLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (subnavTargets.length) {
    // Set first link active by default
    subnavLinks[0].classList.add('active');

    const subnavObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            subnavLinks.forEach(l => l.classList.remove('active'));
            const active = pageSubnav.querySelector(
              `.page-subnav-link[href="#${entry.target.id}"]`
            );
            if (active) {
              active.classList.add('active');
              active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
            }
          }
        });
      },
      { threshold: 0.25, rootMargin: `-${nav.offsetHeight + pageSubnav.offsetHeight}px 0px -40% 0px` }
    );

    subnavTargets.forEach(el => subnavObserver.observe(el));
  }
}

/* ── Init ────────────────────────────────────────────────────── */
renderTeam();
renderPublications(document.getElementById('pubGrid'));
renderNews(document.getElementById('newsGrid'), 4);
renderNewsHub();
renderPartners();
renderJobs();
renderPipeline();
if (document.getElementById('flyLayer')) initFlies();
