// questions.js
// Master question database for Science Bowl Reader.
// This is the ONLY file you need to edit to add more questions.

const questions = [
  // =========================
  // MIT 2025 — PHYSICS
  // =========================
  {
    id: "mit-2025-r1-phys-tu1",
    subject: "physics",              // "math", "physics", "energy", "biology", "chemistry"
    tournament: "MIT 2025",
    round: 1,
    number: 1,
    type: "tossup",                  // "tossup" or "bonus"
    answerType: "short",             // "short" or "mc"
    choices: null,                   // for MC only (W,X,Y,Z)
    question: "In SI units, what is the approximate value of the acceleration due to gravity $g$ near Earth's surface?",
    answer: "9.8 m/s^2",
    acceptableAnswers: ["9.8", "9.81", "9.8 meters per second squared"],
  },

  // =========================
  // MIT 2025 — MATH
  // =========================
  {
    id: "mit-2025-r1-math-tu2",
    subject: "math",
    tournament: "MIT 2025",
    round: 1,
    number: 2,
    type: "tossup",
    answerType: "short",
    choices: null,
    question: "Compute $\\dfrac{4}{3} + \\dfrac{5}{6}$ and give your answer as an improper fraction.",
    answer: "13/6",
    acceptableAnswers: ["13/6", "2 1/6", "2.1667"],
  },

  // Example MC question (WXYZ)
  {
    id: "mit-2025-r1-math-tu3",
    subject: "math",
    tournament: "MIT 2025",
    round: 1,
    number: 3,
    type: "tossup",
    answerType: "mc",
    choices: [
      "2x",
      "x",
      "x^2",
      "0",
    ],
    question: "What is the derivative of $x^2$?\n\nW) 2x\nX) x\nY) x^2\nZ) 0",
    answer: "W",                      // correct letter
    acceptableAnswers: ["w", "W", "2x"],
  },

  // =========================
  // TEMPLATE — COPY THIS BLOCK
  // =========================
  /*
  {
    id: "tournament-year-rX-subject-tuY",
    subject: "chemistry",            // or "energy", "biology", etc.
    tournament: "Regionals 2025",
    round: 3,
    number: 5,
    type: "bonus",                   // "tossup" / "bonus"
    answerType: "short",             // "short" / "mc"
    choices: null,                   // or ["choice W", "choice X", "choice Y", "choice Z"]
    question: "Write your question here with $\\LaTeX$ if needed.",
    answer: "Correct answer here",
    acceptableAnswers: ["any other phrasings that should be accepted"],
  },
  */
];
