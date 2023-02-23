import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SITUACAO } from "../../../constants";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import {
  useAcoesCorrida,
  useAvaliaUsuario,
  useDetalharCorrida,
} from "../../../hooks";
import {
  Botao,
  CardCorrida,
  Container,
  EstrelaAvaliacao,
  Header,
  MenuNavegacao,
} from "../../components";
import "./corrida.style.css";

export function Corrida() {
  const [user] = useGlobalUser();
  const { idCorrida } = useParams();
  const { detalhesCorrida, buscaDetalhesCorridas } =
    useDetalharCorrida(idCorrida);
  const { avaliaMotorista, avaliaPassageiro } = useAvaliaUsuario(
    buscaDetalhesCorridas
  );
  const navigate = useNavigate();
  const { retornoCorrida, setRetornoCorrida, iniciaCorrida, finalizaCorrida } =
    useAcoesCorrida(idCorrida);

  const motoristaLogado = user?.MOTORISTA;

  useEffect(() => {
    if (!user?.MOTORISTA && !user?.PASSAGEIRO) navigate("/");
    buscaDetalhesCorridas();
  }, [user, retornoCorrida]);

  if (!detalhesCorrida) return;

  function renderAvaliacao() {
    if (detalhesCorrida.situacao !== SITUACAO.FINALIZADA) return;
    return (
      <EstrelaAvaliacao
        avaliacao={
          motoristaLogado
            ? detalhesCorrida.avaliacaoPassageiro
            : detalhesCorrida.avaliacaoMotorista
        }
        idCorrida={detalhesCorrida.id}
        handleClickAvaliar={
          motoristaLogado ? avaliaPassageiro : avaliaMotorista
        }
      />
    );
  }

  function renderDadosInicio() {
    if (!retornoCorrida?.tempoEstimado) return;
    const horas = parseInt(retornoCorrida?.tempoEstimado / 3600);
    const minutos = parseInt(
      (retornoCorrida?.tempoEstimado - horas * 3600) / 60
    );
    const segundos = parseInt(
      retornoCorrida?.tempoEstimado - horas * 3600 - minutos * 60
    );
    return (
      <div className="corrida_div--infos-inicio">
        <span>{`Tempo estimado: ${horas ? horas + " horas, " : null}${
          minutos ? minutos + " minutos, " : null
        }${segundos ? segundos + " segundos" : null}.`}</span>
        <span>
          Valor estimado: R$ {retornoCorrida?.valorEstimado.toLocaleString()}
        </span>
      </div>
    );
  }

  function renderDadosFinalizacao() {
    if (!retornoCorrida?.valorCobrado) return;
    return (
      <div className="corrida_div--infos-inicio">
        <span>
          Valor cobrado: R$ {retornoCorrida?.valorCobrado.toLocaleString()}
        </span>
      </div>
    );
  }

  function renderBotaoIniciar() {
    if (!user?.MOTORISTA) return;
    if (detalhesCorrida.situacao !== SITUACAO.SOLICITADA) return;
    return <Botao texto="Iniciar corrida" handleClick={iniciaCorrida} />;
  }

  function renderBotaoFinalizar() {
    if (!user?.MOTORISTA) return;
    if (detalhesCorrida.situacao !== SITUACAO.INICIADA) return;
    return (
      <>
        <Botao texto="Finalizar corrida" handleClick={finalizaCorrida} />
      </>
    );
  }

  return (
    <section className="corrida__">
      <Header />
      <Container>
        <MenuNavegacao />
        <main>
          <div className="corrida__div--titulo">
            <h1>Corrida atual: {detalhesCorrida.id}</h1>
            <h2>{detalhesCorrida.situacao}</h2>
          </div>
          <CardCorrida corrida={detalhesCorrida} />
          {renderAvaliacao()}
          {renderDadosInicio()}
          {renderDadosFinalizacao()}
          <div className="corrida__div--botoes">
            {renderBotaoIniciar()}
            {renderBotaoFinalizar()}
          </div>
        </main>
      </Container>
    </section>
  );
}
