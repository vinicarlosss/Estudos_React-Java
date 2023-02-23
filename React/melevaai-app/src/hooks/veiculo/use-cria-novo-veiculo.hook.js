import { useNavigate } from "react-router-dom";
import { useToastr } from '../index';
import { postVeiculo } from "../../api";

export function useCriaNovoVeiculo() {
    const navigate = useNavigate();
    const showToastr = useToastr();

    async function criaNovoVeiculo(dadosVeiculoForm, idMotorista) {
        const veiculo = {
            modelo: dadosVeiculoForm.modelo.valor,
            cor: dadosVeiculoForm.cor.valor,
            fotoUrl: dadosVeiculoForm.imagem.valor,
            categoria: dadosVeiculoForm.categoria.valor,
            idMotorista: idMotorista,
        }
        try {
            await postVeiculo(veiculo);
            navigate("/");
        } catch (error) {
            showToastr(error.response.data.message);
        }
    }
    return { criaNovoVeiculo };
}
