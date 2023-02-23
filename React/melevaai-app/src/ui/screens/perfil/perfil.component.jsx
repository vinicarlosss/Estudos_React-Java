import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import { useMotoristaApi, usePassageiroApi } from "../../../hooks";
import { Botao, Container, Header, MenuNavegacao } from "../../components";
import "./perfil.style.css";

export function Perfil() {
  const [user] = useGlobalUser();
  const { passageiro, fetchPassageiro } = usePassageiroApi();
  const { motorista, detalharMotorista } = useMotoristaApi();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.PASSAGEIRO) {
      fetchPassageiro(user.PASSAGEIRO.id);
    } else {
      detalharMotorista(user.MOTORISTA.id);
    }
  }, [user]);
  return (
    <main className="perfil__">
      <Header />
      <Container>
        <section>
          <MenuNavegacao />
          {user?.PASSAGEIRO ? (
            <div className="perfil__info--div">
              <p>Nome: {passageiro.nome}</p>
              <p>Data de nascimento: {passageiro.data_nascimento}</p>
              <p>Status: {passageiro.situacao}</p>
              <p>Saldo: R${passageiro.saldo}</p>
              <p>Avaliação: {passageiro.avaliacao}</p>
              <Botao
                texto="Alterar perfil"
                handleClick={() => navigate("/alterarPassageiro")}
              />
            </div>
          ) : (
            <div className="perfil__info--div">
              <p>Nome: {motorista.nome}</p>
              <p>Data de nascimento: {motorista.data_nascimento}</p>
              <p>Categoria: {motorista.categoria}</p>
              <p>Número da habilitação: {motorista.numero_habilitacao}</p>
              <p>
                Data de vencimento da habilitação: {motorista.data_vencimento}
              </p>
              <p>Status: {motorista.situacao}</p>
              <p>Saldo: R${motorista.saldo}</p>
              <p>Avaliação: {motorista.avaliacao}</p>
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
