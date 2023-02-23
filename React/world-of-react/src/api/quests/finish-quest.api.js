import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useFinishQuest() {
  const [messageFinishQuest, setMessageFinishQuest] = useState("");
  const [successFinish, setSuccessFinish] = useState(false);

  async function finishQuest(characterId) {
    try {
      await axiosInstance.post(`/quests/finish`, {
        characterId: characterId,
      });
      setSuccessFinish(true);
      setMessageFinishQuest("Quest finalizada com sucesso!");
    } catch (error) {
      setMessageFinishQuest(error.response.data.message);
      setSuccessFinish(false);
    }
  }

  return {
    messageFinishQuest,
    successFinish,
    setMessageFinishQuest,
    finishQuest,
  };
}
