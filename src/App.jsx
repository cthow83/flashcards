import { useState } from "react";
import { Heading, Word, Emoji, Syllables } from "./components/content.jsx";
import { Buttons } from "./components/buttons.jsx";
import { nextWord } from "./helpers/flashcard-generator.js";
import { Button } from "./components/buttons.jsx";
import "./App.css";

function App() {
  const [word, setWord] = useState({
    word: "adoration",
    emoji: "😍",
    syllables: "a-do-ra-tion",
  });
  const [wordIndex, setWordIndex] = useState(1);
  const [backgroundIndex, setBackgroundIndex] = useState(1);
  return (
    <>
      <Heading />
      <Buttons
        wordIndex={wordIndex}
        setWordIndex={setWordIndex}
        setWord={setWord}
        backgroundIndex={backgroundIndex}
        setBackgroundIndex={setBackgroundIndex}
      />
      <Word word={word.word} />
      <Syllables syllables={word.syllables} />
      <Emoji emoji={word.emoji} />
      <Button
        onClick={() => nextWord(wordIndex, setWordIndex, setWord)}
        name="Next"
      />
    </>
  );
}

export default App;
