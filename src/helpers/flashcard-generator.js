export const words = [
  "musician", // musician
  "magician", // magician
  "electrician", // electrician
  "politician", // politician
  "mathematician", // mathematician
  "technician", // technician
  "optician", // optician
  "beautician", // beautician
  "physician", // physician
  "dietician", // dietician
];

export const syllables = [
  "mu-si-cian", // musician
  "ma-gi-cian", // magician
  "e-lec-tri-cian", // electrician
  "pol-i-ti-cian", // politician
  "math-e-ma-ti-cian", // mathematician
  "tech-ni-cian", // technician
  "op-ti-cian", // optician
  "beau-ti-cian", // beautician
  "phy-si-cian", // physician
  "di-e-ti-cian", // dietician
];

export const emoji = [
  "🎵", // musician
  "🎩", // magician
  "⚡", // electrician
  "🏛️", // politician
  "🔢", // mathematician
  "🔧", // technician
  "👓", // optician
  "💄", // beautician
  "🩺", // physician
  "🥗", // dietician
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
