import React from "react";

import "./hangManDrawing.css";

const hangManDrawings = [
  `
   ______
   |    |
   |
   |
   |
   |
   |
  _|_
`,
  `
   ______
   |    |
   |    O
   |
   |
   |
   |
  _|_
`,
  `
   ______
   |    |
   |    O
   |    |
   |    |
   |
   |
  _|_
`,
  `
  ______
  |    |
  |    O
  |   /|
  |    |
  |
  |
 _|_
`,
  `
  ______
  |    |
  |    O
  |   /|\\
  |    |
  |
  |
 _|_
`,
  `
  ______
  |    |
  |    O
  |   /|\\
  |    |
  |   /
  |
 _|_
`,
  `
  ______
  |    |
  |    O
  |   /|\\
  |    |
  |   / \\
  |
 _|_
`
];

const HangManDrawing = ({ numberOfBodyPartsShown }) => (
  <div className="hangManDrawing">
    <pre>{hangManDrawings[numberOfBodyPartsShown]}</pre>
  </div>
);

export default HangManDrawing;
