import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criaMotorista } from "../../api";
import { criaPassageiro } from "../../api/usuario/cria-passageiro.api";
import { useToastr } from '../index';

export function useCriaNovoUsuario() {
    const [novoUsuario, setNovoUsuario] = useState();
    const [erro, setErro] = useState("");
    const showToastr = useToastr();
    const navigate = useNavigate();

    async function criaNovoPassageiro(dadosPassageiroForm) {
        const passageiro = {
            nome: dadosPassageiroForm.nome.valor,
            cpf: (dadosPassageiroForm.cpf.valor).replace(/[^0-9]/g, ''),
            data_nascimento: dadosPassageiroForm.dataNascimento.valor
        }
        try {
            await criaPassageiro(passageiro);
            navigate("/lista-passageiros");
        } catch (error) {
            showToastr(error.response.data.message);
        }
    }

    async function criaNovoMotorista(dadosMotoristaForm) {
        const motorista = await {
            nome: dadosMotoristaForm.nome.valor,
            cpf: (dadosMotoristaForm.cpf.valor).replace(/[^0-9]/g, ''),
            dataNascimento: dadosMotoristaForm.dataNascimento.valor,
            numeroHabilitacao: dadosMotoristaForm.numero.valor,
            categoria: dadosMotoristaForm.categoria.valor,
            dataVencimento: dadosMotoristaForm.dataVencimento.valor
        }
        try {
            return await criaMotorista(motorista);
        } catch (error) {
            showToastr(error.response.data.message);
        }
    }

    return { novoUsuario, erro, setErro, criaNovoPassageiro, criaNovoMotorista };
}
