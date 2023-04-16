import { axiosInstance } from '../_base/axiosInstance';

export async function getUserServices({ page, categoria }) {
  const response = await axiosInstance.get(
    `/servico/listar/me?categoria=${categoria}&size=6&page=${page}`
  );
  return response.data;
}
