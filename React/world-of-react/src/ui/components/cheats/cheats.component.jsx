import { useState } from "react";
import { apllyCheat } from "../../../api/cheats/cheats.api";
import icon from "../../../assets/icons/icone.png";
import "./cheats.style.css";

export function Cheats({ characterID, cheatFunction }) {
  const [formInput, setFormInput] = useState({ code: "", requestResult: "" });
  const [hidden, setHidden] = useState(true);

  function handleChange(event) {
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      code: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await apllyCheat({
        code: formInput.code,
        characterId: characterID,
      });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        code: "",
      }));
      setHidden(true);
      cheatFunction(true);
    } catch (error) {
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: error.response?.data.message,
      }));
    }
  }

  function handleChangeButton() {
    setHidden(false);
  }

  return (
    <>
      {hidden ? (
        <button className="cheats_button" onClick={handleChangeButton}>
          <img className="cheats_img" src={icon} />
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}></input>
          <button>Aplicar</button>
          <p className="cheats_requestResult">{formInput.requestResult}</p>
        </form>
      )}
    </>
  );
}
