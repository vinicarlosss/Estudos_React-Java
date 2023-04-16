import { useState } from 'react';
import { updateGroceryItem } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useUpdateGrocery(groceryItem, updateInfo) {
  const addToast = useToastContext();
  const id = groceryItem?.id;

  const [input, setInput] = useState({
    name: groceryItem?.nome,
    price: groceryItem?.preco,
    quantity: groceryItem?.quantidade,
  });

  async function update() {
    const { name, price, quantity } = input;
    if (name === '') {
      addToast('Item não pode ter nome vazio!');
      return;
    }
    if (price === null) {
      addToast('Item não pode ter preço nulo!');
      return;
    }
    if (quantity < 1) {
      addToast('Item não pode ter quantidade menor que 1!');
      return;
    }
    try {
      await updateGroceryItem({
        id,
        name: name,
        price: price,
        quantity: quantity,
      });
    } catch (error) {
      addToast(error.response.data.message);
    }
  }

  async function handleSubmit() {
    await update();
    updateInfo();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((old) => ({ ...old, [name]: value }));
  }

  return { update, input, handleChange, handleSubmit };
}
