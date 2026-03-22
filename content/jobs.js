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
// ── Full-time template ─────────────────────────────────────────
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
//     "Experience with Drosophila or other model organisms.",
//   ],
//   niceToHave: [
//     "Familiarity with machine learning tools.",
//   ],
//   formspree: "https://formspree.io/f/yourFormId",
// },
//
// ── Internship template ────────────────────────────────────────
//
// {
//   title:            "Research Intern",
//   department:       "R&D",
//   location:         "Lausanne, Switzerland",
//   type:             "Internship",
//   description:      "One-sentence summary shown on the card.",
//   about:            "Longer description of the internship and what the student will work on.",
//   responsibilities: [
//     "Assist with experiments on the FlyGym platform.",
//     "Support data collection and analysis.",
//   ],
//   requirements: [
//     "Currently enrolled in a Master's or PhD programme in biology or a related field.",
//     "Available for at least 3 months.",
//   ],
//   niceToHave: [
//     "Prior lab experience.",
//   ],
//   formspree: "https://formspree.io/f/yourFormId",
// },

const JOBS = [
  // Add job entries here using the templates above.
];
