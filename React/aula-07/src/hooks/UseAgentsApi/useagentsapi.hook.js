import { useState, useEffect } from "react"
import { useContextGlobalLanguage } from '../index'
import axios from "axios"

export function useAgentsApi() {
  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const { language } = useContextGlobalLanguage()


  async function fetchAgents() {
    setLoading(true)
    const URL = `https://bymykel.github.io/CSGO-API/api/${language}/agents.json`
    const response = await axios.get(URL)
    setLoading(false)
    setAgents(response.data)
  }

  function getAgentById(id) {
    return agents.find((agent) => agent.id === id)
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  return {
    agents,
    fetchAgents,
    loading,
    getAgentById,
  }
}
