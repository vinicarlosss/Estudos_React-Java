import "./word.style.css";
import { useEffect, useState } from "react";
import { checkLetter } from "../../assets/functions/index";

const renderLetter = (wordLetter, wordLetterIndex, rightLetters) => {
  for (let i = 0; i < rightLetters.length; i++) {
    if (rightLetters[i].index == wordLetterIndex) {
      return <span className="word-char">{wordLetter}</span>;
    }
  }
};

export function Word({
  word,
  tryFunction,
  wrongLetters,
  wrongLettersFunction,
  rightLetters,
  setRightLetters,
}) {
  useEffect(() => {
    const keyPressed = (event) => {
      const KEY = event.key;
      setRightLetters((lastRightLetters) =>
        checkLetter(
          KEY,
          word,
          lastRightLetters,
          wrongLetters,
          wrongLettersFunction
        )
      );
      tryFunction((lastTry) => lastTry + 1);
    };
    document.addEventListener("keydown", keyPressed);
  }, [word]);
  return (
    
    <div className="container-word">
    {console.log(word)}
      {word.split("").map((letter, index) => {
        return (
          <div className="letter-spot" key={index}>
            {renderLetter(letter, index, rightLetters)}
          </div>
        );
      })}
    </div>
  );
}
