import "./forca.style.css";
import { ForcaImage } from "../index";
import { useEffect, useState } from "react";
import { words } from "../../assets/words";
import { Word, Restart } from "../index";
import { chooseWord } from "../../assets/functions/index";

export function Forca() {
  const [tries, setTries] = useState(0);
  const [word, setWord] = useState("");
  const [wrongLetters, setWrongLetters] = useState([]);
  const [rightLetters, setRightLetters] = useState([]);

  useEffect(() => {
    setWord((lastWord) => (lastWord = chooseWord(words)));

  }, [word]);

  return (
    <main className="forca-container">
      <header>
        <h1 className="forca-title">Jogo da forca!</h1>
      </header>
      <ForcaImage wrongLetters={wrongLetters} />

      <Word
        word={word}
        tryFunction={setTries}
        wrongLetters={wrongLetters}
        wrongLettersFunction={setWrongLetters}
        rightLetters={rightLetters}
        setRightLetters={setRightLetters}
      />
      <span>{`Tentativas: ${tries}/6`}</span>
      <div className="wrong-letters">
        {wrongLetters.map((letter, index) => {
          return <span className="letter-wrong" key={index}>{` ${letter} -`}</span>;
        })}
      </div>
      <Restart attempts={tries} word = {word} rightLetters = {rightLetters} setWord={setWord}/>
      
    </main>
  );
}
