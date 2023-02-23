import { useState } from "react"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../contexts/usuario/user.contex"
import { usePassageiroApi } from "../../../hooks/index"
import { Botao, Header, Input } from "../../components"
import './alterar-passageiro.style.css'

export function AlterarPassageiro() {
    const [formInput, setFormInput] = useState({ nome: '', data_nascimento: '', cpf: '', })
    const { fetchAlteracaoPassageiro, erro } = usePassageiroApi()
    const [user] = useGlobalUser()

    function handleChange(event) {
        const { name, value } = event.target
        setFormInput(oldFormInput => ({
            ...oldFormInput,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetchAlteracaoPassageiro(user?.PASSAGEIRO?.id,
            formInput.nome,
            formInput.data_nascimento,
            formInput.cpf)
    }

    return (
        <main className="alterarPassageiro__main">
            <Header />
            <section className="alterarPassageiro__">
                <form
                    className="alterarPassageiro__form"
                    onSubmit={handleSubmit}
                    >
                    <Input onChange={handleChange} name="nome" titulo="Nome: " />
                    <Input onChange={handleChange} name="data_nascimento" tipo="date" titulo="Data de nascimento: " />
                    <Input onChange={handleChange} name="cpf" tipo="text" titulo="Cpf: " />
                    <Botao texto="Alterar" />
                    <span>{erro}</span>
                </form>
            </section>
        </main>
    )

}