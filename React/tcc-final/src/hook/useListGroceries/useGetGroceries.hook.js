import { useState } from 'react';
import { getListGroceries } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useGetGroceries() {
  const [list, setList] = useState();
  const [totalPrice, setTotal] = useState();
  const [quantity, setQuantity] = useState();
  const [loading, setLoading] = useState(true);
  const addToast = useToastContext();

  async function fetchGroceries() {
    try {
      const response = await getListGroceries();
      setList(response.itens);
      setTotal(response.precoTotal);
      setQuantity(response.quantidade);
    } catch (error) {
      addToast(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return { list, quantity, totalPrice, loading, fetchGroceries };
}
