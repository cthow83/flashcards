export const words = [
  "solar",
  "solution",
  "soluble",
  "insoluble",
  "dissolve",
  "real",
  "reality",
  "realistic",
  "unreal",
  "realisation",
];

export const syllables = [
  "so-lar",
  "so-lu-tion",
  "sol-u-ble",
  "in-sol-u-ble",
  "dis-solve",
  "real",
  "re-al-i-ty",
  "re-al-is-tic",
  "un-real",
  "re-al-i-sa-tion",
];

export const emoji = [
  "☀️", // solar
  "🧪", // solution
  "💧", // soluble
  "🪨", // insoluble
  "🔬", // dissolve
  "✅", // real
  "🌍", // reality
  "🎯", // realistic
  "✨", // unreal
  "💡", // realisation
];

export const sentence = [
  "The solar panels collect sunlight to make electricity.",
  "A saltwater solution is a liquid mixture of salt and water.",
  "Salt is soluble in water, so it mixes and disappears.",
  "Sand is insoluble in oil, so it does not mix.",
  "The sugar will dissolve when you stir it into the tea.",
  "That story is real — it really happened to my neighbour.",
  "Virtual reality can feel real, but it is still a simulation.",
  "A realistic plan sets small goals that are easy to reach.",
  "The magician's trick seemed unreal; everyone gasped in surprise.",
  "Her sudden realisation made her smile as she understood the answer.",
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
