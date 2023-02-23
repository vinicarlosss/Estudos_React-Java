import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useQuests() {
  const [quests, setQuests] = useState(null);

  async function fetchQuests() {
    try {
      const response = await axiosInstance("/quests");
      setQuests(response.data);
    } catch (error) {}
  }

  return { quests, fetchQuests };
}
