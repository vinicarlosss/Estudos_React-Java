import { useState } from 'react';

export function useServicesFormInputs() {
  const [formInputs, setFormInputs] = useState({
    categoria: '',
    order: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormInputs((oldFormInputs) => ({
      ...oldFormInputs,
      [name]: value,
    }));
  }

  return {
    formInputs,
    handleChange,
  };
}
