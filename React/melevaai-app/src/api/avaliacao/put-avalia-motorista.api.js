import { axiosInstance } from "../_base/axios.instance";

export async function putAvaliaMotorista(idMotorista, avaliacao) {
  const bodyRequest = { nota: avaliacao }
  const response = await axiosInstance.put(`/avaliacoes/motorista/${idMotorista}`, bodyRequest);
  return response.data;
}