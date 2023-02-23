import { Link } from "react-router-dom";
import { SITUACAO } from "../../../constants";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import "./card-corrida.style.css";

export function CardCorrida({ corrida }) {
  const [user] = useGlobalUser();

  function renderDadosAvaliacao() {
    if (corrida.situacao !== SITUACAO.FINALIZADA) return;
    if (user?.PASSAGEIRO)
      return (
        <>
          {corrida.avaliacaoMotorista ? (
            <span>Motorista já avaliado</span>
          ) : (
            <span>Avalie o motorista</span>
          )}
        </>
      );
    if (user?.MOTORISTA)
      return (
        <>
          {corrida.avaliacaoPassageiro ? (
            <span>Passageiro já avaliado</span>
          ) : (
            <span>Avalie o passageiro</span>
          )}
        </>
      );
  }

  return (
    <section
      className={`${
        corrida.situacao !== SITUACAO.FINALIZADA
          ? "card-corrida__ativa"
          : "card-corrida__"
      }`}
    >
      <main className="card-corrida__main">
        <header className="card-corrida__header">
          <span>{corrida.modeloVeiculo}</span>
          {corrida.dataInicial ? (
            <span>
              Data inicial: {new Date(corrida.dataInicial).toLocaleString()}
            </span>
          ) : null}
          {corrida.dataFinal ? (
            <span>
              Data final: {new Date(corrida.dataFinal).toLocaleString()}
            </span>
          ) : null}
        </header>
        <div className="card-corrida__endereco">
          <span>
            Destino: {corrida.pontoFinalX},{corrida.pontoFinalY}
          </span>
        </div>
        <div className="card-corrida__caminho">
          <div className="card-corrida__icons">
            <div className="card-corrida__icons--circulo"></div>
            <div className="card-corrida__icons--linha"></div>
            <div className="card-corrida__icons--quadrado"></div>
          </div>
          <div className="card-corrida_caminho--info">
            <span>
              Partida: {corrida.pontoInicialX},{corrida.pontoInicialY}
            </span>
            <span>
              Destino: {corrida.pontoFinalX},{corrida.pontoFinalY}
            </span>
          </div>
        </div>
        <footer className="card-corrida__footer">
          <span>R$: {corrida.valor}</span>
          <span>{renderDadosAvaliacao()}</span>
        </footer>
      </main>
    </section>
  );
}
