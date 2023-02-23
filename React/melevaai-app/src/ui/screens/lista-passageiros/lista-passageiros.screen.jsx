import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useGlobalUser from '../../../contexts/usuario/user.contex';
import { usePassageiroApi, usePaginacao } from '../../../hooks';
import { Botao, BotaoSelecao } from '../../components';
import { Header } from '../../components';
import loading from '../../../assets/img/loading.gif';
import './lista-passageiros.style.css';

export function ListaPassageiros() {
    const [user, setUser] = useGlobalUser()
    const { listaPassageiros, buscaPassageiros, carregando } = usePassageiroApi()
    const { page, handlePreviousPage, handleNextPage } = usePaginacao()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate('/passageiro')
        buscaPassageiros(page)
    }, [user, page])

    return (
        <main>
            <Header />
            <section className='lista-passageiros__'>
                <h1>Lista-passageiros</h1>
                <div className='lista-passageiros__div'>
                    {carregando ? <img src={loading} /> : (
                        listaPassageiros.map(passageiro => (
                            <Link
                                key={passageiro.id}
                                className="lista-passageiros__div--passageiro"
                                onClick={() =>
                                    setUser({ PASSAGEIRO: { id: passageiro.id, nome: passageiro.nome } })

                                }>
                                <span>{passageiro.id}</span>
                                <h1>{passageiro.nome}</h1>
                                <span>R$: {passageiro.saldo}</span>
                                <span>{passageiro.situacao}</span>

                            </Link>
                        ))
                    )}
                </div>
                <footer className='lista-passageiros__footer'>
                    <Botao className='lista-passageiros_footer-botao' texto="Página anterior" handleClick={handlePreviousPage} />
                    <span className='lista-passageiros_footer-pagina'>{page}</span>
                    <Botao className='lista-passageiros_footer-botao' texto="Próxima página" handleClick={handleNextPage} />
                </footer>
            </section>
        </main>
    )
}

/*<BotaoSelecao
              texto="Passageiro"
              estaAtivo={tipoUsuario === TIPO_CADASTRO.PASSAGEIRO}
              handleClick={() => setTipoUsuario(TIPO_CADASTRO.PASSAGEIRO)}
            />*/
