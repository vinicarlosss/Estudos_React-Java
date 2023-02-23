import { axiosInstance } from "../_base/axios.instance";

export async function depositar(idPassageiro, valor){
    const response = await axiosInstance.put(`/passageiros/depositar/${idPassageiro}`,
    {
        valor: valor
    })
    return response.data
}