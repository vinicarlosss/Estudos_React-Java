import { useEffect, useState } from 'react';
import { useToastr } from '../index';
import { getListaPassageiros } from '../../api';

export function useBuscaListaPassageiros() {
    const [listaPassageiros, setlistaPassageiros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const showToastr = useToastr();

    async function buscaPassageiros() {
        setCarregando(true);
        try { 
            const response = await getListaPassageiros();
            setlistaPassageiros(response.content);
        } catch (error) {        
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        buscaPassageiros();
    }, []);

    return { listaPassageiros, carregando }
}