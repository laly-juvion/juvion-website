// ── Open Positions ─────────────────────────────────────────────
// Edit this file to add or remove job openings.
//
// Each entry appears as a card on the Careers page and gets its own
// detail page automatically — no HTML editing needed.
//
// When this list is empty, the page shows a "No positions available" notice.
//
// Fields:
//   title            — job title shown on the card and detail page
//   department       — team/department label (shown as an orange tag)
//   location         — city and country
//   type             — "Full-time" | "Part-time" | "Internship"
//   description      — one sentence shown on the card
//   about            — longer paragraph describing the role (shown on detail page)
//   responsibilities — bullet list of what the person will do (array of strings)
//   requirements     — bullet list of required qualifications (array of strings)
//   niceToHave       — optional bonus qualifications (array of strings, or omit)
//   formspree        — Formspree endpoint URL for this role's application form
//                      e.g. "https://formspree.io/f/yourFormId"
//                      Create a new form at formspree.io, copy the endpoint, paste here.
//                      If omitted, the Apply button redirects to the open application form.
//
// To add a position, copy the template below, remove the "//" and fill in:
//
// {
//   title:            "Research Scientist",
//   department:       "R&D",
//   location:         "Lausanne, Switzerland",
//   type:             "Full-time",
//   description:      "One-sentence summary shown on the card.",
//   about:            "Longer description of the role and its context.",
//   responsibilities: [
//     "Design and run experiments on the FlyGym platform.",
//     "Analyse behavioural and molecular data.",
//   ],
//   requirements: [
//     "PhD in neuroscience, biology, or a related field.",
//     "Experience with Drosophila models.",
//   ],
//   niceToHave: [
//     "Familiarity with machine learning tools.",
//   ],
//   formspree: "https://formspree.io/f/yourFormId",
// },

const JOBS = [
  {
    title:            'Research Scientist',
    department:       'R&D',
    location:         'Lausanne, Switzerland',
    type:             'Part-time',
    description:      'Short description of the role and what you will be working on.',
    about:            'Longer description of the role and its context within Juvion.',
    responsibilities: [
      'Design and execute experiments on the FlyGym platform.',
      'Analyse behavioural and molecular data.',
    ],
    requirements: [
      'PhD in neuroscience, biology, or a related field.',
      'Experience with Drosophila or other model organisms.',
    ],
    niceToHave: [
      'Familiarity with machine learning tools.',
    ],
    formspree: '',  // paste your Formspree endpoint here, e.g. "https://formspree.io/f/yourFormId"
  },
];
