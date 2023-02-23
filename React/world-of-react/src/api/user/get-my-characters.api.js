import { axiosInstance } from "../_base/axios-instance";

export async function getMyCharacter() {
  const response = await axiosInstance.get("/user/me/characters");
  return response.data;
}
