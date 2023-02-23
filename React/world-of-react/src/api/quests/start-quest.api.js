import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useStartQuest() {
  const [messageStartQuest, setMessageStartQuest] = useState("");

  async function startQuest(characterId, questId) {
    try {
      await axiosInstance.post(`/quests/${questId}/start`, {
        characterId: characterId,
      });
      setMessageStartQuest("Quest iniciada com sucesso!");
    } catch (error) {
      setMessageStartQuest(error.response.data.message);
    }
  }

  return { messageStartQuest, setMessageStartQuest, startQuest };
}
