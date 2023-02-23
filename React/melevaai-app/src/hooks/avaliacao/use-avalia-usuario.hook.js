import { putAvaliaMotorista, putAvaliaPassageiro } from "../../api";

export function useAvaliaUsuario(buscaDetalhesCorridas) {
    async function avaliaMotorista(idCorrida, avaliacao) {
        try {
            const response = await putAvaliaMotorista(idCorrida, avaliacao);
            buscaDetalhesCorridas();
        } catch (error) {
            return
        }
    }

    async function avaliaPassageiro(idCorrida, avaliacao) {
        try {
            const response = await putAvaliaPassageiro(idCorrida, avaliacao);
            buscaDetalhesCorridas();
        } catch (error) {

            return
        }
    }

    return { avaliaMotorista, avaliaPassageiro };
}
