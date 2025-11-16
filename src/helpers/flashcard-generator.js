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
  setWord({ word: words[wordIndex], emoji: emoji[wordIndex] });
};

export const changeBackground = (backgroundIndex, setBackgroundIndex) => {
  if (backgroundIndex === 7) {
    setBackgroundIndex(0);
  } else {
    setBackgroundIndex(backgroundIndex + 1);
  }
  document.body.style.backgroundColor = backgroundColors[backgroundIndex];
};
