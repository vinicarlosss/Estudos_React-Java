import { useState } from 'react';
import { useToastContext } from '../../context/toast.context';
import { addGroceryItem } from '../../api/index';

export function useAddGrocery(updateInfo) {
  const DEFAULT_INPUT = {
    name: '',
    price: 0,
    quantity: 1,
  };
  const addToast = useToastContext();

  const [input, setInput] = useState(DEFAULT_INPUT);

  async function add() {
    const { name, quantity } = input;
    let price = input.price;
    if (name === '') {
      addToast('Item não pode ter nome vazio!');
      return;
    }
    if (price === null || price === '') {
      price = 0;
    }
    if (quantity < 1) {
      addToast('Item não pode ter quantidade menor que 1!');
      return;
    }
    try {
      await addGroceryItem({ name, price, quantity });
      updateInfo();
    } catch (error) {
      addToast(error.response.data.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((old) => ({ ...old, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await add();
  }

  return { handleSubmit, input, setInput, DEFAULT_INPUT, handleChange };
}
