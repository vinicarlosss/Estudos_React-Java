import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook";
import { Navbar } from "../../components/index";
import Noimage from "../../../assets/img/no-image.png";
import "./moviedetails.style.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const { details, deleteMovie } = useFilmesApi();
  const [movie, setMovie] = useState();
  const [requestResult, setRequestResult] = useState("");
  const navigate = useNavigate();

  function checaSituacao(situacao) {
    switch (situacao) {
      case "EM_DIA":
        return "Em dia";
      case "EM_ATRASO":
        return "Em atraso";
      default:
        return null;
    }
  }

  function handleSubmit() {
    async function fetchMovie() {
      const response = await deleteMovie(movieId);
      setRequestResult(response);
    }
    fetchMovie();
  }

  useEffect(() => {
    async function fetchMovie() {
      setMovie(await details({ id: movieId }));
    }
    fetchMovie();
  }, []);
  return (
    <main className="MovieDetails_main">
      <Navbar />
      <section className="MovieDetails_info">
        <h2 className="MovieDetails_title">{movie?.titulo}</h2>
        <h3>Categoria {movie?.categoria}</h3>
        <img
          className="MovieDetails_image"
          src={movie?.imagem ? movie.imagem : Noimage}
        ></img>
        <span>
          {movie?.disponivel
            ? "Filme disponível"
            : "Infelizmente este filme não está disponível no momento"}
        </span>
        {movie?.disponivel ? null : (
          <span>{`Responsável pelo filme: ${movie?.responsavel}`}</span>
        )}
        {movie?.disponivel ? null : (
          <span>{`Data de retirada: ${movie?.dataRetirada}`}</span>
        )}
        {movie?.disponivel ? null : (
          <span>{`Data da entrega: ${movie?.dataEntrega}`}</span>
        )}
        {movie?.disponivel ? null : (
          <span>{`Situação: ${checaSituacao(movie?.situacao)}`}</span>
        )}
        <p className="MovieDetails_description">{movie?.descricao}</p>
        <p className="MovieDetails_requestResult">{requestResult}</p>
        <div className="MovieDetails_buttons">
          <Link className="MovieDetails_footer--button" onClick={handleSubmit}>
            Remover da lista
          </Link>
          <Link
            className="MovieDetails_footer--button"
            onClick={() => navigate(-1)}
          >
            Voltar
          </Link>
          <Link
            className="MovieDetails_footer--button"
            to={`/alterar/${movieId}`}
          >
            Alterar filme
          </Link>
        </div>
      </section>
    </main>
  );
}
