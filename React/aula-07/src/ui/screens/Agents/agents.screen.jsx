import "./agents.style.css"
import { Link } from "react-router-dom"
import { useAgentsApi } from "../../../hooks/index"
import { AgentItem } from "../../components/index"
import { useContextGlobalLanguage } from '../../../hooks/index'
import loadingImage from "../../../assets/img/loading.gif"
import { useEffect } from "react"

export function Agents() {
  const { agents, loading, fetchAgents } = useAgentsApi()
  const { language, handleLanguage } = useContextGlobalLanguage()

  useEffect(() => {
    fetchAgents()
  }, [language])
  return (
    <main className="agents-main">
      {loading ? (
        <img src={loadingImage} />
      ) : (
        <section className="agents-container">
          {agents.map((agent, index) => {
            return <AgentItem key={index} agent={agent} />
          })}
        </section>
      )}
      <footer className="footer-agents-navbar">
        <ul className="footer-navbar-list">
          <li>
            <Link to="/">{language == 'brazilian' ? 'Início' : 'Home'}</Link>
          </li>
          <li>
            <Link to="/agents">{language == 'brazilian' ? 'Agentes' : 'Agents'}</Link>
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
    </main>
  )
}