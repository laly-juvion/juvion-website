// ── News Items ─────────────────────────────────────────────────
// Edit this file to add or update news items shown on the home page and News page.
//
// Fields:
//   tag          — category label (e.g. "Research", "Award", "Funding")
//   title        — headline shown on the card
//   date         — display date (e.g. "June 28 2025")
//   excerpt      — short summary shown when the item is expanded
//   previewImage — image path or URL for the card thumbnail (use null for the Juvion logo fallback)
//   media        — content shown when expanded: { type: "video" | "image", src: "..." }
//                  set to null if there is no media
//   href         — link for "Read more" button; use "#" if there is no external link

const NEWS_ITEMS = [
  {
    tag:          'Research',
    title:        'JUVION-001 New Data',
    date:         'June 28 2025',
    excerpt:      'JUVION-001, a naturally derived compound, shows new preclinical evidence of preserving age-related mobility across fly and rodent models.',
    previewImage: null,
    media:        { type: 'video', src: './assets/news/mobility_performance.mp4' },
    href:         '#',
  },
  {
    tag:          'Accelerator',
    title:        'Digital Health Accelerator',
    date:         'Sept 12 2025',
    excerpt:      'Juvion was selected for Tenity\'s Digital Health Accelerator, recognizing its EPFL spin-off platform developing therapeutics that preserve neuron-muscle communication and delay age-related mobility decline.',
    previewImage: null,
    media:        null,
    href:         'https://www.startupticker.ch/en/news/three-swiss-startups-selected-for-tenity-s-digital-health-accelerator',
  },
  {
    tag:          'Accelerator',
    title:        'MassChallenge',
    date:         'June 2 2025',
    excerpt:      'Juvion joined the 2025 MassChallenge Switzerland cohort with its healthy-aging platform targeting brain-muscle communication, sarcopenia, and age-related immobility.',
    previewImage: null,
    media:        null,
    href:         'https://masschallenge.org/news/switzerland-2025-accelerator-cohort/',
  },
  {
    tag:          'Media',
    title:        'Swiss Venture Lab',
    date:         'May 12 2025',
    excerpt:      'Venturelab featured Juvion as a Venture Leader Biotech for its AI-, neuroscience-, and robotics-driven approach to developing therapeutics for immobility and aging-related disease.',
    previewImage: null,
    media:        null,
    href:         'https://www.venturelab.swiss/Juvion-Health-Sciences-The-Venture-Leader-Biotech-shaping-aging-therapeutics',
  },
  {
    tag:          'Award',
    title:        'IMD',
    date:         'Feb 1 2025',
    excerpt:      'Juvion was named an IMD 2025 Startup Competition winner for pioneering next-generation therapeutics to prevent mobility decline and combat sarcopenia.',
    previewImage: null,
    media:        null,
    href:         'https://www.imd.org/news/start-up/imd-reveals-2025-startup-competition-winners/',
  },
  {
    tag:          'Funding',
    title:        'FIT Foundation',
    date:         'Jan 15 2025',
    excerpt:      'Juvion secured a CHF 100,000 FIT Tech Seed loan to scale its AI-, machine learning-, and robotics-enabled in vivo discovery platform for healthy aging therapeutics.',
    previewImage: null,
    media:        null,
    href:         'https://www.fondation-fit.ch/en/general/news/2025/two-new-fit-loans-for-juvion-health-sciences-and-neuria',
  },
  {
    tag:          'Accelerator',
    title:        'GENILEM',
    date:         'Jan 5 2025',
    excerpt:      'Juvion joined GENILEM\'s three-year acceleration program, highlighting its EPFL spin-off platform and preventive solutions aimed at reducing age-related mobility loss.',
    previewImage: null,
    media:        null,
    href:         'https://blog.genilem.ch/docadom-hireup-juvion-life-sciences-et-moussse-accelerees-par-genilem/',
  },
];
