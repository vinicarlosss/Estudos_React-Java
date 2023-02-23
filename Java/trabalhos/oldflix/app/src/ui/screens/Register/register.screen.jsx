import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook";
import { Navbar } from "../../../ui/components/index";
import "./register.style.css";

export function Register() {
  const [formInput, setFormInput] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    imagem: "",
    result: "",
  });
  const { register } = useFilmesApi();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({ ...oldFormInput, [name]: value }));
  }

  function handleSubmit(event) {
    const NUMEROS_CARACTERES_ERRO_CATEGORIA = 50;
    event.preventDefault();
    async function fetchMovie() {
      const response = await register({
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
    <main className="Register_main">
      <Navbar />
      <form className="Register_form" onSubmit={handleSubmit}>
        <header>
          <h1>Cadastro de novo filme</h1>
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
        <button>Cadastrar</button>
        <p className="Register_requestResult">{formInput.result}</p>
      </form>
      <Link className="Register_link--back" onClick={() => navigate(-1)}>
        Voltar
      </Link>
    </main>
  );
}
