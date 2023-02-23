import { axiosInstance } from '../_base/axios.instance'

export async function getDetalhesCorrida(idCorrida){
    const response = await axiosInstance.get(`/corridas/${idCorrida}`)
    return response.data
} 