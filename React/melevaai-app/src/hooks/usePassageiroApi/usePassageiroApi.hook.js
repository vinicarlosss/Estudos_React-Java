import { useState } from 'react'
import { getPassageiro, alterarPassageiro, buscaListaPassageiros, depositar } from '../../api/index'
import { useToastr } from '../index';

export function usePassageiroApi() {
    const [passageiro, setPassageiro] = useState({
        id: '',
        nome: '',
        data_nascimento: '',
        situacao: '',
        saldo: '',
        ativo: '',
        avaliacao: ''
    })
    const showToastr = useToastr();
    const [carregando, setCarregando] = useState(true)
    const [listaPassageiros, setListaPassageiros] = useState([])

    async function fetchPassageiro(idPassageiro) {
        setCarregando(true)
        try {
            const response = await getPassageiro(idPassageiro)
            setPassageiro(oldPassageiro => ({
                ...oldPassageiro,
                id: response.id,
                nome: response.nome,
                data_nascimento: response.data_nascimento,
                situacao: response.situacao,
                saldo: response.saldo,
                ativo: response.ativo,
                avaliacao: response.avaliacao
            }))
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false)
        }
    }

    async function fetchAlteracaoPassageiro(idPassageiro, nome, data_nascimento, cpf) {
        setCarregando(true)
        try {
            await alterarPassageiro({ idPassageiro, nome, data_nascimento, cpf })
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false)
        }
    }

    async function buscaPassageiros(page) {
        setCarregando(true)
        try {
            const response = await buscaListaPassageiros(page)
            setListaPassageiros(response.content)
        } catch (error) {
            showToastr(error.response.data.message);
        } finally {
            setCarregando(false)
        }
    }

    async function depositarValor(idPassageiro, valor){
        setCarregando(true)
        try{
            await depositar(idPassageiro, valor)
        }catch(error){
            showToastr(error.response.data.message);
        }finally{
            setCarregando(false)
        }
    }

    return {
        passageiro,
        fetchPassageiro,
        carregando,
        fetchAlteracaoPassageiro,
        listaPassageiros,
        buscaPassageiros,
        depositarValor,
    }
}