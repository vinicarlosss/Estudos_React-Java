import "./botao-selecao.style.css";

export function BotaoSelecao({ estaAtivo, texto, handleClick }) {
  return (
    <button type="button"
      className={`botao-selecao__${estaAtivo ? "ativo" : "inativo"}`}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
}
