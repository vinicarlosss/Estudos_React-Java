import "./restart.style.css";
import {gameResult} from  '../../assets/functions/index'

export function Restart({ attempts, word, rightLetters, setWord }) {
    return (
        gameResult(word, rightLetters, setWord)
    )
}
