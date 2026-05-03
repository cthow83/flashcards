export const words = [
  "circle",
  "century",
  "centaur",
  "circus",
  "princess",
  "voice",
  "medicine",
  "celebrate",
  "celery",
  "pencil",
];

export const syllables = [
  "cir-cle",
  "cen-tu-ry",
  "cen-taur",
  "cir-cus",
  "prin-cess",
  "voice",
  "med-i-cine",
  "cel-e-brate",
  "ce-le-ry",
  "pen-cil",
];

export const emoji = [
  "⚪️", // circle
  "💯", // century
  "🐎", // centaur
  "🎪", // circus
  "👸", // princess
  "🗣️", // voice
  "💊", // medicine
  "🎉", // celebrate
  "🥬", // celery
  "✏️", // pencil
];

export const sentence = [
  "A wheel is a circle so can  spin and turn easily.",
  "It had been a centruy since anybody had visited the castle.",
  "Herakles accidentally injured a centaur with an arrow.",
  "The circus comes every summer and sets up a big tent in the park.",
  "A princess is the daughter or granddaughter of a king or queen.",
  "As they crept through the house, Fiona thought she heard a voice.",
  "Ben's grandfather had to take medicine every day for his bad back.",
  "The school's hockey team began to celebrate afer they won the tournament.",
  "Kristen love the crunch of eating celery",
  "Aoife put her hand up to ask the teacher for a new pencil.",
];

const backgroundColors = [
  "#ffffff",
  "#DBE1F0",
  "#ADF090",
  "#D8D3D6",
  "#EDDB76",
  "#ECD0B2",
  "#B68ADA",
  "#E0A6AA",
];

export const nextWord = (wordIndex, setWordIndex, setWord) => {
  if (wordIndex === 9) {
    setWordIndex(0);
  } else {
    setWordIndex(wordIndex + 1);
  }
  setWord({
    word: words[wordIndex],
    emoji: emoji[wordIndex],
    syllables: syllables[wordIndex],
    sentence: sentence[wordIndex],
  });
};

export const changeBackground = (backgroundIndex, setBackgroundIndex) => {
  if (backgroundIndex === 7) {
    setBackgroundIndex(0);
  } else {
    setBackgroundIndex(backgroundIndex + 1);
  }
  document.body.style.backgroundColor = backgroundColors[backgroundIndex];
};

export const changeFont = (fontStandard, setFontStandard) => {
  setFontStandard(!fontStandard);
  if (fontStandard) {
    document.body.classList.add("dyslexic-font");
  } else {
    document.body.classList.remove("dyslexic-font");
  }
};
