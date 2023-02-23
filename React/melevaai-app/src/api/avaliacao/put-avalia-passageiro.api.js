import { axiosInstance } from "../_base/axios.instance";

export async function putAvaliaPassageiro(idPassageiro, avaliacao) {
  const bodyRequest = { nota: avaliacao }
  const response = await axiosInstance.put(`/avaliacoes/passageiro/${idPassageiro}`, bodyRequest);
  return response.data;
}