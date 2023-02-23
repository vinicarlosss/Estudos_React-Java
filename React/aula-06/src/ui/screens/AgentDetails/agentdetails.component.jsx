import "./agentdetails.style.css"
import { useAgentsApi } from "../../../hooks/index"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function AgentDetails() {
  const [agent, setAgent] = useState()
  const { agents, getAgentById } = useAgentsApi()
  const { agentId } = useParams()
  const navigate = useNavigate()

  function onClickGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    const selectedAgent = getAgentById(agentId)
    setAgent(selectedAgent)
  }, [agents, getAgentById, agentId])

  return agent?.id ? (
    <main className="agentdetail-main-container">
      <header className="agentdetail-header">
        <h1 className="agentdetail-title">{agent.name}</h1>
      </header>
      <section className="agentdetail-content">
        <img
          className="agentdetail-image"
          src={agent.image}
          alt="agent image"
        />
        <p className="agentedetail-description">{agent.description}</p>
        <button onClick={onClickGoBack} className="agentdetail-back-button">
          Voltar
        </button>
      </section>
    </main>
  ) : null
}