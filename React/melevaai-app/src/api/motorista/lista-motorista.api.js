import { axiosInstance } from '../_base/axios.instance'

export async function buscaListaMotoristas(page){
    const response = await axiosInstance.get(`/motoristas?size=4&page=${page}`)
    return response.data
} 