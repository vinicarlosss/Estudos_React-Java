import { axiosInstance } from '../_base/axios.instance'

export async function getCorridasPassageiro(idPassageiro){
    const response = await axiosInstance.get(`corridas/passageiro/${idPassageiro}?size=10&page=0`)
    return response.data
}