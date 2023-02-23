import { axiosInstance } from '../_base/axios.instance'

export async function getCorridasMotorista(idMotorista){
    const response = await axiosInstance.get(`/corridas/motorista/${idMotorista}`)
    return response.data
} 