import { sortNumber } from "../index";

export const chooseWord = (words) => {
  const NUMBER = sortNumber(words.length - 1);
  return words[NUMBER];
};
