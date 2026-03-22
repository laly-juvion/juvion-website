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
    areaDetail:  'Mobility · Neuromuscular Health · Neuromuscular Communication · Sarcopenia',
    barLevel:    'l3',
    chartColEnd: 6,
    chartWidth:  '87.5%',
    stages: [
      { name: 'Discovery',      status: 'reached' },
      { name: 'Pre-clinical',   status: 'reached' },
      { name: 'Regulatory',     status: 'reached' },
      { name: 'Clinical Study', status: 'next'    },
      { name: 'Market Entry',   status: 'future'  },
    ],
    description: [
      'Juvion-001 brings together two powerful plant-derived compounds to help the body stay strong and mobile with age. In multiple studies, it has shown a clear ability to improve motor function through midlife and beyond.',
      'Backed by scientific research, Juvion-001 represents a new step forward in supporting movement and independence as we age. It is expected to launch in select markets in 2027, offering a targeted solution for maintaining motor health over time.',
    ],
  },
  {
    id:          'JUVION-002',
    area:        'Mobility &amp; Memory',
    areaDetail:  'Mobility &amp; Memory',
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
    areaDetail:  'Sarcopenia · Mobility · Memory · Motor Neuropathy',
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
