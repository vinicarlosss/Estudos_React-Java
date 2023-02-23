const checkIfHasLetter = (letter, rightLetters) => {
  if (rightLetters.find((element) => element.letter == letter)) {
    return true;
  }
  return false;
};

export const checkLetter = (
  letter,
  word,
  rightLetters,
  wrongLetters,
  wrongLettersFunction
) => {
  const RIGHTLETTERSLEN = rightLetters.length;
  const CHECKIFHASLETTER = checkIfHasLetter(letter, rightLetters);

  if (!CHECKIFHASLETTER) {
    word.split("").map((char, index) => {
      if (char === letter) {
        rightLetters = [...rightLetters, { letter: char, index: index }];
      }
    });
  }

  if (!CHECKIFHASLETTER && rightLetters.length == RIGHTLETTERSLEN) {
    wrongLettersFunction((lastWrongLetters) => [...lastWrongLetters, letter]);
  }
  return rightLetters;
};
