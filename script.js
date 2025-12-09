// ===== ENUMS =====
const QuestionType = {
  TOSSUP: "tossup",
  BONUS: "bonus",
};

const AnswerType = {
  SHORT: "short",
  MC: "mc",
};

// ===== QUESTION BANK =====
// Add your own questions here.
// Use LaTeX like $x^2 + y^2 = 1$ in question text.
const questions = [
  {
    id: "mit-phys-r1-tu1",
    subject: "physics",
    tournament: "MIT 2025",
    round: 1,
    number: 1,
    type: QuestionType.TOSSUP,
    answerType: AnswerType.SHORT,
    choices: null,
    question:
      "In SI units, what is the approximate value of the acceleration due to gravity $g$ near Earth's surface?",
    answer: "9.8 m/s^2",
    acceptableAnswers: ["9.8", "9.81", "9.8 meters per second squared"],
  },
  {
    id: "mit-math-r1-tu2",
    subject: "math",
    tournament: "MIT 2025",
    round: 1,
    number: 2,
    type: QuestionType.TOSSUP,
    answerType: AnswerType.SHORT,
    choices: null,
    question:
      "Compute $\\dfrac{4}{3} + \\dfrac{5}{6}$ and give your answer as an improper fraction.",
    answer: "13/6",
    acceptableAnswers: ["13/6", "2 1/6", "2.1667"],
  },
  {
    id: "mit-math-r1-tu3",
    subject: "math",
    tournament: "MIT 2025",
    round: 1,
    number: 3,
    type: QuestionType.TOSSUP,
    answerType: AnswerType.MC,
    // Choices will be rendered as W/X/Y/Z buttons
    choices: [
      "2",
      "3",
      "4",
      "5",
    ],
    question:
      "What is the derivative of $x^2$?\n\nW) 2x\nX) x\nY) x^2\nZ) 0",
    // Correct letter:
    answer: "W",
    acceptableAnswers: ["w", "W", "2x"],
  },
];

// ===== STATE =====
let currentTournament = null;
let filteredQuestions = [];
let currentIndex = 0;

let isReading = false;
let canAdvance = false;
let readTimer = null;
let readingDelay = 250; // ms per word

// DOM elements
const tournamentListEl = document.getElementById("tournament-list");
const subjectFiltersEl = document.getElementById("subject-filters");
const roundMinEl = document.getElementById("round-min");
const roundMaxEl = document.getElementById("round-max");
const includeTossupsEl = document.getElementById("include-tossups");
const includeBonusesEl = document.getElementById("include-bonuses");
const speedSliderEl = document.getElementById("speed-slider");
const speedLabelEl = document.getElementById("speed-label");

const questionEl = document.getElementById("question");
const currentMetaEl = document.getElementById("current-meta");
const progressEl = document.getElementById("progress");
const answerUIEl = document.getElementById("answer-ui");
const feedbackEl = document.getElementById("feedback");
const statusEl = document.getElementById("status");

const prevBtn = document.getElementById("prev-btn");
const replayBtn = document.getElementById("replay-btn");
const nextBtn = document.getElementById("next-btn");

// Import modal elements
const importModalEl = document.getElementById("import-modal");
const importTextEl = document.getElementById("import-text");
const importStatusEl = document.getElementById("import-status");
const showImportBtn = document.getElementById("show-import");
const importCancelBtn = document.getElementById("import-cancel");
const importAddBtn = document.getElementById("import-add");

// ===== INIT =====
function init() {
  buildTournamentList();
  attachEventListeners();
  // Default to first tournament
  const tournaments = getUniqueTournaments();
  if (tournaments.length > 0) {
    setCurrentTournament(tournaments[0]);
  } else {
    statusEl.textContent = "No questions in bank yet.";
  }
}

function getUniqueTournaments() {
  return [...new Set(questions.map((q) => q.tournament))].filter(Boolean);
}

function buildTournamentList() {
  tournamentListEl.innerHTML = "";

  const tournaments = getUniqueTournaments();
  if (tournaments.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No tournaments yet. Add a question!";
    tournamentListEl.appendChild(p);
    return;
  }

  tournaments.forEach((t) => {
    const btn = document.createElement("button");
    btn.textContent = t;
    btn.className = "tournament-btn";
    btn.addEventListener("click", () => setCurrentTournament(t));
    tournamentListEl.appendChild(btn);
  });
}

function setCurrentTournament(tournament) {
  currentTournament = tournament;
  // Highlight selected
  Array.from(tournamentListEl.querySelectorAll("button")).forEach((btn) => {
    btn.classList.toggle("active", btn.textContent === tournament);
  });
  updateFilter();
}

function getSelectedSubjects() {
  return Array.from(subjectFiltersEl.querySelectorAll("input[type=checkbox]"))
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);
}

