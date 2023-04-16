import { axiosInstance } from '../_base/axiosInstance';

export async function getServices({ categoria, page, order }) {
  const response = await axiosInstance.get(
    `/servico/listar?categoria=${categoria}&size=6&page=${page}&sort=${order},desc`
  );
  return response.data;
}
