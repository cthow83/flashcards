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
  "'Whose socks are these?' asked the teacher.",
  "Who's going to the fair on Saturday?",
  "The heat began to affect his running times.",
  "The medicine had an immediate effect",
  "Here are the ruins of the old castle.",
  "It was difficult to hear over the noise in the playground.",
  "Daniel hurt his heel playing football in the park.",
  "The cut on his leg began to heal the next day.",
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
