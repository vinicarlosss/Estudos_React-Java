import "./botao.style.css";

export function Botao({ texto, handleClick }) {
  return (
    <button className="botao__" onClick={handleClick}>
      {texto}
    </button>
  );
}
