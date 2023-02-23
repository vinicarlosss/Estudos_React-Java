import { Link, useNavigate } from "react-router-dom";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import { BotaoSelecao } from "../botao-selecao/botao-selecao.component";
import { Container } from "../container/container.component";
import "./header.style.css";

export function Header() {
  const [user, setUser] = useGlobalUser();
  const navigate = useNavigate();

  function renderOpcoesMenu() {
    return (
      <>
        {renderUsuarioLogado()}
        {renderFazerLoginCadastro()}
      </>
    );
  }

  function renderUsuarioLogado() {
    if (!user) return;
    return (
      <>
        {renderMotorista()}
        {renderPassageiro()}
      </>
    );
  }

  function renderMotorista() {
    if (!user?.MOTORISTA?.id) return;
    return (
      <>
        <h2>{user.MOTORISTA.nome}</h2>
        <BotaoSelecao
          texto="Logout"
          estaAtivo={true}
          handleClick={() => {
            setUser(null);
            navigate("/lista-motoristas");
          }}
        />
      </>
    );
  }

  function renderPassageiro() {
    if (!user?.PASSAGEIRO?.id) return;
    return (
      <>
        <h2>{user.PASSAGEIRO.nome}</h2>
        <BotaoSelecao
          texto="Logout"
          estaAtivo={true}
          handleClick={() => {
            setUser(null);
            navigate("/lista-passageiros");
          }}
        />
      </>
    );
  }

  function renderFazerLoginCadastro() {
    if (user) return;
    return (
      <>
        <Link to="/">
          <BotaoSelecao texto="Início" estaAtivo={true} />
        </Link>
        <Link to="/cadastro">
          <BotaoSelecao texto="Cadastre-se" />
        </Link>
      </>
    );
  }

  return (
    <header className="header__">
      <Container align="center">
        <h1>MeLevaAí</h1>
        <div className="header__div">{renderOpcoesMenu()}</div>
      </Container>
    </header>
  );
}
