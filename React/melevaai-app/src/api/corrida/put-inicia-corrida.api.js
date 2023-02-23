import { axiosInstance } from "../_base/axios.instance";

export async function putIniciaCorrida(idCorrida) {
  const response = await axiosInstance.put(`/corridas/${idCorrida}/iniciar`);
  return response.data;
}