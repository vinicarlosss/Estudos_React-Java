import { useState } from 'react'
import { useAuthApi } from '../../../hooks/index'
import './login.style.css'

export function Login() {

    const  [ formInput, setFormInput ] = useState({ usuario: '', senha: ''})
    const { erro, carregando, fetchLogin } = useAuthApi()


    function handleChange(event){
        const { name, value } = event.target
        setFormInput(oldFormInput =>({
            ...oldFormInput,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        fetchLogin(formInput.usuario, formInput.senha)
    }

    return (
        <main className='login__main'>
            <form className='login__form' onSubmit={handleSubmit}>
                <header>
                    <h1>Login</h1>
                </header>
                <div className='login__form--div'>
                    <label className='login__form--label'>Usuário: </label>
                    <input className='login__form--input' type='text' name='usuario' onChange={handleChange}/>
                    <label className='login__form--label'>Senha: </label>
                    <input className='login__form--input' type='password' name='senha' onChange={handleChange}/>
                </div>
                <button className='login_form--button'>Entrar</button>
                <p>{erro}</p>
            </form>
        </main>
    )
}