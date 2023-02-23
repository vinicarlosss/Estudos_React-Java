import { axiosInstance } from "../_base/axios.instance";

export async function saque(idMotorista, valor){
    const response = await axiosInstance.put(`/motoristas/sacar/${idMotorista}`,
    {
        valor: valor
    })
    return response.data
}