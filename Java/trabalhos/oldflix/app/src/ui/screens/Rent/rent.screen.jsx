import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook";
import { useState } from "react";
import "./rent.style.css";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/index";

export function Rent() {
  const [formInput, setFormInput] = useState({
    name: "",
    movie: 0,
    result: "",
  });
  const { filmes, rent } = useFilmesApi();
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
      const response = await rent({
        id: formInput.movie,
        responsavel: formInput.name,
      });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        result: response,
      }));
    }
    fetchMovie();
  }

  return (
    <main className="Rent_main">
      <Navbar />
      <form className="Rent_form" onSubmit={handleSubmit}>
        <header>
          <h1>Aluguel de filmes</h1>
        </header>
        <label>Seu nome:</label>
        <input name="name" type="text" onChange={handleChange}></input>
        <label>Escolha o filme que deseja alugar:</label>
        <select name="movie" onChange={handleChange}>
          {filmes?.map((filme) => {
            return (
              <option key={filme.id} value={filme.id}>
                {filme.titulo}
              </option>
            );
          })}
        </select>
        <button>Alugar</button>
        <p className="Rent_requestResult">{formInput.result}</p>
      </form>
      <Link className="Rent_link--back" onClick={() => navigate(-1)}>
        Voltar
      </Link>
    </main>
  );
}
