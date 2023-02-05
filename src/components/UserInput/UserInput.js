import React, { useState } from "react";

function UserInput({ handleGuessedWordSubmit, disabled }) {
  const [guessedWord, setGuessedWord] = useState("");

  function handleInputChange(event) {
    setGuessedWord(event.target.value.toUpperCase());
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (guessedWord.length !== 5) {
      window.alert("The input should have a minimum and maximum length of 5.");
      return;
    }
    handleGuessedWordSubmit(guessedWord);
    setGuessedWord("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guessedWord}
        onChange={handleInputChange}
        disabled={disabled}
      />
    </form>
  );
}

export default UserInput;
