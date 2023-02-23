import { useState, useEffect } from "react";
import { axiosInstance } from "../_base/axios-instance";

export function useCharacter() {
  const [characterList, setCharacter] = useState({});
  useEffect(() => {
    async function getCharacter() {
      const response = await axiosInstance.get("/user/me/characters");

      if (response?.data) {
        setCharacter(response.data);
      }
    }

    getCharacter();
  }, []);

  return { characterList, setCharacter };
}

export function useCharacterById() {
  const [characterFounded, setCharacter] = useState(null);

  async function fetchCharacterById(characterId) {
    try {
      const personagem = await axiosInstance.get(
        `/user/me/characters/${characterId}`
      );
      setCharacter(personagem.data);
    } catch (error) {}
  }

  return { characterFounded, fetchCharacterById };
}
