import { useState, useEffect } from "react"
import axios from "axios"

export function useGetMagicCards() {
  const [picture, setPicture] = useState([])
  const [loading, setLoading] = useState(true)

  async function getMagicCards(page = 0) {
    setLoading(true)
    const URL = `https://api.magicthegathering.io/v1/cards?pageSize=10&page=${page}`
    const response = await axios.get(URL)
    setLoading(false)
    setPicture(response.data.cards)
  }

  useEffect(() => {
    getMagicCards()
  }, []);

  return { picture, loading, getMagicCards }
}
