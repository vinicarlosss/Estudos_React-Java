import { axiosInstance } from "../_base/axios.instance";

export async function criaPassageiro(passageiro) {
  const response = await axiosInstance.post("/passageiros", passageiro);
  return response.data;
}