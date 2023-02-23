import { Link } from "react-router-dom"
import "./home.style.css"

export function Home() {
  return (
    <main className="home-main">
      <section className="home-section">
        <h1 className="home-header-title">
          Bem-Vindo ao COUNTER STRIKE ASSETS
        </h1>
        <footer className="navbar">
          <ul className="home-navbar-list">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/agents">Agentes</Link>
            </li>
            <li>
              <Link to="/skins">Skins</Link>
            </li>
          </ul>
        </footer>
      </section>
    </main>
  )
}
