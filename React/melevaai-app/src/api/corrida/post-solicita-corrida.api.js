import { axiosInstance } from "../_base/axios.instance";

export async function postSolicitaCorrida(requestCorrida) {
  const response = await axiosInstance.post("/corridas/solicitar", requestCorrida);
  return response.data;
}