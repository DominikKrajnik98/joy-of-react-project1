import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GameBoard({ guessedWordsList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row, index) => (
        <Guess
          key={index}
          guessedWord={guessedWordsList[index] ?? ""}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GameBoard;
