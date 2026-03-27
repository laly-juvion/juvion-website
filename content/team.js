// ── Team Members ───────────────────────────────────────────────
// Edit this file to add, remove, or update team members.
//
// Each person needs a "group" field — this controls which section they appear in:
//   "core"         → main team grid (shown by default)
//   "collaborator" → Collaborators section
//   "advisor"      → Advisors section
//   "board"        → Board section
//
// "rank" controls the display order within the core group (lower = first).
// "photo" can be a path like "assets/team/photo.jpg" or null to use initials.
// "email" and "linkedin" can be null if not applicable.

const TEAM = [
  {
    group:    'core',
    name:     'Dr. Soumya Banerjee',
    role:     'CEO & Co-Founder',
    rank:     1,
    initials: 'SB',
    photo:    'assets/team/soumya-banerjee.png',
    linkedin: 'https://www.linkedin.com/in/soumya-banerjee83/',
    email:    's.banerjee@juvionls.com',
    bio:      'Neuroscientist with a PhD from Miami University and research experience at Columbia and EPFL. He leads Juvion\'s work on therapeutics and healthy aging.',
  },
  {
    group:    'core',
    name:     'Professor Brian McCabe',
    role:     'Co-Founder & Chairman of the Scientific Advisory Board',
    rank:     2,
    initials: 'BM',
    photo:    'assets/team/brian-mccabe.png',
    linkedin: 'https://www.linkedin.com/in/briandmccabe/',
    email:    'b.mccabe@juvionls.com',
    bio:      'Professor at EPFL and Director of the Laboratory of Neural Genetics and Disease. His research focuses on motor system aging and neurodegenerative disorders, informing Juvion\'s scientific direction.',
  },
  {
    group:    'core',
    name:     'Laly Robyr',
    role:     'Robotics Engineer',
    rank:     3,
    initials: 'LR',
    photo:    'assets/team/laly-robyr.png',
    linkedin: 'https://www.linkedin.com/in/laly-robyr-121024305/',
    email:    'l.robyr@juvionls.com',
  },
  {
    group:    'collaborator', // Will be core when we get a picture
    name:     'Sebastien Guilmot',
    role:     'Platform Manager',
    rank:     4,
    initials: 'SG',
    photo:    null,
    linkedin: 'https://www.linkedin.com/in/sebastien-guilmot/',
    email:    null,
  },
  {
    group:    'core',
    name:     'Sofia Domingues',
    role:     'Business Development Associate',
    rank:     5,
    initials: 'SD',
    photo:    'assets/team/sofia-domingues.png',
    linkedin: 'https://www.linkedin.com/in/sofiamelodomingues/',
    email:    null,
  },
  {
    group:    'core',
    name:     'Priyanka Dutta Passecker',
    role:     'Chief, Platform Operations',
    rank:     6,
    initials: 'PD',
    photo:    'assets/team/priyanka-dutta-passecker.png',
    linkedin: 'https://www.linkedin.com/in/priyankaduttapassecker/',
    email:    null,
  },
  {
    group:    'collaborator',
    name:     'Dr. Victor Lobato Rios',
    role:     'Platform Innovation Engineer',
    initials: 'VL',
    linkedin: 'https://www.linkedin.com/in/victor-lobato-rios-986756301',
    email:    null,
  },
  {
    group:    'collaborator',
    name:     'Manoj Thacker',
    role:     'Product Commercialization',
    initials: 'MT',
    linkedin: 'https://www.linkedin.com/in/manojthacker',
    email:    null,
  },
  {
    group:    'collaborator',
    name:     'Dr. Subhasri Bandyopadhyay',
    role:     'Medical Affairs & Business Commercialization (India)',
    initials: 'SB2',
    linkedin: null,
    email:    null,
  },
  {
    group:    'advisor',
    name:     'Nicolas F. Krauer',
    role:     'Legal Advisor',
    initials: 'NK',
    linkedin: 'https://www.linkedin.com/in/nicolas-f-krauer-450956157',
    email:    null,
  },
  {
    group:    'advisor',
    name:     'Dr. Sanjeev Ganguly',
    role:     'Medical Advisor',
    initials: 'SG',
    linkedin: 'https://www.linkedin.com/in/sanjeevganguly',
    email:    null,
  },
  {
    group:    'advisor',
    name:     'Joe Jankow',
    role:     'Strategic Advisor',
    initials: 'JJ',
    linkedin: 'https://www.linkedin.com/in/joeljankow/',
    email:    null,
  },
  {
    group:    'board',
    name:     'Dr. Soumya Banerjee',
    role:     'CEO & Co-Founder',
    initials: 'SB',
    linkedin: 'https://www.linkedin.com/in/soumya-banerjee83/',
    email:    null,
  },
  {
    group:    'board',
    name:     'Prof. Michael Friebe',
    role:     'Board Member',
    initials: 'MF',
    linkedin: 'https://www.linkedin.com/in/michaelfriebe/',
    email:    null,
  },
];
