import React from "react";

function HappyBanner({ totalAtempts }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{totalAtempts} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ gameStatus, totalAtempts, answer }) {
  return (
    <>
      {gameStatus === "win" ? (
        <HappyBanner totalAtempts={totalAtempts} />
      ) : (
        <SadBanner answer={answer} />
      )}
    </>
  );
}

export default Banner;
