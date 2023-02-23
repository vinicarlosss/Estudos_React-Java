import { axiosInstance } from '../_base/axios.instance'

export async function getListaPassageiros(){
    const response = await axiosInstance.get(`/passageiros`)
    return response.data
} 