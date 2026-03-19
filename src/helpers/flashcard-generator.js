export const words = [
  "expression", // expression
  "discussion", // discussion
  "confession", // confession
  "permission", // permission
  "admission", // admission
  "impression", // impression
  "obsession", // obsession
  "procession", // procession
  "omission", // omission
  "concussion", // concussion
];

export const syllables = [
  "ex-pres-sion", // expression
  "dis-cus-sion", // discussion
  "con-fes-sion", // confession
  "per-mis-sion", // permission
  "ad-mis-sion", // admission
  "im-pres-sion", // impression
  "ob-ses-sion", // obsession
  "pro-ces-sion", // procession
  "o-mis-sion", // omission
  "con-cus-sion", // concussion
];

export const emoji = [
  "🗣️", // expression
  "💬", // discussion
  "🙏", // confession
  "📝", // permission
  "🚪", // admission
  "👤", // impression
  "🔄", // obsession
  "🚶", // procession
  "❌", // omission
  "💥", // concussion
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
