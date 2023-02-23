import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useSellItem() {
  const [messageSellItem, setMessageSellItem] = useState(null);

  async function sellItem(itemId, characterId) {
    try {
      await axiosInstance.post(`/shop/${itemId}/sell`, {
        characterId: characterId,
      });
      setMessageSellItem("Item vendido com sucesso!");
    } catch (error) {
      setMessageSellItem(error.response.data.message);
    }
  }

  return { messageSellItem, setMessageSellItem, sellItem };
}
