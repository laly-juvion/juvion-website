/* ── Legacy / Fallback Data ──────────────────────────────────────
   Team, news, publications, partners, jobs, and pipeline data
   have moved to the content/ folder — edit those files instead.
   This file is kept as a fallback and for USE_CASES (news hub).
──────────────────────────────────────────────────────────────── */

const TEAM_MEMBERS = [
  { 
    name: 'Dr. Soumya Banerjee',
    role: 'CEO & Co-Founder',
    rank: 1,
    initials: 'SB',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/soumya-banerjee83/',
    email: 's.banerjee@juvionls.com',
    bio: 'Neuroscientist with a PhD from Miami University and research experience at Columbia and EPFL. He leads Juvion\'s work on therapeutics and healthy aging.'
  },
  {
    name: 'Professor Brian McCabe',
    role: 'Co-Founder',
    rank: 2,
    initials: 'BM',
    photo: null,
    linkedin: 'https://www.linkedin.com/in/briandmccabe/',
    email: 'b.mccabe@juvionls.com',
    bio: 'Professor at EPFL and Director of the Laboratory of Neural Genetics and Disease. His research focuses on motor system aging and neurodegenerative disorders, informing Juvion\'s scientific direction.'
  },
  { 
    name: 'Laly Robyr', 
    role: 'Lab Head',                                        
    rank: 3, 
    initials: 'LR',  
    photo: 'assets/team/laly-robyr.png', 
    linkedin: 'https://www.linkedin.com/in/laly-robyr-121024305/',  
    email: 'l.robyr@juvionls.com' 
  },
  { 
    name: 'Sebastien Guilmot',          
    role: 'Platform Manager',                                
    rank: 4, 
    initials: 'SG',  
    photo: null,                         
    linkedin: 'https://www.linkedin.com/in/sebastien-guilmot/', 
    email: null 
  },
  { 
    name: 'Sofia Domingues',          
    role: 'Head of Business Development',                                
    rank: 5, 
    initials: 'SD',  
    photo: 'assets/team/Sofia.jpg',                         
    linkedin: 'https://www.linkedin.com/in/sofiamelodomingues/', 
    email: null 
  },
   { 
    name: 'Priyanka Dutta Passecker',          
    role: 'Chief, Platform Operations',                                
    rank: 6, 
    initials: 'PD',  
    photo: null,                         
    linkedin: 'https://www.linkedin.com/in/priyankaduttapassecker/', 
    email: null 
  },
];

const COLLABORATORS = [
  { name: 'Dr. Victor Lobato Rios', role: 'Head of Engineering', initials: 'VL', linkedin: "https://www.linkedin.com/in/victor-lobato-rios-986756301" },
  { name: 'Manoj Thacker', role: 'Product Commercialization', initials: 'MT', linkedin: "https://www.linkedin.com/in/manojthacker" },
  { name: 'Dr. Subhasri Bandyopadhyay', role: 'Medical Affairs & Business Commercialization (India)', initials: 'SB2', linkedin: null },
];

const ADVISORS = [
  { name: 'Nicolas F. Krauer',   role: 'Legal Advisor',     initials: 'NK', linkedin: "https://www.linkedin.com/in/nicolas-f-krauer-450956157" },
  { name: 'Dr. Sanjeev Ganguly', role: 'Medical Advisor',   initials: 'SG', linkedin: "https://www.linkedin.com/in/sanjeevganguly" },
  { name: 'Joe Jankow',          role: 'Strategic Advisor', initials: 'JJ', linkedin: "https://www.linkedin.com/in/joeljankow/" },
];

const BOARD_MEMBERS = [
  { name: 'Dr. Soumya Banerjee',  role: 'CEO & Co-Founder', initials: 'SB', linkedin: 'https://www.linkedin.com/in/soumya-banerjee83/' },
  { name: 'Prof. Michael Friebe', role: 'Board Member',      initials: 'MF', linkedin: "https://www.linkedin.com/in/michaelfriebe/" },
];

// PUBLICATIONS moved to content/publications.js

// NEWS_ITEMS moved to content/news.js

const USE_CASES = [
  {
    id:      'Juvion-001',
    status:  'Discovery',
    title:   'Juvion-001: Plant-derived compound for neuromuscular health',
    date:    'October 2024',
    excerpt: 'Juvion-001 is a plant-derived compound identified through FlyGym screening that restores neuromuscular function in aged Drosophila models. Early data shows significant improvement in mobility and grip strength.',
    image:   'https://placehold.co/480x280/101010/222222?text=Juvion-001',
    href:    '#',
  },
];
