export const words = [
  "invention",
  "injection",
  "action",
  "hesitation",
  "completion",
  "stagnation",
  "nomination",
  "migration",
  "conservation",
  "selection",
];

export const syllables = [
  "in-ven-tion", // invention
  "in-jec-tion", // injection
  "ac-tion", // action
  "hes-i-ta-tion", // hesitation
  "com-ple-tion", // completion
  "stag-na-tion", // stagnation
  "nom-i-na-tion", // nomination
  "mi-gra-tion", // migration
  "con-ser-va-tion", // conservation
  "se-lec-tion", // selection
];

export const emoji = [
  "💡", // invention
  "💉", // injection
  "🎬", // action
  "⏳", // hesitation
  "✅", // completion
  "🦆", // stagnation
  "🏆", // nomination
  "🦋", // migration
  "🌳", // conservation
  "🎯", // selection
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
