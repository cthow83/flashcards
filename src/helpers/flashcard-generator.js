const words = [
  "adoration",
  "admiration",
  "coronation",
  "detonation",
  "observation",
  "location",
  "generation",
  "exploration",
  "combination",
  "illustration",
];

const syllables = [
  "a-do-ra-tion",
  "ad-mi-ra-tion",
  "cor-o-na-tion",
  "det-o-na-tion",
  "ob-ser-va-tion",
  "lo-ca-tion",
  "gen-er-a-tion",
  "ex-plor-a-tion",
  "com-bi-na-tion",
  "il-lus-tra-tion",
];

const emoji = [
  "😍", // adoration
  "👏", // admiration
  "👑", // coronation
  "💥", // detonation
  "🔭", // observation
  "📍", // location
  "⚡️", // generation
  "🧭", // exploration
  "🔗", // combination
  "🖼️", // illustration
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
