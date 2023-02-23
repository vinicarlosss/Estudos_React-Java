import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook";
import { Navbar } from "../../components/index";
import "./change.style.css";

export function Change() {
  const { movieId } = useParams();
  const { changeMovie } = useFilmesApi();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    imagem: "",
    result: "",
  });

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
      const NUMEROS_CARACTERES_ERRO_CATEGORIA = 50;
      const response = await changeMovie({
        id: movieId,
        titulo: formInput.titulo,
        descricao: formInput.descricao,
        categoria: formInput.categoria,
        imagem: formInput.imagem,
      });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        result:
          response.length > NUMEROS_CARACTERES_ERRO_CATEGORIA
            ? "Categoria inválida"
            : response,
      }));
    }
    fetchMovie();
  }

  return (
    <main className="Change_main">
      <Navbar />
      <form className="Change_form" onSubmit={handleSubmit}>
        <header className="Change_form--header">
          <h1>Alteração de filme</h1>
        </header>
        <label>Título:</label>
        <input
          name="titulo"
          type="text"
          placeholder="Digite aqui o título do filme"
          onChange={handleChange}
        />
        <label>Descrição</label>
        <input
          name="descricao"
          type="text"
          placeholder="Digite aqui a descrição do filme do filme"
          onChange={handleChange}
        />
        <label>Categoria</label>
        <input
          name="categoria"
          type="text"
          placeholder="Digite aqui a categoria do filme"
          onChange={handleChange}
        />
        <label>Imagem</label>
        <input
          name="imagem"
          type="text"
          placeholder="Digite aqui o link de uma imagem para este filme"
          onChange={handleChange}
        />
        <button>Enviar</button>
        <p className="Change_requestResult">{formInput.result}</p>
      </form>
      <Link className="Change_link--back" onClick={() => navigate(-1)}>
        Voltar
      </Link>
    </main>
  );
}
