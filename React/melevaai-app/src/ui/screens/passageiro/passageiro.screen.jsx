import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePassageiroApi, useCorridaApi } from "../../../hooks/index";
import {
  Header,
  CardCorrida,
  Container,
  MenuNavegacao,
  CardSemCorridaAdamento,
} from "../../components/index";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import "./passageiro.style.css";
import { SITUACAO } from "../../../constants";

export function Passageiro() {
  const [user] = useGlobalUser();
  const { corridasPassageiro } = useCorridaApi(user?.PASSAGEIRO.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.PASSAGEIRO) navigate("/lista-passageiros");
  }, [user]);

  function renderViagensEmAndamento() {
    const corridasNaoFinalizadas = corridasPassageiro.filter(
      (corrida) => corrida.situacao !== SITUACAO.FINALIZADA
    );
    if (!corridasNaoFinalizadas.length) return <CardSemCorridaAdamento />;
    return (
      <>
        <h1>Viagens em andamento</h1>
        {corridasNaoFinalizadas.map((corrida) => (
          <Link
            to={`/corridas/${corrida.id}`}
            key={corrida.id}
            className="passageiro__div--corrida"
          >
            <CardCorrida key={corrida.id} corrida={corrida} />
          </Link>
        ))}
      </>
    );
  }

  function renderViagensFinalizadas() {
    const corridasFinalizadas = corridasPassageiro.filter(
      (corrida) => corrida.situacao === SITUACAO.FINALIZADA
    );
    if (!corridasFinalizadas.length) return (<h1>Não há corridas finalizadas.</h1>);
    return (
      <>
        <h1>Viagens anteriores</h1>
        {corridasPassageiro
          .filter((corrida) => corrida.situacao === SITUACAO.FINALIZADA)
          .map((corridaFiltrada) => (
            <Link
              to={`/corridas/${corridaFiltrada.id}`}
              key={corridaFiltrada.id}
              className="passageiro__div--corrida"
            >
              <CardCorrida key={corridaFiltrada.id} corrida={corridaFiltrada} />
            </Link>
          ))}
      </>
    );
  }

  return (
    <main className="passageiro__">
      <Header />
      <Container>
        <section>
          <MenuNavegacao />
          <div className="passageiro__div--viagens">
            {renderViagensEmAndamento()}
            {renderViagensFinalizadas()}
          </div>
        </section>
      </Container>
    </main>
  );
}
