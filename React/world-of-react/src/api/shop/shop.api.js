import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useShop() {
  const [shop, setShop] = useState(null);

  async function fechtShop() {
    try {
      const response = await axiosInstance.get("/shop");
      setShop(response.data);
    } catch (error) {}
  }

  return { shop, fechtShop };
}
