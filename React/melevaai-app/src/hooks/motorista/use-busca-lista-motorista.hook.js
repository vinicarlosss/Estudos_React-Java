import { useState } from 'react';
import { useToastr } from '../index';
import { buscaListaMotoristas } from '../../api';

export function useBuscaListaMotoristas() {
    const [listaMotoristas, setlistaMotoristas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const showToastr = useToastr();

    async function buscaMotoristas(page) {
        setCarregando(true);
        try {
            const response = await buscaListaMotoristas(page);
            setlistaMotoristas(response.content);
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false);
        }
    }

    return {
        listaMotoristas,
        carregando,
        buscaMotoristas,
    }
}