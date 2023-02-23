import {axiosInstance} from '../_base/axios-instance'

export async function login({usuario, senha}){
    console.log(usuario, senha)
    const response = await axiosInstance.post(
        "/login",
        {},
        {
            auth: {
                username: usuario,
                password: senha
            },
        }
    )
    return response.data
}