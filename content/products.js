// ── Pipeline Compounds ─────────────────────────────────────────
// Edit this file to update the pipeline chart and compound descriptions.
//
// Each entry controls both the progress bar in the chart and the detail section below it.
//
// "barLevel" — color intensity of the progress bar:
//   "l1"  light (earliest stage)
//   "l2"  medium
//   "l3"  vivid/dark (most advanced)
//
// "chartColEnd" — how far the bar extends across the 5 pipeline columns:
//   3 = Discovery only
//   4 = through Pre-clinical
//   5 = through Regulatory
//   6 = through Clinical Study / into Market Entry
//
// "chartWidth" — fine-tune the bar length within its last column:
//   "100%" = fills the column fully
//   "50%"  = stops halfway through (useful for a bar partway into a stage)
//
// "stages[].status" — appearance of each stage badge in the detail section:
//   "reached"  solid / completed
//   "next"     highlighted (currently in progress)
//   "future"   dimmed

const PIPELINE = [
  {
    id:          'JUVION-001',
    area:        'Mobility',
    areaDetail:  'Mobility',
    title:       'Preserving the Nerve-Muscle Connection for Lifelong Mobility',
    target:      'Synaptic transmission decline at the neuromuscular junction',
    indication:  'Age-related mobility loss and neuromuscular degeneration',
    whySelected: 'FlyGym locomotion studies demonstrated statistically significant improvement in gait and endurance across the full fly lifespan, with measurable effects visible by day 20 of treatment.',
    timeline:    'Clinical Study ongoing, expected market entry 2027',
    barLevel:    'l3',
    chartColEnd: 6,
    chartWidth:  '82%',
    stages: [
      { name: 'Discovery',      status: 'reached' },
      { name: 'Pre-clinical',   status: 'reached' },
      { name: 'Regulatory',     status: 'reached' },
      { name: 'Clinical Study', status: 'next'    },
      { name: 'Market Entry',   status: 'future'  },
    ],
    description: [
      'Juvion-001 brings together two naturally derived compounds. In multiple studies in mice and Drosophila, it has shown significant improvement in motor function throughout life. Juvion-001 is patent pending and targets neuromuscular health, supporting movement and independence as we age. It is expected to launch in select markets in 2027.',
    ],
  },
  {
    id:          'JUVION-002',
    area:        'Mobility &amp; Memory',
    areaDetail:  'Mobility &amp; Memory',
    title:       'Dual-Action Support for Motor and Cognitive Health',
    target:      'NMJ function and hippocampal-equivalent neural circuits',
    indication:  'Combined age-related cognitive and physical decline',
    whySelected: 'Dual behavioral screens in FlyGym revealed improvements in both locomotion and associative memory assays, identifying this compound as a rare dual-endpoint candidate.',
    timeline:    'Pre-clinical phase, expected regulatory entry 2026',
    barLevel:    'l2',
    chartColEnd: 4,
    chartWidth:  '100%',
    stages: [
      { name: 'Discovery',      status: 'reached' },
      { name: 'Pre-clinical',   status: 'next'    },
      { name: 'Regulatory',     status: 'future'  },
      { name: 'Clinical Study', status: 'future'  },
      { name: 'Market Entry',   status: 'future'  },
    ],
    description: [
      'Juvion-002 is a combination of natural compounds designed to support both mobility and memory as we age. It targets the connection between physical movement and cognitive strength, helping maintain independence and quality of life over time.',
    ],
  },
  {
    id:          'JUVION-003',
    area:        'Sarcopenia',
    areaDetail:  'Sarcopenia',
    title:       'Fighting Age-Related Muscle Loss at the Source',
    target:      'Skeletal muscle atrophy pathways and motor neuron integrity',
    indication:  'Sarcopenia and age-related muscle decline',
    whySelected: 'FlyGym grip strength and lifespan assays identified robust efficacy signals at early-stage screening, with dose-dependent improvements in muscle function across aging fly cohorts.',
    timeline:    'Discovery complete, pre-clinical entry planned 2026',
    barLevel:    'l1',
    chartColEnd: 3,
    chartWidth:  '100%',
    stages: [
      { name: 'Discovery',      status: 'reached' },
      { name: 'Pre-clinical',   status: 'future'  },
      { name: 'Regulatory',     status: 'future'  },
      { name: 'Clinical Study', status: 'future'  },
      { name: 'Market Entry',   status: 'future'  },
    ],
    description: [
      'Juvion-003 is a novel plant-derived solution designed to address sarcopenia and age-related muscle decline. By targeting the biological drivers of muscle loss, it supports the maintenance of strength, mobility, and everyday function.',
    ],
  },
];
