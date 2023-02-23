import { axiosInstance } from '../_base/axios.instance'

export async function getPassageiro(idPassageiro){
    const response = await axiosInstance.get(`passageiros/detalhar/${idPassageiro}`)
    return response.data
} 
