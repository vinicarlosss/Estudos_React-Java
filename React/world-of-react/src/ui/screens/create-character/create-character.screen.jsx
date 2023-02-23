import "./create-character.style.css";
import { useState, useEffect } from "react";
import { getRaces, useActualUser } from "../../../api";
import { createCharacter } from "../../../api/user/create-character.api";

import { FactionOption } from "../../components";
import { Header } from "../../components/header/header.component";

const OPTIONS_OF_FACTION = ["Alianca", "Horda"];

export function CreateCharacter() {
  const [formInput, setFormInput] = useState({
    name: "",
    faction: "",
    race: "",
    requestResult: "",
  });
  const [races, setRaces] = useState();

  const { actualUser, fetchActualUser } = useActualUser();
  const expansions = actualUser?.expansions;
  async function handleSubmit(event) {
    event.preventDefault();
    let successElement = document.getElementsByClassName(
      "create-character_form--success"
    );
    let errorElement = document.getElementsByClassName(
      "create-character_form--error"
    );
    try {
      const response = await createCharacter({
        name: formInput.name,
        raceId: Number(formInput.race),
        faction: formInput.faction,
      });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: "Personagem criado com sucesso!",
      }));
    } catch (error) {
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: error.response.data.message,
      }));
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }

  function renderOption() {
    return races?.map((race) => {
      if (!expansions?.includes(race.expansionId) && race.expansionId) return;
      return (
        <option
          key={race.id}
          value={race.id}
          className="create-character_select--option"
        >
          {`${race.type} - ${race.name}`}
        </option>
      );
    });
  }

  useEffect(() => {
    async function handleRaces() {
      setRaces(await getRaces());
    }
    handleRaces();
    fetchActualUser();
  }, []);

  return (
    <>
      <main className="create-character">
        <Header screen="ToHome" />
        <header className="create-character_header"></header>
        <section className="form_container">
          <h1 className="form_container_title">Criar Personagem:</h1>
          <form className="create-character_form" onSubmit={handleSubmit}>
            <div className="character_info">
              <label className="create-character_form--label">Nome: </label>
              <input
                className="create-character_input"
                type="text"
                onChange={handleChange}
                name="name"
              />
            </div>

            <div className="character_info">
              <label className="create-character_form--label">Facção: </label>
              <div className="create-character-form_factio-option">
                {OPTIONS_OF_FACTION.map((option) => (
                  <FactionOption
                    faction={option}
                    handleChange={handleChange}
                    selected={formInput.faction}
                  />
                ))}
              </div>
            </div>

            <div className="character_info">
              <label className="create-character_form--label">Raça: </label>
              <select
                className="create-character_input"
                name="race"
                onChange={handleChange}
              >
                {renderOption()}
              </select>
            </div>
            <div className="create-character_button--container">
              {formInput.requestResult != "" ? (
                <p className="create-character_form--error">
                  {formInput.requestResult}
                </p>
              ) : null}
              <button className="create-character_form--button">Criar</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
