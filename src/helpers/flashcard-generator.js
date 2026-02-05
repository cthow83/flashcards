export const words = [
  "merriment",
  "happiness",
  "plentiful",
  "penniless",
  "happily",
  "prettiest",
  "nastiness",
  "beautiful",
  "pitiful",
  "silliness",
];

export const syllables = [
  "mer-ri-ment",
  "hap-pi-ness",
  "plen-ti-ful",
  "pen-ni-less",
  "hap-pi-ly",
  "pret-ti-est",
  "nas-ti-ness",
  "beau-ti-ful",
  "pit-i-ful",
  "sil-li-ness",
];

export const emoji = [
  "🎉", // merriment
  "😊", // happiness
  "🌾", // plentiful
  "💸", // penniless
  "😃", // happily
  "👑", // prettiest
  "😈", // nastiness
  "🌺", // beautiful
  "😢", // pitiful
  "🤪", // silliness
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
