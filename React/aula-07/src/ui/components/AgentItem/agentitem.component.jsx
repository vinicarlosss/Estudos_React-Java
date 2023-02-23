import "./agentitem.style.css"
import { Link } from "react-router-dom"

export function AgentItem({ agent }) {
  return (
    <Link className="agent-container" to={`/agent/${agent.id}`}>
      <img src={agent.image} className="agent-img" alt="Agent image"></img>
      <p className="agent-name">{agent.name}</p>
    </Link>
  )
}