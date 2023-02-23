import { useState, useEffect } from "react"
import { useContextGlobalLanguage } from "../index"
import axios from "axios"

export function useSkinsApi() {
  const [skins, setSkins] = useState([])
  const [loading, setLoading] = useState(true)
  const { language } = useContextGlobalLanguage()

  async function fetchSkins() {
    setLoading(true)
    const URL = `https://bymykel.github.io/CSGO-API/api/${language}/skins.json`
    const response = await axios.get(URL)
    setLoading(false)
    setSkins(response.data)
  }

  function getSkinById(id) {
    return skins.find((skin) => skin.id === id)
  }

  useEffect(() => {
    fetchSkins()
  }, [])

  return {
    skins,
    fetchSkins,
    loading,
    getSkinById,
  };
}
