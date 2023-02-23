import "./navbar.style.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="Navbar_header">
      <h1 className="Navbar_header--title">Oldflix</h1>
      <nav className="Navbar_navlink">
        <ul className="Navbar_navlink--list">
          <li className="Navbar_navlink--item">
            <Link className="Navbar_navlink--link" to="/">
              Início
            </Link>
          </li>
          <li className="Navbar_navlink--item">
            <Link className="Navbar_navlink--link" to="/register">
              Cadastrar filme
            </Link>
          </li>
          <li className="Navbar_navlink--item">
            <Link className="Navbar_navlink--link" to="/rent">
              Alugar filme
            </Link>
          </li>
          <li className="Navbar_navlink--item">
            <Link className="Navbar_navlink--link" to="/giveback">
              Devolver filme
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
