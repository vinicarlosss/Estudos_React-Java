import { useEffect, useState } from 'react';
import { getCorridasMotorista } from '../../api';
import { useToastr } from '../index';

export function useBuscaCorridasMotorista(idMotorista) {
    const [corridasMotorista, setCorridasMotorista] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const showToastr = useToastr();

    async function buscaCorridasMotoristas() {
        setCarregando(true);
        try {
            const response = await getCorridasMotorista(idMotorista);
            setCorridasMotorista(response.content);
        } catch (error) {
            showToastr("Item adicionado ao inventário");
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        buscaCorridasMotoristas();
    }, []);

    return { corridasMotorista, carregando }
}