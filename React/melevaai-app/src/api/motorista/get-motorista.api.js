import { axiosInstance } from "../_base/axios.instance";

export async function getMotorista(idMotorista){
    const response = await axiosInstance.get(`/motoristas/${idMotorista}`)
    return response.data
}