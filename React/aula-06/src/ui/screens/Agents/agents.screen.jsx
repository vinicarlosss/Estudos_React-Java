import "./agents.style.css"
import { Link } from "react-router-dom"
import { useAgentsApi } from "../../../hooks/index"
import { AgentItem } from "../../components/index"
import loadingImage from "../../../assets/img/loading.gif"

export function Agents() {
  const { agents, loading } = useAgentsApi()

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
    </main>
  )
}