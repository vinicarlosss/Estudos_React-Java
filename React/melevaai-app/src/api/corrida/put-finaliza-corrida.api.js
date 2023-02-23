import { axiosInstance } from "../_base/axios.instance";

export async function putFinalizaCorrida(idCorrida) {
  const response = await axiosInstance.put(`/corridas/${idCorrida}/finalizar`);
  return response.data;
}