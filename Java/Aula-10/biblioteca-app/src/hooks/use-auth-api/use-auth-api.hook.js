import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../api"

export function useAuthApi(){
    const [erro, setErro] = useState('')
    const [carregando, setCarregando] = useState(false)
    const navigate = useNavigate()

    async function fetchLogin(usuario, senha){
        try{
            setCarregando(true)
            await login({usuario, senha})
            navigate("/livros")
        }catch(erro){
            if(erro.response.status == 401){
                setErro('Usuário ou senha inválido')
            }
        }finally{
            setCarregando(false)
        }
    }


    return {
        erro,
        carregando,
        fetchLogin
    }
}