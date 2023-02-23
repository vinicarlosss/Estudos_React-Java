import { axiosInstance } from "../_base/axios.instance";

export async function buscaListaPassageiros(page){
    const response = await axiosInstance.get(`/passageiros?size=4&page=${page}`)
    return response.data
}