import { axiosInstance } from "../_base/axios-instance";
import { useState } from "react";

export function useActualUser() {
  const [actualUser, setActualUser] = useState(null);

  async function fetchActualUser() {
    try {
      const response = await axiosInstance.get(`/user/me`);
      setActualUser(response.data);
    } catch (error) {}
  }
  return { actualUser, fetchActualUser };
}
