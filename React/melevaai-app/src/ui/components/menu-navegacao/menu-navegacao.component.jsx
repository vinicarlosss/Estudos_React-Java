import { Link, useLocation } from "react-router-dom";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import "./menu-navegacao.style.css";

export function MenuNavegacao() {
  const location = useLocation();
  const [user, ] = useGlobalUser();
  const paginaAtual = location.pathname;

  const ehPerfil = paginaAtual.match("perfil");
  const ehViajar = paginaAtual.match("viajar");
  const ehCarteira = paginaAtual.match("carteira");
  const ehViagens = !ehPerfil && !ehViajar && !ehCarteira;

  const nomeDestino = user?.PASSAGEIRO ? "passageiro" : "motorista";

  return (
    <nav className="menu-navegacao__">
      {user?.PASSAGEIRO ? (
        <Link
          to={`/passageiro/viajar`}
          className={`menu-navegacao__link ${
            ehViajar ? "selecionado" : "nao-selecionado"
          }`}
        >
          Viajar agora
        </Link>
      ) : null}
      <Link
        to={`/${nomeDestino}/`}
        className={`menu-navegacao__link ${
          ehViagens ? "selecionado" : "nao-selecionado"
        }`}
      >
        Minhas viagens
      </Link>
      <Link
        to={`/${nomeDestino}/carteira`}
        className={`menu-navegacao__link ${
          ehCarteira ? "selecionado" : "nao-selecionado"
        }`}
      >
        Carteira
      </Link>
      <Link
        to={`/${nomeDestino}/perfil`}
        className={`menu-navegacao__link ${
          ehPerfil ? "selecionado" : "nao-selecionado"
        }`}
      >
        Perfil
      </Link>
    </nav>
  );
}
