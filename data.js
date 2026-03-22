/* ── Site Data ───────────────────────────────────────────────────
   Edit this file to update team members, publications, and news.
   No logic lives here — just arrays of plain objects.
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

const PUBLICATIONS = [
  {
    journal: 'Nature Communications',
    title:   'Miniature neurotransmission is required to maintain Drosophila synaptic structures during ageing',
    excerpt: 'Through discrete manipulation of each neurotransmission modality, we find that miniature but not evoked neurotransmission is required to maintain presynaptic architecture and that increasing miniature events can both preserve synaptic structures and prolong motor ability during ageing',
    year:    '2021',
    doi:     'https://doi.org/10.1038/s41467-021-24490-1',
  },
  {
    journal: 'Cell Reports',
    title:   'Trio preserves motor synapses and prolongs motor ability during aging',
    excerpt: 'We demonstrate that increasing Trio expression in adult Drosophila can abrogate age-dependent synaptic structural fragmentation, postpone the decline of motor ability, and maintain the capacity of motor synapses to sustain high-intensity neurotransmitter release.',
    year:    '2024',
    doi:     'https://doi.org/10.1016/j.celrep.2024.114256',
  },
  {
    journal: 'The Scientist',
    title:   'Combating Age-Related Motor Decline: <br> Increasing levels of the protein Trio preserved synaptic function and motor abilities in aging flies.',
    excerpt: 'When [the researchers] genetically decreased Trio levels, synaptic boutons broke up much more rapidly as the flies got older. When they overexpressed the protein, the synaptic structures were almost entirely preserved',
    year:    '2024',
    doi:     'https://www.the-scientist.com/combating-age-related-motor-decline-72095',
  },
];

const NEWS_ITEMS = [
  {
    tag:          "Research",
    title:        "JUVION-001 New Data",
    date:         "June 28 2025",
    excerpt:      "JUVION-001, a naturally derived compound, shows new preclinical evidence of preserving age-related mobility across fly and rodent models.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=JUVION-001+Preview",
    media:        { type: "video", src: "./assets/news/mobility_performance.mp4" },
    href:         "#",
  },
  {
    tag:          "Startup Program",
    title:        "Digital Health Accelerator",
    date:         "Sept 12 2025",
    excerpt:      "Juvion was selected for Tenity’s Digital Health Accelerator, recognizing its EPFL spin-off platform developing therapeutics that preserve neuron-muscle communication and delay age-related mobility decline.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=Digital+Health+Accelerator",
    media:        { type: "image", src: "https://placehold.co/960x540/101010/222222?text=Digital+Health+Accelerator" },
    href:         "https://www.startupticker.ch/en/news/three-swiss-startups-selected-for-tenity-s-digital-health-accelerator",
  },
  {
    tag:          "Startup Program",
    title:        "MassChallenge",
    date:         "June 2 2025",
    excerpt:      "Juvion joined the 2025 MassChallenge Switzerland cohort with its healthy-aging platform targeting brain-muscle communication, sarcopenia, and age-related immobility.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=MassChallenge",
    media:        { type: "image", src: "https://placehold.co/960x540/101010/222222?text=MassChallenge" },
    href:         "https://masschallenge.org/news/switzerland-2025-accelerator-cohort/",
  },
  {
    tag:          "Media",
    title:        "Swiss Venture Lab",
    date:         "May 12 2025",
    excerpt:      "Venturelab featured Juvion as a Venture Leader Biotech for its AI-, neuroscience-, and robotics-driven approach to developing therapeutics for immobility and aging-related disease.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=Swiss+Venture+Lab",
    media:        { type: "image", src: "https://placehold.co/960x540/101010/222222?text=Swiss+Venture+Lab" },
    href:         "https://www.venturelab.swiss/Juvion-Health-Sciences-The-Venture-Leader-Biotech-shaping-aging-therapeutics",
  },
  {
    tag:          "Award",
    title:        "IMD",
    date:         "Feb 1 2025",
    excerpt:      "Juvion was named an IMD 2025 Startup Competition winner for pioneering next-generation therapeutics to prevent mobility decline and combat sarcopenia.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=IMD",
    media:        { type: "image", src: "https://placehold.co/960x540/101010/222222?text=IMD" },
    href:         "https://www.imd.org/news/start-up/imd-reveals-2025-startup-competition-winners/",
  },
  {
    tag:          "Funding",
    title:        "FIT Foundation",
    date:         "Jan 15 2025",
    excerpt:      "Juvion secured a CHF 100,000 FIT Tech Seed loan to scale its AI-, machine learning-, and robotics-enabled in vivo discovery platform for healthy aging therapeutics.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=FIT+Foundation",
    media:        { type: "image", src: "https://placehold.co/960x540/101010/222222?text=FIT+Foundation" },
    href:         "https://www.fondation-fit.ch/en/general/news/2025/two-new-fit-loans-for-juvion-health-sciences-and-neuria",
  },
  {
    tag:          "Startup Program",
    title:        "GENILEM",
    date:         "Jan 5 2025",
    excerpt:      "Juvion joined GENILEM’s three-year acceleration program, highlighting its EPFL spin-off platform and preventive solutions aimed at reducing age-related mobility loss.",
    previewImage: "https://placehold.co/760x400/101010/222222?text=GENILEM",
    media:        { type: "image", src: "https://placehold.co/960x540/101010/222222?text=GENILEM" },
    href:         "https://blog.genilem.ch/docadom-hireup-juvion-life-sciences-et-moussse-accelerees-par-genilem/",
  },
];

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
