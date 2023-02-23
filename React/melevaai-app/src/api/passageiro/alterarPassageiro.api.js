import { axiosInstance } from '../_base/axios.instance'

export async function alterarPassageiro({ idPassageiro, nome, data_nascimento, cpf }){
    const response = await axiosInstance.put(`/passageiros/${idPassageiro}`, {
        nome,
        data_nascimento,
        cpf
    })
    return response.data
}