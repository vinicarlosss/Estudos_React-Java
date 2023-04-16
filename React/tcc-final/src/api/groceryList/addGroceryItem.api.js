import { axiosInstance } from '../_base/axiosInstance';

const GROCERIES = '/compras';

export async function addGroceryItem({ name, price, quantity }) {
  const response = await axiosInstance.post(GROCERIES, {
    nome: name,
    preco: price,
    quantidade: quantity,
  });
  return response.data;
}
