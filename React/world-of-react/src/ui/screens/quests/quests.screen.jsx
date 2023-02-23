import React from "react";
import "./quests.style.css";
import {
  useQuests,
  useStartQuest,
  useCharacterById,
  useFinishQuest,
  useQuestById,
} from "../../../api";
import { useEffect, useState } from "react";
import useGlobalCharacter from "../../../context/character.context";
import { Header } from "../../components/header/header.component";

const EXIHBITION_MESSAGE_TIME = 4000;

export function Quests() {
  const [idDoPersonagem] = useGlobalCharacter();
  const { quests, fetchQuests } = useQuests();
  const { messageStartQuest, setMessageStartQuest, startQuest } =
    useStartQuest();
  const { messageFinishQuest, setMessageFinishQuest, finishQuest } =
    useFinishQuest();
  const { characterFounded, fetchCharacterById } = useCharacterById();
  const { selectedQuest, setSelectedQuest, fechtSelectedQuest } =
    useQuestById();
  const endDate = new Date(characterFounded?.questInProgress?.finishAt);

  function handleChange(event) {
    const questId = event.target.value;
    fechtSelectedQuest(questId);
  }

  function handleSubmit(event) {
    event.preventDefault();

    startQuest(idDoPersonagem, selectedQuest?.id);

    setSelectedQuest(null);
    setTimeout(() => {
      setMessageStartQuest("");
    }, EXIHBITION_MESSAGE_TIME);
  }

  function handleFinishClick() {
    finishQuest(idDoPersonagem);

    if (characterFounded?.questInProgress) {
      setSelectedQuest(null);
    }

    setTimeout(() => {
      setMessageFinishQuest("");
    }, EXIHBITION_MESSAGE_TIME);
  }

  useEffect(() => {
    fetchQuests();
  }, []);

  useEffect(() => {
    fetchCharacterById(idDoPersonagem);
  }, [messageStartQuest, messageFinishQuest]);

  useEffect(() => {
    if (characterFounded?.questInProgress) {
      fechtSelectedQuest(characterFounded?.questInProgress.id);
    }
  }, [characterFounded]);

  return (
    <main>
      <div className="questsPage">
        <Header screen="ToCharacter" characterID={idDoPersonagem} />
        <div className="questsPage_content">
          {!characterFounded?.questInProgress && (
            <form onSubmit={handleSubmit}>
              <h1 className="questsPage_title">Selecione uma Quest</h1>
              <select
                onChange={handleChange}
                defaultValue=""
                required
                className="questsPage_select"
              >
                <option value="">Selecione...</option>
                {quests?.map((quest) => (
                  <option key={quest.id} value={quest.id}>
                    {quest.description}
                  </option>
                ))}
              </select>
              <button className="questsPage_button--accept">
                Aceitar Quest
              </button>
            </form>
          )}
          {characterFounded?.questInProgress && (
            <button
              onClick={handleFinishClick}
              className="questsPage_button--colect"
            >
              Finalizar Quest
            </button>
          )}

          {messageFinishQuest && (
            <span className="cardQuest_menssage">{messageFinishQuest}</span>
          )}

          {messageStartQuest && (
            <span className="cardQuest_menssage">{messageStartQuest}</span>
          )}
        </div>

        {selectedQuest && (
          <div className="cardQuest">
            {characterFounded?.questInProgress ? (
              <h1 className="questsPage_title">Quest em andamento:</h1>
            ) : (
              <h1 className="questsPage_title">Detalhes da quest:</h1>
            )}
            <img
              src={selectedQuest?.image}
              alt={selectedQuest?.name}
              className="cardQuest_image"
            />
            <div className="cardQuest_details">
              <p>Recompença: {selectedQuest?.money}</p>
              <p>
                Duração [s]:{" "}
                {selectedQuest ? selectedQuest?.duration / 1000 : ""}
              </p>
              <p>Experiencia: {selectedQuest?.experience}</p>
              {characterFounded?.questInProgress && (
                <p>Termina as {endDate ? endDate.toLocaleTimeString() : ""}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
