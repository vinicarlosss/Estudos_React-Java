import { axiosInstance } from '../_base/axiosInstance';

const GROCERIES = '/compras/:id';

export async function updateGroceryItem({ id, name, price, quantity }) {
  const response = await axiosInstance.put(GROCERIES.replace(':id', id), {
    nome: name,
    preco: price,
    quantidade: quantity,
  });
  return response.data;
}
