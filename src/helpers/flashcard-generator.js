export const words = [
  "usually",
  "finally",
  "beautifully",
  "thoughtfully",
  "wonderfully",
  "carefully",
  "faithfully",
  "peacefully",
  "cruelly",
  "generally",
];

export const syllables = [
  "u-su-al-ly",
  "fi-nal-ly",
  "beau-ti-ful-ly",
  "thought-ful-ly",
  "won-der-ful-ly",
  "care-ful-ly",
  "faith-ful-ly",
  "peace-ful-ly",
  "cru-el-ly",
  "gen-er-al-ly",
];

export const emoji = [
  "🔁", // usually
  "🏁", // finally
  "🌸", // beautifully
  "💭", // thoughtfully
  "✨", // wonderfully
  "🧐", // carefully
  "🙏", // faithfully
  "🕊️", // peacefully
  "😈", // cruelly
  "📦", // generally
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
