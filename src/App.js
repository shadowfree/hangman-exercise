import React, { Component, Fragment } from "react";
import Keyboard from "./components/Keyboard";

import GuessedWord from "./components/GuessedWord";
import HangManDrawing from "./components/HangManDrawing";

import { getWord, lettersToUnderscores, revealLetter } from "./services/words";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secretWord: "",
      guessedWord: "",
      numberOfErrors: 0
    };

    this.triedChars = new Set();
  }

  componentDidMount() {
    const secretWord = getWord();
    const secretWordKeyValueArray = secretWord
      .split("")
      .map(letter => [letter, false]);
    this.secretWordMap = new Map(secretWordKeyValueArray);

    this.setState({
      secretWord,
      guessedWord: lettersToUnderscores(secretWord)
    });
  }

  onLetterClicked = letter => e => {
    e.preventDefault();

    const { numberOfErrors, secretWord, guessedWord } = this.state;
    const newState = {};

    if (this.secretWordMap.has(letter)) {
      this.secretWordMap.set(letter, true);

      newState.guessedWord = guessedWord
        .split("")
        .map(revealLetter(secretWord, letter))
        .join("");
    } else {
      newState.numberOfErrors = numberOfErrors + 1;
    }

    this.triedChars.add(letter);

    this.setState(newState);
  };

  render() {
    const { guessedWord, numberOfErrors } = this.state;

    return (
      <section className="app">
        <Fragment>
          <Keyboard
            triedChars={this.triedChars}
            onLetterClicked={this.onLetterClicked}
          />
          <GuessedWord>{guessedWord}</GuessedWord>
        </Fragment>
        <HangManDrawing numberOfBodyPartsShown={numberOfErrors} />
      </section>
    );
  }
}

export default App;
