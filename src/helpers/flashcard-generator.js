export const words = [
  "group",
  "height",
  "particular",
  "potatoes",
  "separate",
  "surprise",
  "through",
  "various",
  "though",
  "woman",
];

export const syllables = [
  "group",
  "height",
  "par-tic-u-lar",
  "po-ta-toes",
  "sep-a-rate",
  "sur-prise",
  "through",
  "var-i-ous",
  "though",
  "wo-man",
];

export const emoji = [
  "👥", // group
  "📏", // height
  "🎯", // particular
  "🥔", // potatoes
  "✂️", // separate
  "😮", // surprise
  "🚪", // through
  "🔀", // various
  "🤔", // though
  "👩", // woman
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
