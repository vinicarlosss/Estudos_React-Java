import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useItemById() {
  const [selectedItemToBuy, setSelectedItem] = useState(null);

  async function fechtSelectedItemToBuy(itemId) {
    try {
      const response = await axiosInstance.get(`/shop/${itemId}`);
      setSelectedItem(response.data);
    } catch (error) {}
  }

  return { selectedItemToBuy, setSelectedItem, fechtSelectedItemToBuy };
}
