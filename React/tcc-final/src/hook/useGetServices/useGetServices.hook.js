import { useState } from 'react';
import { getServices } from '../../api/servicesApi/getServices.api';
import { getUserServices } from '../../api/servicesApi/getUserServices.api';
import { useToastContext } from '../../context/toast.context';

export function useGetServices(page) {
  const [services, setServices] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setLoading] = useState(true);
  const addToast = useToastContext();
  let response = [];

  async function fetchServices(categoria, order) {
    try {
      if (order === 'Meus serviços') {
        response = await getUserServices({ page, categoria });
      } else {
        response = await getServices({ categoria, page, order });
      }
      setTotalPages(response.totalPages);
      setServices(response.content);
    } catch (error) {
      addToast(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    services,
    fetchServices,
    totalPages,
    isLoading,
  };
}
