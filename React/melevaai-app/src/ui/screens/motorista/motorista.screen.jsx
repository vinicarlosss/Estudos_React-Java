import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SITUACAO } from "../../../constants";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import { useBuscaCorridasMotorista } from "../../../hooks";
import {
  CardCorrida,
  CardSemCorridaAdamento,
  Container,
  Header,
  MenuNavegacao,
} from "../../components";
import "./motorista.style.css";

export function Motorista() {
  const [user, setUser] = useGlobalUser();
  const { corridasMotorista, carregando, erro } = useBuscaCorridasMotorista(
    user?.MOTORISTA?.id
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.MOTORISTA) navigate("/lista-motoristas");
  }, [user]);

  function renderViagemAtual() {
    const corridasNaoFinalizadas = corridasMotorista.filter(
      (corrida) => corrida.situacao !== SITUACAO.FINALIZADA
    );
    if (!corridasNaoFinalizadas.length) return <CardSemCorridaAdamento />;

    return (
      <>
        <h1>Corrida em andamento</h1>
        {corridasNaoFinalizadas.map((corrida) => (
          <Link
            to={`/corridas/${corrida.id}`}
            key={corrida.id}
            className="motoristas__div--motorista"
          >
            <CardCorrida corrida={corrida} key={corrida.id} />
          </Link>
        ))}
      </>
    );
  }

  function renderViagensAnteriores() {
    const corridasFinalizadas = corridasMotorista.filter(
      (corrida) => corrida.situacao === SITUACAO.FINALIZADA
    );
    if (!corridasFinalizadas.length)
      return <h1>Não há viagens finalizadas.</h1>;
    return (
      <>
        <h1>Viagens anteriores</h1>
        <div className="motoristas__div">
          {corridasFinalizadas.map((corrida) => (
            <Link
              to={`/corridas/${corrida.id}`}
              key={corrida.id}
              className="motoristas__div--motorista"
            >
              <CardCorrida corrida={corrida} key={corrida.id} />
            </Link>
          ))}
        </div>
      </>
    );
  }

  return (
    <section className="motorista__">
      <Header />
      <Container>
        <MenuNavegacao />
        <div className="motorista__corridas">
          {renderViagemAtual()}
          {renderViagensAnteriores()}
        </div>
      </Container>
    </section>
  );
}