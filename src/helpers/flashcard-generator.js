export const words = [
  "phone",
  "telephone",
  "phonics",
  "microphone",
  "phonograph",
  "sign",
  "signature",
  "assign",
  "designer",
  "signaller",
];

export const syllables = [
  "phone",
  "tel-e-phone",
  "pho-nics",
  "mi-cro-phone",
  "pho-no-graph",
  "sign",
  "sig-na-ture",
  "as-sign",
  "de-sign-er",
  "sign-al-ler",
];

export const emoji = [
  "📱", // phone
  "☎️", // telephone
  "🔤", // phonics
  "🎤", // microphone
  "📻", // phonograph
  "✍️", // sign
  "🖊️", // signature
  "📝", // assign
  "🎨", // designer
  "🚦", // signaller
];

export const sentence = [
  "I called my friend on the phone to say hello.",
  "The old telephone rang loudly in the hallway.",
  "Phonics helps children learn to read new words.",
  "She spoke into the microphone during the concert.",
  "The phonograph played a beautiful melody from a vinyl record.",
  "Please sign your name at the bottom of the form.",
  "His signature was unique and easy to recognize.",
  "The teacher will assign homework for the weekend.",
  "The designer created a stunning new logo for the company.",
  "The signaller waved the flag to send a message to the train.",
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
