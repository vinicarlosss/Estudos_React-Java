import { useState } from "react";
import { useToastr } from '../index';
import { saque, getMotorista } from "../../api";

export function useMotoristaApi(){
    const showToastr = useToastr();
    const [motorista, setMotorista] = useState({
        id: '',
        nome: '',
        data_nascimento: '',
        cpf: '',
        situacao: '',
        saldo: '',
        avaliacao: '',
        numero_habilitacao: '',
        categoria: '',
        data_vencimento: '',
    })

    async function realizarSaque(idMotorista, valor){
        try{
            await saque(idMotorista, valor)
        }catch(error){
            showToastr(error.response.data.message);
        }
    }

    async function detalharMotorista(idMotorista){
        try{
            const response = await getMotorista(idMotorista)
            setMotorista(oldMotorista=>({
                ...oldMotorista,
                id: response.id,
                nome: response.nome,
                data_nascimento: response.dataNascimento,
                cpf: response.cpf,
                situacao: response.situacao,
                saldo: response.saldo,
                avaliacao: response.avaliacao,
                numero_habilitacao: response.numeroHabilitacao,
                categoria: response.categoria,
                data_vencimento: response.dataVencimento
            }))
        }catch(error){
            showToastr(error.response.data.message);
        }
    }

    return {
        realizarSaque,
        motorista,
        detalharMotorista
    }
}