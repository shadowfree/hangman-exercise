export const getWord = () => "HELLO SFEIR";

export const lettersToUnderscores = word => word.replace(/[a-zA-Z]/g, "_");

export const revealLetter = (secretWord, letter) => (
  displayedLetter,
  displayedLetterIndex
) =>
  displayedLetter !== "_"
    ? displayedLetter
    : secretWord[displayedLetterIndex] === letter
      ? letter
      : displayedLetter;
