import React, { useState } from "react";
import styled from "styled-components";
import { changeBackground, changeFont } from "../helpers/flashcard-generator";

export const Button = ({ onClick, name }) => {
  return (
    <StyledButton onClick={onClick} className={`${name}-button`}>
      {name}
    </StyledButton>
  );
};

export const ChangeFontButton = ({ onClick, fontStandard }) => {
  return (
    <StyledButton onClick={onClick} className="change-font-button">
      {fontStandard ? "Dyslexia Font" : "Standard Font"}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin: 3px 2px;
  height: 50px;
  background-color: yellow;
  color: black;
`;

export const Buttons = ({ backgroundIndex, setBackgroundIndex }) => {
  const [fontStandard, setFontStandard] = useState(true);
  const fontName = fontStandard ? "Dyslexia Font" : "Standard Font";

  return (
    <div className="buttons-container">
      <Button
        onClick={() => changeBackground(backgroundIndex, setBackgroundIndex)}
        name={"Background"}
      />
      <Button
        onClick={() => changeFont(fontStandard, setFontStandard)}
        fontStandard={fontStandard}
        name={fontName}
      />
    </div>
  );
};
