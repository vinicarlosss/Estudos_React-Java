import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useQuestById() {
  const [selectedQuest, setSelectedQuest] = useState(null);

  async function fechtSelectedQuest(questId) {
    try {
      const response = await axiosInstance.get(`/quests/${questId}`);
      setSelectedQuest(response.data);
    } catch (error) {}
  }

  return { selectedQuest, setSelectedQuest, fechtSelectedQuest };
}
