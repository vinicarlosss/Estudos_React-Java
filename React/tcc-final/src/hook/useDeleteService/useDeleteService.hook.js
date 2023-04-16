import { deleteService } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useDeleteService(services) {
  const addToast = useToastContext();
  function onDeleteServiceClick(idServico, setServiceChange) {
    async function deleteUserService() {
      try {
        await deleteService(idServico);
        if (services.length === 1) {
          window.location.reload(true);
        }
        setServiceChange(true);
        addToast('Serviço deletado com sucesso');
      } catch (error) {
        addToast(error.response.data.message);
      }
    }
    deleteUserService();
  }

  return {
    onDeleteServiceClick,
  };
}
