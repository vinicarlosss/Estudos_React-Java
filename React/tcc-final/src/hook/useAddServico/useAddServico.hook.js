import { useState } from 'react';
import { addService } from '../../api';
import { useToastContext } from '../../context/toast.context';

export function useAddService() {
  const [serviceInputs, setServiceInputs] = useState({
    titulo: '',
    descricao: '',
    valor: 0,
    imagem: '',
    categoria: '',
  });
  const addToast = useToastContext();

  function onAddServiceClick(setServiceChange) {
    async function addUserService() {
      try {
        if (serviceInputs.titulo === '') {
          addToast('Título deve ser preenchido');
        } else if (serviceInputs.descricao === '') {
          addToast('Descrição deve ser preenchida');
        } else if (serviceInputs.categoria === '') {
          await addService(
            serviceInputs.titulo,
            serviceInputs.descricao,
            serviceInputs.valor,
            serviceInputs.imagem,
            'LIMPEZA'
          );
          setServiceChange(true);
          addToast('Serviço adicionado com sucesso');
        } else {
          await addService(
            serviceInputs.titulo,
            serviceInputs.descricao,
            serviceInputs.valor,
            serviceInputs.imagem,
            serviceInputs.categoria
          );
          setServiceChange(true);
          addToast('Serviço adicionado com sucesso');
        }
      } catch (error) {
        addToast(error.response.data.message);
      } finally {
        setServiceInputs((oldFormInputs) => ({
          ...oldFormInputs,
          titulo: '',
          descricao: '',
          valor: 0,
          imagem: '',
          categoria: '',
        }));
      }
    }
    addUserService();
  }

  function handleServiceInputChange(event) {
    const { name, value } = event.target;

    setServiceInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    serviceInputs,
    handleServiceInputChange,
    onAddServiceClick,
  };
}
