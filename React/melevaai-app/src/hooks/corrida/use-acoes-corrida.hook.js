import { useState } from 'react';
import { useToastr } from '../index';
import { putIniciaCorrida, putFinalizaCorrida } from '../../api';

export function useAcoesCorrida(idCorrida) {
    const [retornoCorrida, setRetornoCorrida] = useState();
    const [carregando, setCarregando] = useState(true);
    const showToastr = useToastr();

    async function iniciaCorrida() {
        setCarregando(true);
        try {
            const response = await putIniciaCorrida(idCorrida);
            setRetornoCorrida(response);
        } catch (error) {
            showToastr("Item adicionado ao inventário");
        } finally {
            setCarregando(false);
        }
    }

    async function finalizaCorrida() {
        setCarregando(true);
        try {
            const response = await putFinalizaCorrida(idCorrida);
            setRetornoCorrida(response);
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false);
        }
    }

    return { retornoCorrida, carregando, setRetornoCorrida, iniciaCorrida, finalizaCorrida }
}