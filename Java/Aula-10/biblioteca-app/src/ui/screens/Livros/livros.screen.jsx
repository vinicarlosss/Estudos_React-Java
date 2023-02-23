import { useEffect } from "react"
import { getLivro, logout } from "../../../api"
import { useState } from "react"

export function Livros(){
    const [livros, setLivros] = useState()

    async function handleEffect(){
        const response = await getLivro()
        setLivros(response)
    }
    useEffect(()=>{
        handleEffect()
    }, [])
    return(
        <main className="livros__main">
            <table className="livros__table">
                <thead className="livros__table--thead">
                    <tr className="livros__table--tr">
                        <td className="livros__table--td">Id</td>
                        <td className="livros__table--td">Nome</td>
                        <td className="livros__table--td">Descrição</td>
                        <td className="livros__table--td">Ano de publicação</td>
                    </tr>
                </thead>
                <tbody>
                        {livros?.map((livro, index) => {
                            return(
                                <tr>
                                    <td>{index}</td>
                                    <td>{livro.nome}</td>
                                    <td>{livro.descricao}</td>
                                    <td>{livro.ano_publicacao}</td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table>
            <button onClick={logout}>Logout</button>
        </main>
    )
}