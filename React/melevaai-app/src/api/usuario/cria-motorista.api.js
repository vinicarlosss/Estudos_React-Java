import { axiosInstance } from "../_base/axios.instance";

export async function criaMotorista(motorista) {
  const response = await axiosInstance.post("/motoristas", motorista);
  return response.data;
}