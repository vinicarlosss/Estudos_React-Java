import { Link } from "react-router-dom"
import { useContextGlobalLanguage } from '../../../hooks/index'
import "./home.style.css"

export function Home() {
  const { language, handleLanguage } = useContextGlobalLanguage()

  return (
    <main className="home-main">
      <section className="home-section">
        <h1 className="home-header-title">
          Bem-Vindo ao COUNTER STRIKE ASSETS
        </h1>
        <footer className="navbar">
          <ul className="home-navbar-list">
            <li>
              <Link to="/">{language == 'brazilian' ? 'Início': 'Home'}</Link>
            </li>
            <li>
              <Link to="/agents">{language == 'brazilian'? 'Agentes': 'Agents'}</Link>
            </li>
            <li>
              <Link to="/skins">Skins</Link>
            </li>
            <li>
              <form>
                <select className="form-select" name="language" value={language} onChange={handleLanguage}>
                  <option className="select-option" value='brazilian' onChange={handleLanguage}>
                    PT-br
                  </option>
                  <option className="select-option" value='english' onChange={handleLanguage}>
                    EN-us
                  </option>
                </select>
              </form>
            </li>
          </ul>
        </footer>
      </section>
    </main>
  )
}
