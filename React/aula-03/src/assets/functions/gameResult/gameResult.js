import {chooseWord} from '../index'
import { words } from "../../words"

export const gameResult = (word, rightletters, setWord) => {
    if (word.length == rightletters.length) {

        return (
            <>
                <p>Parabéns você acertou a palavra</p>
                <button onClick={()=> setWord(chooseWord(words))}>Reiniciar</button>
            </>

        )
    }
}