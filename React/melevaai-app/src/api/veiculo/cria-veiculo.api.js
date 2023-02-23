import { axiosInstance } from "../_base/axios.instance";

export async function postVeiculo(veiculo) {
  const response = await axiosInstance.post("/veiculos", veiculo);
  return response.data;
}