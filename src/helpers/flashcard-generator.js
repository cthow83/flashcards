export const words = [
  "serious",
  "obvious",
  "curious",
  "hideous",
  "spontaneous",
  "courteous",
  "furious",
  "various",
  "victorious",
  "gaseous",
];

export const syllables = [
  "se-ri-ous", // serious
  "ob-vi-ous", // obvious
  "cu-ri-ous", // curious
  "hid-e-ous", // hideous
  "spon-ta-ne-ous", // spontaneous
  "cour-te-ous", // courteous
  "fu-ri-ous", // furious
  "var-i-ous", // various
  "vic-to-ri-ous", // victorious
  "gas-e-ous", // gaseous
];

export const emoji = [
  "🤔", // serious
  "🔎", // obvious
  "🧐", // curious
  "👹", // hideous
  "💡", // spontaneous
  "🤝", // courteous
  "😡", // furious
  "🌈", // various
  "🏆", // victorious
  "💨", // gaseous
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
