import React, { useState } from "react";
import UserInput from "../UserInput";
import GameBoard from "../GameBoard";
import Banner from "../Banner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWordsList, setGuessedWordsList] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function gameProggres(guessedWord, newWordList) {
    if (newWordList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
      return;
    }
    const isWin = checkGuess(guessedWord, answer).every(
      (letter) => letter.status === "correct"
    );
    if (isWin) {
      setGameStatus("win");
      return;
    }
  }

  function handleGuessedWordSubmit(guessedWord) {
    const newWordList = [
      ...guessedWordsList,
      { id: crypto.randomUUID(), value: guessedWord },
    ];
    setGuessedWordsList(newWordList);
    gameProggres(guessedWord, newWordList);
  }

  const isEnd = gameStatus === "win" || gameStatus === "lost";

  return (
    <>
      <GameBoard guessedWordsList={guessedWordsList} answer={answer} />
      <UserInput
        handleGuessedWordSubmit={handleGuessedWordSubmit}
        disabled={isEnd}
      />
      {isEnd ? (
        <Banner
          answer={answer}
          totalAtempts={guessedWordsList.length}
          gameStatus={gameStatus}
        />
      ) : null}
    </>
  );
}

export default Game;
