import { deleteGroceryItem } from '../../api';
import { useToastContext } from '../../context/toast.context';
import { deleteAll } from '../../api/groceryList/deleteAllGroceries.api';

export function useDeleteGrocery(updateInfo) {
  const addToast = useToastContext();

  async function remove(id) {
    try {
      await deleteGroceryItem(id);
      addToast('Item removido com sucesso');
      updateInfo();
    } catch (error) {
      addToast(error.response.data.message);
    }
  }

  async function cleanList(list) {
    if (list.length < 1) {
      addToast('Sua lista está vazia!');
    } else {
      if (
        window.confirm(
          'Isso limpará sua lista permanentemente, deseja continuar?'
        ) === true
      ) {
        try {
          await deleteAll();
          addToast('Lista limpa com sucesso');
          updateInfo();
        } catch (error) {
          addToast(error.response.data.message);
        }
      }
    }
  }

  return {
    remove,
    cleanList,
  };
}
