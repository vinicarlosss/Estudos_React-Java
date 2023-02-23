import { axiosInstance } from "../_base/axios-instance";

export async function getAllCharacters() {
  const response = await axiosInstance.get("/characters");
  return response.data;
}
