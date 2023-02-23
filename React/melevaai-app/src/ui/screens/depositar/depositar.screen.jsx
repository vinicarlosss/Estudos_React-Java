import './depositar.style.css'
import {
    Header,
    Container,
    MenuNavegacao,
    Input,
    Botao
} from '../../components/index'
import { usePassageiroApi } from '../../../hooks'
import useGlobalUser from '../../../contexts/usuario/user.contex'
import { useState } from 'react'

export function Depositar() {

    const [user] = useGlobalUser()
    const { erro, depositarValor } = usePassageiroApi()
    const [formInput, setFormInput] = useState({valor: ''})

    function handleChange(event){
        const { name, value } = event.target
        setFormInput(oldFormInput=>({
            ...oldFormInput,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        depositarValor(user?.PASSAGEIRO?.id, formInput.valor)
    }

    return (
        <main className='depositar__'>
            <Header />
            <Container>
                <section>
                    <MenuNavegacao/>
                    <form
                        className="depositar__form"
                        onSubmit={handleSubmit}
                    >
                        <h1>Depósito</h1>
                        <Input
                            name="valor"
                            titulo="Valor: "
                            onChange={handleChange}
                            erro={erro}
                        />
                        <Botao texto="Depositar"/>
                    </form>
                </section>
            </Container>
        </main>
    )
}