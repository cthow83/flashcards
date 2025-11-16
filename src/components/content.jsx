import styled from "styled-components";

const EmojiStyles = styled.div`
  font-size: 10rem;
`;

export const Heading = () => {
  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Bolton_School_Foundation_Joint_Logo.jpg/250px-Bolton_School_Foundation_Joint_Logo.jpg"
        width="150px"
      />
      <p>Year 4</p>
      <p>Spelling flashcards</p>
    </>
  );
};

export const Word = ({ word }) => {
  return <h1 id="word">{word}</h1>;
};

export const Emoji = ({ emoji }) => {
  return <EmojiStyles id="emoji">{emoji}</EmojiStyles>;
};
