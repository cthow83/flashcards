import { useState } from "react";
import { Heading, Word, Emoji } from "./components/content.jsx";
import { Buttons } from "./components/buttons.jsx";
import "./App.css";

function App() {
  const [word, setWord] = useState({
    word: "adoration",
    emoji: "😍",
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
      <Emoji emoji={word.emoji} />
    </>
  );
}

export default App;
