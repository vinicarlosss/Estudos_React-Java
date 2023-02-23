import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSolicitaCorrida } from "../../api";
import { useToastr } from "../use-toastr/use-toastr.hook";

export function useSolicitaCorrida(idPassageiro) {
    const [dadosCorrida, setDadosCorrida] = useState();
    const navigate = useNavigate();
    const showToastr = useToastr();

    async function solicitaCorrida(dadosCorridaForm) {
        const requestCorrida = {
            idPassageiro,
            pontoInicial: dadosCorridaForm.origem.valor.split(","),
            pontoFinal: dadosCorridaForm.destino.valor.split(","),
        }
        try {
            const response = await postSolicitaCorrida(requestCorrida);
            setDadosCorrida(response);
            navigate("/passageiro");
        } catch (error) {
            showToastr(error.response.data.message);
        }
    }
    return { dadosCorrida, solicitaCorrida };
}