function updateFilter() {
  if (!currentTournament) {
    filteredQuestions = [];
    showNoQuestions();
    return;
  }

  const subjects = getSelectedSubjects();
  const minR = Number(roundMinEl.value) || 1;
  const maxR = Number(roundMaxEl.value) || 999;
  const includeTossups = includeTossupsEl.checked;
  const includeBonuses = includeBonusesEl.checked;

  filteredQuestions = questions.filter((q) => {
    if (q.tournament !== currentTournament) return false;
    if (!subjects.includes(q.subject)) return false;
    if (q.round < minR || q.round > maxR) return false;
    if (
      !(
        (includeTossups && q.type === QuestionType.TOSSUP) ||
        (includeBonuses && q.type === QuestionType.BONUS)
      )
    ) {
      return false;
    }
    return true;
  });

  if (filteredQuestions.length === 0) {
    showNoQuestions();
    return;
  }

  currentIndex = 0;
  showCurrentQuestion();
}

function showNoQuestions() {
  clearInterval(readTimer);
  isReading = false;
  canAdvance = false;
  questionEl.textContent = "No questions match the current filters.";
  answerUIEl.innerHTML = "";
  feedbackEl.textContent = "";
  currentMetaEl.textContent = "";
  progressEl.textContent = "";
  statusEl.textContent = "";
}

// ===== READER / DISPLAY =====
function showCurrentQuestion() {
  if (!filteredQuestions.length) {
    showNoQuestions();
    return;
  }

  const q = filteredQuestions[currentIndex];
  feedbackEl.textContent = "";
  buildAnswerUI(q);

  // meta
  currentMetaEl.textContent = `${q.tournament} • Round ${q.round} • ${
    q.subject[0].toUpperCase() + q.subject.slice(1)
  } • ${q.type.toUpperCase()} #${q.number}`;

  progressEl.textContent = `${currentIndex + 1} / ${filteredQuestions.length}`;

  readQuestion(q);
}

function readQuestion(q) {
  clearInterval(readTimer);
  isReading = true;
  canAdvance = false;
  statusEl.textContent = "Reading...";

  const fullText = q.question;
  const words = fullText.split(/\s+/);
  let idx = 0;

  // Build gradually as plain text first
  questionEl.textContent = "";

  readTimer = setInterval(() => {
    if (idx >= words.length) {
      clearInterval(readTimer);
      isReading = false;
      canAdvance = true;
      statusEl.textContent = "Done. Press Next or 'n'.";

      // After done, render full LaTeX version
      questionEl.innerHTML = fullText;
      if (window.MathJax) {
        MathJax.typesetPromise([questionEl]);
      }
      return;
    }
    questionEl.textContent += (idx === 0 ? "" : " ") + words[idx];
    idx++;
  }, readingDelay);
}

// ===== ANSWER UI =====
function buildAnswerUI(q) {
  answerUIEl.innerHTML = "";

  if (q.answerType === AnswerType.MC && Array.isArray(q.choices)) {
    const letters = ["W", "X", "Y", "Z"];
    q.choices.forEach((choice, i) => {
      const btn = document.createElement("button");
      const letter = letters[i];
      btn.textContent = `${letter}) ${choice}`;
      btn.className = "mc-btn";
      btn.addEventListener("click", () => {
        checkAnswer(letter, q);
      });
      answerUIEl.appendChild(btn);
    });
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type answer and press Enter";
    input.className = "answer-input";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        checkAnswer(input.value, q);
      }
    });
    answerUIEl.appendChild(input);
    input.focus();
  }
}

// ===== ANSWER CHECKING / “AI” EQUIVALENCE =====
function normalizeText(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9\s\/\.]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseFractionOrNumber(str) {
  str = str.trim();

  // mixed number: "1 1/3"
  const mixed = str.match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const num = Number(mixed[2]);
    const den = Number(mixed[3]);
    if (den === 0) return null;
    return (whole * den + num) / den;
  }

  // simple fraction: "4/3"
  const frac = str.match(/^(\d+)\/(\d+)$/);
  if (frac) {
    const num = Number(frac[1]);
    const den = Number(frac[2]);
    if (den === 0) return null;
    return num / den;
  }

  const n = Number(str);
  if (!isNaN(n)) return n;

  return null;
}

function checkAnswer(userInput, q) {
  const correctRaw = q.answer;
  const candidates = [correctRaw, ...(q.acceptableAnswers || [])];

  let isCorrect = false;

  if (q.answerType === AnswerType.MC) {
    const userLetter = String(userInput).trim().toUpperCase();
    const correctLetter = String(correctRaw).trim().toUpperCase();
    isCorrect = userLetter === correctLetter;
  } else {
    const userNorm = normalizeText(userInput);
    const userNum = parseFractionOrNumber(userNorm);

    isCorrect = candidates.some((ans) => {
      const ansNorm = normalizeText(ans);
      const ansNum = parseFractionOrNumber(ansNorm);

      if (userNum !== null && ansNum !== null) {
        return Math.abs(userNum - ansNum) < 1e-3;
      }

      return (
        ansNorm === userNorm ||
        ansNorm.includes(userNorm) ||
        userNorm.includes(ansNorm)
      );
    });
  }

  feedbackEl.textContent = isCorrect
    ? "✅ Correct!"
    : `❌ Incorrect. Answer: ${correctRaw}`;
}

