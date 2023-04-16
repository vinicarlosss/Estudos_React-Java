import { axiosInstance } from '../_base/axiosInstance';

const GROCERIES = '/compras';
export async function getListGroceries() {
  const response = await axiosInstance.get(GROCERIES);
  return response.data;
}
