import styled from "styled-components";

const EmojiStyles = styled.div`
  font-size: 8rem;
`;

export const Heading = () => {
  return (
    <>
      <h2>🐝 Spelling Bee 🐝</h2>
    </>
  );
};

export const Word = ({ word }) => {
  return <h1 id="word">{word}</h1>;
};

export const Emoji = ({ emoji }) => {
  return <EmojiStyles id="emoji">{emoji}</EmojiStyles>;
};

export const Syllables = ({ syllables }) => {
  return <h3 id="syllables">{syllables}</h3>;
};
