import { useState } from 'react'
import useGlobalUser from '../../../contexts/usuario/user.contex'
import { useMotoristaApi } from '../../../hooks'
import { Botao, Container, Header, Input, MenuNavegacao } from '../../components'
import './saque.style.css'
export function Saque(){

    const [user] = useGlobalUser()
    const [formInput,setFormInput] = useState({valor: ''})
    const {erro, realizarSaque} = useMotoristaApi()

    function handleChange(event){
        const { name, value } = event.target
        setFormInput(oldFormInput => ({
            ...oldFormInput,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        realizarSaque(user.MOTORISTA.id, formInput.valor)
    }

    return(
        <main className='saque__'>
            <Header/>
            <Container>
                <section>
                    <MenuNavegacao/>
                    <form
                        onSubmit={handleSubmit}
                        className='saque__form'
                    >
                        <h1>Saque</h1>
                        <Input
                            name="valor"
                            titulo="Valor: "
                            onChange={handleChange}
                            erro={erro}
                        />
                        <Botao texto="Sacar"/>
                    </form>
                </section>
            </Container>
        </main>
    )
}