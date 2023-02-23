import "./filmecard.style.css";
import noImage from "../../../assets/img/no-image.png";
import { useFilmesApi } from "../../../hooks/useFilmesApi/usefilmesapi.hook";

export function FilmeCard({ filme }) {
  return (
    <div className="filmecard_container">
      <img
        className="filmecard_image"
        src={filme.imagem ? filme.imagem : noImage}
      />
      <h2 className="filmecard_title">{filme.titulo}</h2>
      {filme.disponivel == true ? (
        <span className="filmecard_available">Disponível para aluguel</span>
      ) : (
        <span className="filmecard_available">Indisponível no momento</span>
      )}
    </div>
  );
}
