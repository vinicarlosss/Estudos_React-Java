import "./home.style.css";
import { useNavigate } from "react-router-dom";
import useGlobalUser from "../../../context/user.context";
import imagemHome from "../../../assets/img/imagemHome.png";
import { useCharacter } from "../../../api/user/character.api";
import useGlobalCharacter from "../../../context/character.context";
import CharactersList from "../../components/characters-list/characters-list.component";
import { useState } from "react";
import { deleteCharacterById } from "../../../api/user/delete-character";
import { Header } from "../../components/header/header.component";

export function Home() {
  const [user, setUser] = useGlobalUser();
  const [characterSelected, setCharacterSelected] = useGlobalCharacter();
  const [characterFounded, setCharacterFounded] = useState("");
  const { characterList, setCharacter } = useCharacter();
  const { username } = user.data;
  const navigate = useNavigate();
  const mensagem = "Você ainda não possui nenhum personagem...";
  const [mensagemDelete, setmensagemDelete] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCharacterSelected(characterFounded);
  }

  function createCharacter() {
    navigate("/create-character");
  }

  function nextPage() {
    characterSelected ? navigate("/characterPage") : navigate("/home");
  }

  function deleteCharacter(id) {
    try {
      deleteCharacterById(id);
      setmensagemDelete("Personagem deletado com sucesso!");
    } catch (error) {
      setmensagemDelete("Não foi possível deletar personagem!");
    }
  }

  return (
    <main>
      <div className="home">
        <Header screen="ToLogin" />
        <div className="home_content">
          <div className="home_inicio">
            <h1 className="home_welcome">Welcome, {username}!</h1>
            <img
              src={imagemHome}
              alt="home_personagem"
              className="home_image"
            />
          </div>

          <div className="home_select_character">
            <label className="home_label">Selecionar Personagem:</label>

            <form onSubmit={handleSubmit} className="home_form">
              {characterList.length === 0 ? (
                <>
                  <p className="charactersList_mensagem">{mensagem}</p>
                  <button className="button_create" onClick={createCharacter}>
                    Criar
                  </button>
                </>
              ) : (
                <>
                  <CharactersList
                    characterList={characterList}
                    setCharacterFounded={setCharacterFounded}
                  />
                  <button className="button_confirm">Confirmar escolha</button>
                </>
              )}
            </form>
          </div>
        </div>
        {characterList.length === 0 ? null : (
          <div className="buttons_options">
            <div className="delete">
              <button
                id="button_create--delete"
                onClick={() => deleteCharacter(characterSelected)}
              >
                Deletar
              </button>
              <p className="mensagem_delete">{mensagemDelete}</p>
            </div>
            <button id="button_create--enter" onClick={nextPage}>
              Entrar
            </button>

            <button id="button_create--create" onClick={createCharacter}>
              Criar
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
