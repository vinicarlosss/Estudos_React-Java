import { axiosInstance } from '../_base/axiosInstance';

const GROCERIES = '/compras/:id';

export async function deleteGroceryItem(id) {
  const response = await axiosInstance.delete(GROCERIES.replace(':id', id));
  return response.data;
}