// ===== NAVIGATION =====
function nextQuestion() {
  if (!canAdvance || !filteredQuestions.length) return;
  currentIndex = (currentIndex + 1) % filteredQuestions.length;
  showCurrentQuestion();
}

function prevQuestion() {
  if (!filteredQuestions.length) return;
  currentIndex =
    (currentIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
  showCurrentQuestion();
}

function replayQuestion() {
  if (!filteredQuestions.length) return;
  showCurrentQuestion();
}

// ===== IMPORT / PASTE =====
function parsePastedQuestion(text) {
  const lines = text.split("\n").map((l) => l.trim());
  const get = (label) => {
    const prefix = label.toLowerCase() + ":";
    const line = lines.find((l) =>
      l.toLowerCase().startsWith(prefix)
    );
    return line ? line.slice(prefix.length).trim() : "";
  };

  const subject = get("Subject").toLowerCase() || "math";
  const tournament = get("Tournament") || "Custom";
  const round = Number(get("Round")) || 1;
  const number = Number(get("Number")) || 1;
  const typeStr = get("Type").toLowerCase();
  const type =
    typeStr === "bonus" ? QuestionType.BONUS : QuestionType.TOSSUP;
  const formatStr = get("Format").toLowerCase();
  const answerType =
    formatStr === "mc" ? AnswerType.MC : AnswerType.SHORT;

  const qStart = lines.findIndex((l) => l.toLowerCase() === "question:");
  const aStart = lines.findIndex((l) => l.toLowerCase() === "answer:");
  if (qStart === -1 || aStart === -1 || aStart <= qStart) {
    throw new Error("Could not find 'Question:' and 'Answer:' sections.");
  }

  const questionText = lines.slice(qStart + 1, aStart).join("\n").trim();
  const answerText = lines.slice(aStart + 1).join(" ").trim();

  let choices = null;
  if (answerType === AnswerType.MC) {
    choices = extractChoices(questionText);
  }

  return {
    id: `${tournament}-${round}-${type}-${number}-${Date.now()}`,
    subject,
    tournament,
    round,
    number,
    type,
    answerType,
    choices,
    question: questionText,
    answer: answerText,
    acceptableAnswers: [answerText],
  };
}

function extractChoices(questionText) {
  const lines = questionText.split("\n");
  const letters = ["w", "x", "y", "z"];
  const choices = [];

  letters.forEach((letter) => {
    const regex = new RegExp("^\\s*" + letter + "[\\).:-]\\s*(.+)$", "i");
    const matchLine = lines.find((l) => regex.test(l));
    if (matchLine) {
      const match = matchLine.match(regex);
      if (match && match[1]) {
        choices.push(match[1].trim());
      }
    }
  });

  return choices.length ? choices : null;
}

// ===== EVENT LISTENERS =====
function attachEventListeners() {
  // Filters
  subjectFiltersEl.addEventListener("change", updateFilter);
  roundMinEl.addEventListener("change", updateFilter);
  roundMaxEl.addEventListener("change", updateFilter);
  includeTossupsEl.addEventListener("change", updateFilter);
  includeBonusesEl.addEventListener("change", updateFilter);

  // Speed slider
  speedSliderEl.addEventListener("input", () => {
    readingDelay = Number(speedSliderEl.value);
    speedLabelEl.textContent = `${readingDelay} ms / word`;
  });

  // Buttons
  prevBtn.addEventListener("click", prevQuestion);
  replayBtn.addEventListener("click", replayQuestion);
  nextBtn.addEventListener("click", nextQuestion);

  // Keyboard shortcut: n for next (only when not typing in input)
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (e.key === "n" || e.key === "N") {
      nextQuestion();
    }
  });

  // Import modal open/close
  showImportBtn.addEventListener("click", () => {
    importModalEl.classList.remove("hidden");
    importTextEl.value = "";
    importStatusEl.textContent = "";
    importTextEl.focus();
  });

  importCancelBtn.addEventListener("click", () => {
    importModalEl.classList.add("hidden");
  });

  importAddBtn.addEventListener("click", () => {
    const text = importTextEl.value.trim();
    if (!text) {
      importStatusEl.textContent = "Paste a question first.";
      return;
    }
    try {
      const q = parsePastedQuestion(text);
      questions.push(q);
      importStatusEl.textContent = "✅ Question added.";
      buildTournamentList(); // in case new tournament
      if (!currentTournament) {
        setCurrentTournament(q.tournament);
      } else {
        updateFilter();
      }
    } catch (err) {
      importStatusEl.textContent = "❌ " + err.message;
    }
  });

  // Close modal on backdrop click
  importModalEl.addEventListener("click", (e) => {
    if (e.target === importModalEl) {
      importModalEl.classList.add("hidden");
    }
  });
}

// ===== START =====
init();
