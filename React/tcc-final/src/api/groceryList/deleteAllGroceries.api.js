import { axiosInstance } from '../_base/axiosInstance';

const GROCERIES = '/compras/limpar';

export async function deleteAll() {
  const response = await axiosInstance.delete(GROCERIES);
  return response.data;
}
