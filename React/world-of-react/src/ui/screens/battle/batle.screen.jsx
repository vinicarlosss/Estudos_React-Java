import { useEffect, useState } from "react";
import { getAllCharacters, startBattle, useCharacterById } from "../../../api";
import { useParams } from "react-router-dom";
import "./battle.style.css";
import VS from "../../../assets/img/VSbattle.png";
import { Header } from "../../components/header/header.component";
import { BattlaCharacterCard } from "../../components";

const TIME_TO_HIDE_RESULT = 3000;

export function Battle() {
  const [formInput, setFormInput] = useState({ idOpponent: "" });
  const [result, setResult] = useState();
  const [characters, setCharacters] = useState();
  const [enemyCharacter, setEnemyCharacter] = useState();
  const { characterId } = useParams();
  const { characterFounded, fetchCharacterById } = useCharacterById();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await startBattle({
        characterId: characterId,
        opponentId: formInput.idOpponent,
      });

      if (response.winner) {
        setResult("Você venceu");
      } else if (response.draw) {
        setResult("Deu empate");
      } else {
        setResult("Você perdeu");
      }

      setTimeout(() => {
        setResult("");
      }, TIME_TO_HIDE_RESULT);
    } catch (error) {
      setResult(error.response.data.message);
    }
  }

  function renderOptions(array) {
    function getOptionClass(enemyFaction) {
      if (enemyFaction !== characterFounded.faction) {
        return "red-option";
      } else {
        return "green-option";
      }
    }
    return array?.map((item, index) => {
      const optionClass = getOptionClass(item.faction);
      return (
        <option
          key={item.id}
          className={`${optionClass} enemy-option`}
          value={item.id}
        >
          {item.name}
        </option>
      );
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }
  useEffect(() => {
    fetchCharacterById(characterId);
  }, [result]);

  useEffect(() => {
    async function handleCharacteres() {
      setCharacters(await getAllCharacters());
    }
    handleCharacteres();
  }, [result]);

  useEffect(() => {
    const characterSelected = characters?.find(
      (character) => character.id == formInput.idOpponent
    );
    setEnemyCharacter(characterSelected);
  }, [formInput]);

  return (
    <>
      <main className="battlePage">
        <Header screen="ToCharacter" characterID={characterId} />
        <h1 className="battlePage_title">BATALHAR</h1>
        <form onSubmit={handleSubmit}>
          <select
            onChange={handleChange}
            name="idOpponent"
            className="battlePage_select"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Selecione um inimigo ...
            </option>
            {renderOptions(characters)}
          </select>
          <button className="battlePage_button">Batalhar</button>
        </form>

        <p className="battle_result">{result}</p>

        {true && (
          <div className="battle-field">
            <BattlaCharacterCard character={characterFounded} />

            <img src={VS} alt="versus" className="vs_battle" />

            <BattlaCharacterCard character={enemyCharacter} />
          </div>
        )}
      </main>
    </>
  );
}
