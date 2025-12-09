// questions.js
// Master question database for Science Bowl Reader.
// This is the ONLY file you need to edit to add more questions.

const questions = [
  // =========================
  // AVES RR 1 — Round 1
  // =========================

  // 1
  {
    id: "aves-rr1-r1-math-tu1",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 1,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Identify all of the following three shapes which must have at least one line of symmetry:\n1) Trapezoid;\n2) Isosceles triangle;\n3) Ellipse.",
    answer: "2 and 3",
    acceptableAnswers: ["2 and 3", "2, 3", "isosceles triangle and ellipse"],
  },
  {
    id: "aves-rr1-r1-math-b1",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 1,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "Rohan lists the positive integers less than 100. How many of the written integers contain the digit '3'?",
    answer: "19",
    acceptableAnswers: ["19"],
  },

  // 2
  {
    id: "aves-rr1-r1-bio-tu2",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 2,
    type: "tossup",
    answerType: "mc",
    choices: ["White", "Purple", "Red", "Blue"],
    question:
      "If flower color exhibits an incomplete dominant inheritance pattern, which of the following phenotypes will not be seen in the offspring population when two heterozygotes are crossed and the two dominant alleles encode for red and blue flower color?\n\nW) White\nX) Purple\nY) Red\nZ) Blue",
    answer: "W",
    acceptableAnswers: ["W", "w", "white"],
  },
  {
    id: "aves-rr1-r1-bio-b2",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 2,
    type: "bonus",
    answerType: "mc",
    choices: [
      "Competitive inhibition",
      "Noncompetitive inhibition",
      "Allosteric inhibition",
      "Allosteric activation",
    ],
    question:
      "A positive feedback loop would have which of the following types of enzymatic regulation?\n\nW) Competitive inhibition\nX) Noncompetitive inhibition\nY) Allosteric inhibition\nZ) Allosteric activation",
    answer: "Z",
    acceptableAnswers: ["Z", "z", "allosteric activation"],
  },

  // 3
  {
    id: "aves-rr1-r1-phys-tu3",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 3,
    type: "tossup",
    answerType: "mc",
    choices: ["Joule", "Kilogram", "Calorie", "Second"],
    question:
      "Which of the following is not an SI unit?\n\nW) Joule\nX) Kilogram\nY) Calorie\nZ) Second",
    answer: "Y",
    acceptableAnswers: ["Y", "y", "calorie"],
  },
  {
    id: "aves-rr1-r1-phys-b3",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 3,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "Newton’s second law is often written as force equals mass times acceleration when mass is constant. However, a generalization allows for the mass to change, when force is defined to be the change in what quantity over the change in time?",
    answer: "Momentum",
    acceptableAnswers: ["momentum", "linear momentum"],
  },

  // 4
  {
    id: "aves-rr1-r1-earth-tu4",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 4,
    type: "tossup",
    answerType: "mc",
    choices: ["Batholith", "Dike", "Laccolith", "Sill"],
    question:
      "Which of the following igneous intrusions is typically largest?\n\nW) Batholith\nX) Dike\nY) Laccolith\nZ) Sill",
    answer: "W",
    acceptableAnswers: ["W", "w", "batholith"],
  },
  {
    id: "aves-rr1-r1-earth-b4",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 4,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "Order the following three types of fronts by increasing intensity of their associated weather:\n1) Cold;\n2) Stationary;\n3) Warm.",
    answer: "2, 3, 1",
    acceptableAnswers: ["2, 3, 1", "2 3 1"],
  },

  // 5
  {
    id: "aves-rr1-r1-chem-tu5",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 5,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Nitrogen-14 and nitrogen-15 are two different isotopes of nitrogen because they differ in the number of what subatomic particle?",
    answer: "Neutron",
    acceptableAnswers: ["neutron", "neutrons"],
  },
  {
    id: "aves-rr1-r1-chem-b5",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 5,
    type: "bonus",
    answerType: "mc",
    choices: ["Enthalpy", "Average velocity", "Temperature", "Entropy"],
    question:
      "Which of the following quantities does the average kinetic energy of a gas represent?\n\nW) Enthalpy\nX) Average velocity\nY) Temperature\nZ) Entropy",
    answer: "Y",
    acceptableAnswers: ["Y", "y", "temperature"],
  },

  // 6
  {
    id: "aves-rr1-r1-math-tu6",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 6,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Identify all of the following three statements which are true about prime numbers:\n1) There are infinitely many;\n2) In every set of 3 consecutive positive integers, at least one is not prime;\n3) There are finitely many even primes.",
    answer: "All of them",
    acceptableAnswers: [
      "all",
      "all of them",
      "1, 2, and 3",
      "1 2 and 3",
      "1 2 3",
    ],
  },
  {
    id: "aves-rr1-r1-math-b6",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 6,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "The second hand of a clock rotates at a distance of 3 centimeters from the center of the clock and completes a revolution in a minute. The minute hand of the same clock rotates at a distance of 4 centimeters from the center and completes a revolution in an hour. How long, in hours, must the minute hand rotate to rotate the same distance as the second hand rotated in an hour?",
    answer: "45",
    acceptableAnswers: ["45", "45 hours"],
  },

  // 7
  {
    id: "aves-rr1-r1-bio-tu7",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 7,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "In a cell, exergonic reactions are primarily coupled to endergonic reactions by what high-energy intermediate, which stores energy in the bonds between its phosphate groups?",
    answer: "ATP",
    acceptableAnswers: ["atp", "adenosine triphosphate"],
  },
  {
    id: "aves-rr1-r1-bio-b7",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 7,
    type: "bonus",
    answerType: "mc",
    choices: [
      "Behavioral isolation",
      "Gametic isolation",
      "Mechanical isolation",
      "Temporal isolation",
    ],
    question:
      "The inability for two species of snails to reproduce due to opposite facing shells is an example of what type of prezygotic barrier?\n\nW) Behavioral isolation\nX) Gametic isolation\nY) Mechanical isolation\nZ) Temporal isolation",
    answer: "Y",
    acceptableAnswers: ["Y", "y", "mechanical isolation"],
  },

  // 8
  {
    id: "aves-rr1-r1-phys-tu8",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 8,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "A particle starts at rest and accelerates at a constant rate of 3 meters per second squared. After 4 seconds, how far did the particle travel?",
    answer: "24",
    acceptableAnswers: ["24", "24 meters"],
  },
  {
    id: "aves-rr1-r1-phys-b8",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 8,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "An object with mass 10 kilograms is falling and experiencing a drag force of 7v^2 in SI units where v is its velocity. As it falls for an indefinite amount of time, what will its terminal velocity be in meters per second, to the nearest integer?",
    answer: "4",
    acceptableAnswers: ["4", "4 m/s", "4 meters per second"],
  },

  // 9
  {
    id: "aves-rr1-r1-earth-tu9",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 9,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "When winds create surface currents away from the shore, cold nutrient-rich waters replace warmer surface waters. What phenomenon is occurring along the coast?",
    answer: "Upwelling",
    acceptableAnswers: ["upwelling"],
  },
  {
    id: "aves-rr1-r1-earth-b9",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 9,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "Ocean acidification occurs due to a series of reactions within the ocean, beginning when carbon dioxide diffuses into water and reacts to form what compound?",
    answer: "Carbonic acid",
    acceptableAnswers: ["carbonic acid"],
  },

  // 10
  {
    id: "aves-rr1-r1-chem-tu10",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 10,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Connor is given the amount of moles present of a compound. To find the total number of molecules of that compound, he needs to multiply the number of moles by what constant?",
    answer: "Avogadro's constant",
    acceptableAnswers: [
      "avogadro's constant",
      "avogadro's number",
      "6.022×10^23",
      "6.022e23",
    ],
  },
  {
    id: "aves-rr1-r1-chem-b10",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 10,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "The Arrhenius definition of a base states that a base is a compound that dissociates to form what ion?",
    answer: "Hydroxide ion",
    acceptableAnswers: ["oh-", "hydroxide", "hydroxide ion", "hydroxide ions"],
  },

  // 11
  {
    id: "aves-rr1-r1-math-tu11",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 11,
    type: "tossup",
    answerType: "mc",
    choices: ["1/3", "1/2", "2/3", "1"],
    question:
      "The probability of there being rain on a given day is 2/3. After a large number of days, expressing your answer as a fraction, what does the ratio of the number of days it did not rain to the number of days it did rain approach?\n\nW) 1/3\nX) 1/2\nY) 2/3\nZ) 1",
    answer: "X",
    acceptableAnswers: ["X", "x", "1/2"],
  },
  {
    id: "aves-rr1-r1-math-b11",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 11,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "At the store, Rohan finds five books that are each priced a positive integer number of dollars and no two books have the same cost. If the total cost of the books was 90 dollars, what is the largest possible value one of the books could cost?",
    answer: "80",
    acceptableAnswers: ["80", "80 dollars"],
  },

  // 12
  {
    id: "aves-rr1-r1-bio-tu12",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 12,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Hershey and Chase determined nucleic acids as the genetic material by observing the replication cycle of what type of virus which only infects prokaryotes?",
    answer: "Bacteriophage",
    acceptableAnswers: ["bacteriophage", "phage"],
  },
  {
    id: "aves-rr1-r1-bio-b12",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 12,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "A chimpanzee and a poison dart frog live in the same tropical rainforest. Identify all of the following three ecological groupings, which would be the same for both species:\n1) Population;\n2) Community;\n3) Ecosystem.",
    answer: "2 and 3",
    acceptableAnswers: ["2 and 3", "2, 3", "community and ecosystem"],
  },

  // 13
  {
    id: "aves-rr1-r1-phys-tu13",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 13,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Identify all of the following 3 changes that would decrease the magnitude of the force between two charged particles:\n1) Doubling the charge of one particle and doubling the distance between them;\n2) Halving the charge of one particle and halving the distance between them;\n3) Halving the charge of one particle and doubling the distance between them.",
    answer: "1 and 3",
    acceptableAnswers: ["1 and 3", "1, 3"],
  },
  {
    id: "aves-rr1-r1-phys-b13",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 13,
    type: "bonus",
    answerType: "mc",
    choices: [
      "Warm water sinks; cold water rises",
      "Warm water sinks; cold water does not move",
      "Warm water rises; cold water sinks",
      "Warm water rises; cold water does not move",
    ],
    question:
      "Aathma is boiling water in a pot. He notices that heat is being dissipated throughout the pot by moving water. Which of the following best describes the overall direction that warm and cold water move in his pot respectively?\n\nW) Warm water sinks; cold water rises\nX) Warm water sinks; cold water does not move\nY) Warm water rises; cold water sinks\nZ) Warm water rises; cold water does not move",
    answer: "Y",
    acceptableAnswers: ["Y", "y", "warm water rises; cold water sinks"],
  },

  // 14
  {
    id: "aves-rr1-r1-earth-tu14",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 14,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Order the following three planets from closest to farthest from the Kuiper belt on average:\n1) Mars;\n2) Neptune;\n3) Saturn.",
    answer: "2, 3, 1",
    acceptableAnswers: ["2, 3, 1", "2 3 1"],
  },
  {
    id: "aves-rr1-r1-earth-b14",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 14,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "Mercury has an extremely thin atmosphere largely because what stream of charged particles released from the Sun’s corona blasted the atmosphere away?",
    answer: "Solar wind",
    acceptableAnswers: ["solar wind"],
  },

  // 15
  {
    id: "aves-rr1-r1-chem-tu15",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 15,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "What is the name given to a solid formed when a solute dissolved in a solution cannot form any crystals and instead forms a powder?",
    answer: "Precipitate",
    acceptableAnswers: ["precipitate"],
  },
  {
    id: "aves-rr1-r1-chem-b15",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 15,
    type: "bonus",
    answerType: "mc",
    choices: [
      "They decrease the activation energy of the reaction",
      "They can speed up both the forward and reverse reactions",
      "They are consumed in the reaction",
      "They are referred to as enzymes when used in a biological context",
    ],
    question:
      "Which of the following is not true about a catalyst in a reaction?\n\nW) They decrease the activation energy of the reaction\nX) They can speed up both the forward and reverse reactions\nY) They are consumed in the reaction\nZ) They are referred to as enzymes when used in a biological context",
    answer: "Y",
    acceptableAnswers: ["Y", "y", "they are consumed in the reaction"],
  },

  // 16
  {
    id: "aves-rr1-r1-math-tu16",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 16,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Rohan has 3 colors of pants and 5 colors of shirts. In an outfit, he wears one pants and a shirt. If he doesn’t want to wear the black pants and black shirt together, how many distinct outfits can he make?",
    answer: "14",
    acceptableAnswers: ["14"],
  },
  {
    id: "aves-rr1-r1-math-b16",
    subject: "math",
    tournament: "AVES RR 1",
    round: 1,
    number: 16,
    type: "bonus",
    answerType: "mc",
    choices: ["29", "30", "31", "32"],
    question:
      "What is the sum of the number of edges, faces, and vertices in a pentagonal prism?\n\nW) 29\nX) 30\nY) 31\nZ) 32",
    answer: "Z",
    acceptableAnswers: ["Z", "z", "32"],
  },

  // 17
  {
    id: "aves-rr1-r1-bio-tu17",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 17,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Unlike angiosperms, which have their seeds enclosed in chambers, what group of plants have naked seeds usually contained in cones?",
    answer: "Gymnosperms",
    acceptableAnswers: ["gymnosperms"],
  },
  {
    id: "aves-rr1-r1-bio-b17",
    subject: "biology",
    tournament: "AVES RR 1",
    round: 1,
    number: 17,
    type: "bonus",
    answerType: "mc",
    choices: [
      "Primary consumers",
      "Secondary consumers",
      "Tertiary consumers",
      "Decomposers",
    ],
    question:
      "If 100,000 joules of energy is available at the primary producer level, which of the following trophic levels will be represented by 1,000 joules of energy remaining?\n\nW) Primary consumers\nX) Secondary consumers\nY) Tertiary consumers\nZ) Decomposers",
    answer: "X",
    acceptableAnswers: ["X", "x", "secondary consumers"],
  },

  // 18
  {
    id: "aves-rr1-r1-phys-tu18",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 18,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Two different fluids have the same density, speed, and characteristic length. However, the second fluid has a higher Reynold's number due to a difference in what quantity, which is a fluid's resistance to flow?",
    answer: "Viscosity",
    acceptableAnswers: ["viscosity", "kinematic viscosity", "dynamic viscosity"],
  },
  {
    id: "aves-rr1-r1-phys-b18",
    subject: "physics",
    tournament: "AVES RR 1",
    round: 1,
    number: 18,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "A falling object has reached terminal velocity. Identify all of the following three quantities that decrease as the object continues to fall:\n1) Acceleration;\n2) Kinetic Energy;\n3) Momentum.",
    answer: "None of them",
    acceptableAnswers: ["none", "none of them"],
  },

  // 19
  {
    id: "aves-rr1-r1-earth-tu19",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 19,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Certain asteroids never collide with planets because they lie in specific positions where the gravitational forces from the planet and the Sun balance each other out. What is the name of these set of points?",
    answer: "Lagrange points",
    acceptableAnswers: ["lagrange points", "lagrangian points"],
  },
  {
    id: "aves-rr1-r1-earth-b19",
    subject: "earth_and_space",
    tournament: "AVES RR 1",
    round: 1,
    number: 19,
    type: "bonus",
    answerType: "short",
    choices: null,
    question:
      "Little to no carbon was produced in the early Big Bang because what fusion process was unable to occur effectively due to the incompatible pressure and temperature?",
    answer: "Triple alpha process",
    acceptableAnswers: ["triple alpha", "triple alpha process"],
  },

  // 20
  {
    id: "aves-rr1-r1-chem-tu20",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 20,
    type: "tossup",
    answerType: "short",
    choices: null,
    question:
      "Identify all of the following four states of matter that have definite volume:\n1) Solid;\n2) Liquid;\n3) Gas;\n4) Plasma.",
    answer: "1 and 2",
    acceptableAnswers: [
      "1 and 2",
      "1, 2",
      "solid and liquid",
      "solids and liquids",
    ],
  },
  {
    id: "aves-rr1-r1-chem-b20",
    subject: "chemistry",
    tournament: "AVES RR 1",
    round: 1,
    number: 20,
    type: "bonus",
    answerType: "mc",
    choices: ["Boyle’s Law", "Henry’s Law", "Charles’s Law", "Gay-Lussac’s Law"],
    question:
      "Which of the following laws cannot be derived from the ideal gas law?\n\nW) Boyle’s Law\nX) Henry’s Law\nY) Charles’s Law\nZ) Gay-Lussac’s Law",
    answer: "X",
    acceptableAnswers: ["X", "x", "henry’s law", "henrys law"],
  },
];
