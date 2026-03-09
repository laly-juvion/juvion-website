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
    email: 's.banerjee@juvionls.com' 
  },
  { 
    name: 'Prof. Dr. Brian D. McCabe',  
    role: 'Co-Founder, PhD',                                
    rank: 2, 
    initials: 'BM',  
    photo: null,                          
    linkedin: 'https://www.linkedin.com/in/briandmccabe/',           
    email: 'b.mccabe@juvionls.com' 
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
    name: 'Dr. Victor Lobato Rios',     
    role: 'Head of Engineering',                             
    rank: 5, 
    initials: 'VL',  
    photo: null,                         
    linkedin: null, 
    email: null 
  },
  { 
    name: 'Priyanka Dutta Passecker',   
    role: 'Chief, Platform Operations',                      
    rank: 6, 
    initials: 'PD',  
    photo: null,                         
    linkedin: null, 
    email: null 
  },
  { 
    name: 'Manoj Thacker',              
    role: 'Product Commercialization',                       
    rank: 7, 
    initials: 'MT',  
    photo: null,                         
    linkedin: null, 
    email: null 
  },
  { 
    name: 'Dr. Subhasri Bandyopadhyay', 
    role: 'Medical Affairs & Business Commercialization',   
    rank: 8, 
    initials: 'SB2', 
    photo: null,                         
    linkedin: null, 
    email: null 
  },
];

const ADVISORS = [
  { name: 'Nicolas F. Krauer',   role: 'Legal Advisor',     initials: 'NK' },
  { name: 'Dr. Sanjeev Ganguly', role: 'Medical Advisor',   initials: 'SG' },
  { name: 'Joe Jankow',          role: 'Strategic Advisor', initials: 'JJ' },
];

const BOARD_MEMBERS = [
  { name: 'Dr. Soumya Banerjee',  role: 'CEO & Co-Founder', initials: 'SB' },
  { name: 'Prof. Michael Friese', role: 'Board Member',      initials: 'MF' },
];

const PUBLICATIONS = [
  {
    journal: 'Cell Reports',
    title:   'This neuroscience model predicts and prolongs motor neuron activity during aging',
    excerpt: 'A landmark study demonstrating conserved mechanisms of neuromuscular decline across species, providing the foundation for targeted therapeutic intervention.',
    year:    '2023',
    doi:     '#',
  },
  {
    journal: 'Nature Aging',
    title:   'Combining age-related Drosophila studies for targeted drug discovery',
    excerpt: 'Comprehensive validation of Drosophila as a high-throughput screening model, confirming translational relevance to human motor aging processes.',
    year:    '2022',
    doi:     '#',
  },
  {
    journal: 'eLife',
    title:   'Plant-derived compounds restore neuromuscular function in aged Drosophila models',
    excerpt: 'Identification and validation of key plant-derived compounds that reverse age-related motor decline, directly supporting the Juvion-001 pipeline.',
    year:    '2024',
    doi:     '#',
  },
];

const NEWS_ITEMS = [
  {
    tag:   'Research',
    title: 'Juvion presents FlyGym at EPFL Innovation Forum 2025',
    date:  'February 2025',
    image: 'https://placehold.co/480x280/101010/222222?text=News+1',
    href:  '#',
  },
  {
    tag:   'Publication',
    title: 'New paper on Drosophila motor aging published in Cell Reports',
    date:  'December 2024',
    image: 'https://placehold.co/480x280/101010/222222?text=News+2',
    href:  '#',
  },
  {
    tag:   'Milestone',
    title: 'Juvion Health Sciences completes pre-seed funding round',
    date:  'October 2024',
    image: 'https://placehold.co/480x280/101010/222222?text=News+3',
    href:  '#',
  },
  {
    tag:   'Use Case',
    title: 'Juvion-001: Plant-derived compound for neuromuscular health',
    date:  'October 2024',
    image: 'https://placehold.co/480x280/101010/222222?text=Juvion-001',
    href:  '#',
  },
];
