import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook.js";
import { Navbar } from "../../components/index";
import "./giveback.style.css";

export function GiveBack() {
  const [formInput, setFormInput] = useState({ movie: 0, result: "" });
  const { filmes, giveBack } = useFilmesApi();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    async function fetchMovie() {
      const response = await giveBack({ id: formInput.movie });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        result: response,
      }));
    }
    fetchMovie();
  }

  return (
    <main className="GiveBack_main">
      <Navbar />
      <form className="Giveback_form" onSubmit={handleSubmit}>
        <header>Devolução de filmes</header>
        <label>Qual filme deseja devolver:</label>
        <select name="movie" onChange={handleChange}>
          {filmes?.map((filme) => {
            return (
              <option key={filme.id} value={filme.id}>
                {filme.titulo}
              </option>
            );
          })}
        </select>
        <button>Devolver</button>
        <p className="GiveBack_requestResult">{formInput.result}</p>
      </form>
      <Link className="GiveBack_link--back" onClick={() => navigate(-1)}>
        Voltar
      </Link>
    </main>
  );
}
