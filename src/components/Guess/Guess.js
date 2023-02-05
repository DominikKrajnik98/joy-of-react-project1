import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessedWord, answer }) {
  const checkedGuess = checkGuess(guessedWord?.value, answer);
  return (
    <p className="guess">
      {range(5).map((cell, index) => (
        <span
          key={index}
          className={`cell ${checkedGuess?.[index]?.status ?? ""}`}
        >
          {checkedGuess?.[index]?.letter ?? ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
