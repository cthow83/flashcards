export const words = [
  "scene",
  "seen",
  "whose",
  "who's",
  "affect",
  "effect",
  "here",
  "hear",
  "heel",
  "heal",
];

export const syllables = [
  "scene",
  "seen",
  "whose",
  "who's",
  "af-fect",
  "ef-fect",
  "here",
  "hear",
  "heel",
  "heal",
];

export const emoji = [
  "🎬", // scene
  "👁️", // seen
  "❓", // whose
  "🙋", // who's
  "💭", // affect
  "✨", // effect
  "📍", // here
  "👂", // hear
  "👟", // heel
  "🩹", // heal
];

export const sentence = [
  "The opening of the story set the scene for the reader.",
  "The spies were seen hiding in the bushes.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
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
    sentence: sentence[wordIndex],
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
