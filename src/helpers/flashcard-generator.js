export const words = [
  "bicycle",
  "biplane",
  "biped",
  "bicentennial",
  "biannual",
  "bilingual",
  "biscuit",
  "biceps",
  "binoculars",
  "bisect",
];

export const syllables = [
  "bi-cy-cle",
  "bi-plane",
  "bi-ped",
  "bi-cen-ten-ni-al",
  "bi-an-nu-al",
  "bi-lin-gual",
  "bi-cuit",
  "bi-ceps",
  "bi-noc-u-lars",
  "bi-sect",
];

export const emoji = [
  "🚲", // bicycle
  "✈️", // biplane
  "🚶", // biped
  "🎉", // bicentennial
  "📅", // biannual
  "🗣️", // bilingual
  "🍪", // biscuit
  "💪", // biceps
  "🔭", // binoculars
  "✂️", // bisect
];

export const sentence = [
  "A tricycle has three wheels, whereas a bicycle has two.",
  "The biplane soared through the sky",
  "Humans walk on two legs, they are a good example of a biped.",
  "A bicentennial is when you celebrate an important event that happened 200 years ago.",
  "Sunday was the biannual cake decorating contest.",
  "Ruth is bilingual, she can speak French and English.",
  "Ruth tiptoed downstairs and chose a special biscuit from the tin.",
  "The fitness instructor looked at the mirror and flexed his biceps",
  "Chen used his binoculars to see the buildings in the distance",
  "They are building a new road that will bisect the town",
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
