import { USER_KEY } from "../../../constants";
import { useNavigate } from "react-router-dom";
import "./header.style.css";
import { Cheats } from "../cheats/cheats.component";
import useGlobalUser from "../../../context/user.context";

export function Header({ screen, characterID, cheatFunction }) {
  const navigate = useNavigate();
  const [user, setUser] = useGlobalUser();

  function handleBack() {
    navigate("/characterPage");
  }
  function handleLogout() {
    navigate("/home");
  }

  function handleLogoutGame() {
    localStorage.removeItem(USER_KEY);
    setUser(null);
    navigate("/");
  }

  if (screen === "ToCharacter") {
    return (
      <header className="home_header-component">
        <a className="home_header--logout-component" onClick={handleBack}>
          Voltar
        </a>
        <Cheats characterID={characterID} cheatFunction={cheatFunction} />
      </header>
    );
  }
  if (screen === "ToHome") {
    return (
      <header className="home_header-component">
        <a className="home_header--logout-component" onClick={handleLogout}>
          Sair
        </a>
        <Cheats characterID={characterID} cheatFunction={cheatFunction} />
      </header>
    );
  }
  if (screen === "ToLogin") {
    return (
      <header className="home_header-component">
        <a className="home_header--logout-component" onClick={handleLogoutGame}>
          Logout
        </a>
        <Cheats characterID={characterID} cheatFunction={cheatFunction} />
      </header>
    );
  }
}
