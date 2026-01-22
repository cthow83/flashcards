export const words = [
  "poisonous",
  "dangerous",
  "mountainous",
  "marvellous",
  "perilous",
  "tremendous",
  "enormous",
  "jealous",
  "precious",
  "disastrous",
];

export const syllables = [
  "poi-son-ous", // poisonous
  "dan-ger-ous", // dangerous
  "moun-tain-ous", // mountainous
  "mar-vel-lous", // marvellous
  "per-il-ous", // perilous
  "tre-men-dous", // tremendous
  "e-nor-mous", // enormous
  "jeal-ous", // jealous
  "pre-cious", // precious
  "dis-as-trous", // disastrous
];

export const emoji = [
  "☠️", // poisonous
  "⚠️", // dangerous
  "⛰️", // mountainous
  "✨", // marvellous
  "🛑", // perilous
  "🌋", // tremendous
  "🐘", // enormous
  "😒", // jealous
  "💎", // precious
  "🔥", // disastrous
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
