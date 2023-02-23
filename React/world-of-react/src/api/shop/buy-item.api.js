import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useBuyItem() {
  const [messageBuyItem, setMessageBuyItem] = useState(null);

  async function buyItem(itemid, characterId) {
    try {
      await axiosInstance.post(`/shop/${itemid}/buy`, {
        characterId: characterId,
      });
      setMessageBuyItem("Item comprado com sucesso!");
    } catch (error) {
      setMessageBuyItem(error.response.data.message);
    }
  }

  return { messageBuyItem, setMessageBuyItem, buyItem };
}
