import { useState, useEffect } from 'react'
import { useToastr } from '../index';
import { getCorridasPassageiro } from '../../api/index'

export function useCorridaApi(idPassageiro) {
    const [corridasPassageiro, setCorridasPassageiro] = useState([])
    const [carregando, setCarregando] = useState(true)
    const showToastr = useToastr(); 

    async function fetchCorridaPassageiro() {
        setCarregando(true)
        try {
            const response = await getCorridasPassageiro(idPassageiro)
            setCorridasPassageiro(response.content)
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        fetchCorridaPassageiro();
    }, []);

    return {
        corridasPassageiro,
        fetchCorridaPassageiro,
        carregando
    }
}