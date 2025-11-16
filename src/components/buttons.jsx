import { nextWord, changeBackground } from "../helpers/flashcard-generator";

export const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="next-button">
      Next
    </button>
  );
};

export const ChangeBackgroundButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="change-background-button">
      Change Background
    </button>
  );
};

export const Buttons = ({
  wordIndex,
  setWordIndex,
  setWord,
  backgroundIndex,
  setBackgroundIndex,
}) => {
  return (
    <div className="buttons-container">
      <NextButton onClick={() => nextWord(wordIndex, setWordIndex, setWord)} />
      <ChangeBackgroundButton
        onClick={() => changeBackground(backgroundIndex, setBackgroundIndex)}
      />
    </div>
  );
};
