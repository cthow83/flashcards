import React, { useState } from "react";
import styled from "styled-components";
import {
  nextWord,
  changeBackground,
  changeFont,
} from "../helpers/flashcard-generator";

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

export const ChangeFontButton = ({ onClick, fontStandard }) => {
  return (
    <StyledButton onClick={onClick} className="change-font-button">
      {fontStandard ? "Use Dyslexia Font" : "Use Standard Font"}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 3px 2px;
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
  const [fontStandard, setFontStandard] = useState(true);

  return (
    <div className="buttons-container" style={{ width: 300 }}>
      <NextButton onClick={() => nextWord(wordIndex, setWordIndex, setWord)} />
      <ChangeBackgroundButton
        onClick={() => changeBackground(backgroundIndex, setBackgroundIndex)}
      />
      <ChangeFontButton
        onClick={() => changeFont(fontStandard, setFontStandard)}
        fontStandard={fontStandard}
      />
    </div>
  );
};
