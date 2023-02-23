import { axiosInstance } from "../_base/axios-instance";

export async function getRaces() {
  const response = await axiosInstance.get("/races");
  return response.data;
}
