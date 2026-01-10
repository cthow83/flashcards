export const words = [
  "expansion",
  "extension",
  "comprehension",
  "tension",
  "suspension",
  "exclusion",
  "provision",
  "explosion",
  "erosion",
  "invasion",
];

export const syllables = [
  "ex-pan-sion", // expansion
  "ex-ten-sion", // extension
  "com-pre-hen-sion", // comprehension
  "ten-sion", // tension
  "sus-pen-sion", // suspension
  "ex-clu-sion", // exclusion
  "pro-vi-sion", // provision
  "ex-plo-sion", // explosion
  "e-ro-sion", // erosion
  "in-va-sion", // invasion
];

export const emoji = [
  "⬆️", // expansion
  "➡️", // extension
  "🧠", // comprehension
  "🪢", // tension
  "🪝", // suspension
  "🚫", // exclusion
  "📦", // provision
  "💥", // explosion
  "💧", // erosion
  "🛡️", // invasion
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
