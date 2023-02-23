import { useEffect, useState } from 'react';
import { useToastr } from '../index';
import { getDetalhesCorrida } from '../../api';

export function useDetalharCorrida(idCorrida) {
    const [detalhesCorrida, setDetalhesCorrida] = useState();
    const [carregando, setCarregando] = useState(true);
    const showToastr = useToastr();

    async function buscaDetalhesCorridas() {
        setCarregando(true);
        try {
            const response = await getDetalhesCorrida(idCorrida);
            setDetalhesCorrida(response);
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        buscaDetalhesCorridas();
    }, []);

    return { detalhesCorrida, carregando, buscaDetalhesCorridas }
}