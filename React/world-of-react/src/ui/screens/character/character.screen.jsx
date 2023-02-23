import { useEffect, useState } from "react";
import useGlobalCharacter from "../../../context/character.context";
import { useCharacterById } from "../../../api/user/character.api";
import { useNavigate } from "react-router-dom";
import backpack from "../../../assets/img/backpack.png";
import { Header } from "../../components/header/header.component";
import "./character.style.css";

export function CharacterPage() {
  const [characterSelected, setCharacterSelected] = useGlobalCharacter();
  const { characterFounded, fetchCharacterById } = useCharacterById();
  const [cheats, setCheats] = useState(false);
  const navigate = useNavigate();

  function handleQuests() {
    navigate("/quests");
  }

  function handleBackpack() {
    navigate("/backpack");
  }

  function handleBattle() {
    navigate(`/battle/${characterSelected}`);
  }

  function handleShop() {
    navigate("/shop");
  }

  useEffect(() => {
    fetchCharacterById(characterSelected);
    setCheats(false);
  }, [cheats]);

  return (
    <>
      <div className="character_page">
        <Header
          screen="ToHome"
          characterID={characterSelected}
          cheatFunction={setCheats}
        />
        <div className="character_page--card">
          <h2 className="character_page--title">CARD DO PERSONAGEM:</h2>
          <div className="character_card">
            <img
              src={characterFounded?.race?.image}
              alt="imagem da raça"
              className="character_image"
            />
            <div className="character_infos">
              <h1>{characterFounded?.name}</h1>
              <p>Nivel: {characterFounded?.level}</p>
              <p>Experiencia: {characterFounded?.experience} xp</p>
              <p>Raça: {characterFounded?.race?.name}</p>
              <p>Facção: {characterFounded?.faction}</p>
              <p>Dinheiro: {characterFounded?.money}</p>
              <p>
                Próximo nível em: {characterFounded?.experienceToNextLevel} xp
              </p>
              <p>Abates: {characterFounded?.kills}</p>
              {characterFounded?.busy ? (
                <p>Status: ocupado</p>
              ) : (
                <p>Status: livre</p>
              )}
            </div>
            <div className="backpack">
              <span className="backpack_title">itens:</span>
              <img
                src={backpack}
                alt="backpack_image"
                className="backpack_image"
                onClick={handleBackpack}
              />
            </div>
          </div>
        </div>

        <div className="character_page--adventures">
          <h2 className="character_create--title">Explorar:</h2>

          <button onClick={handleQuests} className="character_page--button">
            MISSÕES
          </button>

          <button onClick={handleBattle} className="character_page--button">
            BATALHAR
          </button>
        </div>

        <div className="character_page--store">
          <a className="button_shop" onClick={handleShop}>
            LOJA|{" "}
          </a>
        </div>
      </div>
    </>
  );
}
