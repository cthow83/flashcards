import styled from "styled-components";

const EmojiStyles = styled.div`
  font-size: 8rem;
`;

const HighlightedWord = styled.span`
  font-weight: bold;
  background-color: #fff3cd;
  padding: 0.2em 0.4em;
  border-radius: 3px;
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

export const Sentence = ({ sentence, word }) => {
  if (!sentence || !word) {
    return <p id="sentence">{sentence}</p>;
  }

  const regex = new RegExp(`\\b${word}\\b`, "gi");
  const parts = sentence.split(regex);
  const matches = sentence.match(regex) || [];

  return (
    <p id="sentence">
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {matches[index] && (
            <HighlightedWord>{matches[index]}</HighlightedWord>
          )}
        </span>
      ))}
    </p>
  );
};
