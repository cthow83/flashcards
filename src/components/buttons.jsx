import styled from "styled-components";
import { nextWord, changeBackground } from "../helpers/flashcard-generator";

export const NextButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} className="next-button">
      Next
    </StyledButton>
  );
};

export const ChangeBackgroundButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} className="change-background-button">
      Change Background
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 0 2px;
  height: 50px;
  background-color: yellow;
  color: black;
`;

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
