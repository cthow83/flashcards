export const words = [
  "courageous",
  "outrageous",
  "nervous",
  "famous",
  "adventurous",
  "advantageous",
  "ridiculous",
  "carnivorous",
  "rapturous",
  "torturous",
];

export const syllables = [
  "cou-ra-geous",
  "out-ra-geous",
  "ner-vous",
  "fa-mous",
  "ad-ven-tur-ous",
  "ad-van-ta-geous",
  "ri-dic-u-lous",
  "car-niv-or-ous",
  "rap-tur-ous",
  "tor-tur-ous",
];

export const emoji = [
  "🦁", // courageous
  "😲", // outrageous
  "😬", // nervous
  "🌟", // famous
  "🧗", // adventurous
  "🏆", // advantageous
  "🤪", // ridiculous
  "🦖", // carnivorous
  "😍", // rapturous
  "😖", // torturous
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
