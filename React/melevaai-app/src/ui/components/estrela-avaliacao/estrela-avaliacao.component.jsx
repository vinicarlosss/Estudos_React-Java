import "./estrela-avaliacao.style.css";

export function EstrelaAvaliacao({ avaliacao, idCorrida, handleClickAvaliar }) {
  const estaAvaliado = avaliacao;
  const estrela1 = avaliacao >= 1;
  const estrela2 = avaliacao >= 2;
  const estrela3 = avaliacao >= 3;
  const estrela4 = avaliacao >= 4;
  const estrela5 = avaliacao === 5;

  const estrelaVazia = <>&#9734;</>;
  const estrelaCheia = <>&#9733;</>;
  return (
    <div
      className={`estrela-avaliacao__ ${
        estaAvaliado ? "estrela-avaliacao__amarela" : "estrela-avaliacao__cinza"
      }`}
    >
      <button onClick={estaAvaliado ? null : () => handleClickAvaliar(idCorrida, 1)}>
        {estrela1 ? estrelaCheia : estrelaVazia}
      </button>
      <button onClick={estaAvaliado ? null : () => handleClickAvaliar(idCorrida, 2)}>
        {estrela2 ? estrelaCheia : estrelaVazia}
      </button>
      <button onClick={estaAvaliado ? null : () => handleClickAvaliar(idCorrida, 3)}>
        {estrela3 ? estrelaCheia : estrelaVazia}
      </button>
      <button onClick={estaAvaliado ? null : () => handleClickAvaliar(idCorrida, 4)}>
        {estrela4 ? estrelaCheia : estrelaVazia}
      </button>
      <button onClick={estaAvaliado ? null : () => handleClickAvaliar(idCorrida, 5)}>
        {estrela5 ? estrelaCheia : estrelaVazia}
      </button>
    </div>
  );
}
