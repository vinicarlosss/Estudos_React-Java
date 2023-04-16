import { useState } from 'react';
import { getUserServices } from '../../api/servicesApi/getUserServices.api';
import { useToastContext } from '../../context/toast.context';

export function useGetUserServices() {
  const [userServices, setUserServices] = useState([]);
  const addToast = useToastContext();

  async function fetchUserServices(page, categoria) {
    try {
      const response = await getUserServices({ page, categoria });
      setUserServices(response.content);
    } catch (error) {
      addToast(error.response.data.message);
    }
  }

  return {
    userServices,
    fetchUserServices,
  };
}
