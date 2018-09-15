import React from "react";

import "./keyboard.css";

const lettersArray = new Array(26)
  .fill()
  .map((_, index) => String.fromCharCode(65 + index));

const Keyboard = ({ triedChars, onLetterClicked }) => (
  <div className="keyboard">
    {lettersArray.map(letter => (
      <button
        key={letter}
        className="keyboard__letter"
        onClick={onLetterClicked(letter)}
        disabled={triedChars.has(letter)}
      >
        <b>{letter}</b>
      </button>
    ))}
  </div>
);

export default Keyboard;
