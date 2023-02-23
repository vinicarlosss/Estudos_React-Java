import { Link, useNavigate } from "react-router-dom";
import { useBuscaListaMotoristas, usePaginacao } from "../../../hooks";
import { Botao, Header } from "../../components";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import "./lista-motoristas.style.css";
import loading from '../../../assets/img/loading.gif'
import { useEffect } from "react";

export function ListaMotoristas() {
  const [user, setUser] = useGlobalUser();
  const { listaMotoristas, carregando, erro, buscaMotoristas } = useBuscaListaMotoristas();
  const navigate = useNavigate();
  const { page, handleNextPage, handlePreviousPage } = usePaginacao()

  useEffect(() => {
    if (user) navigate("/motorista");
    buscaMotoristas(page)
  }, [user, page]);

  return (
    <section className="lista-motoristas__">
      <Header />
      <h1>Motoristas</h1>
      <div className="lista-motoristas__div">
        {carregando ? <img src={loading}></img> : (
          listaMotoristas.map((motorista) => (
            <Link
              onClick={() =>
                setUser({ MOTORISTA: { id: motorista.id, nome: motorista.nome } })
              }
              className="lista-motoristas__div--motorista"
              key={motorista.id}
            >
              <span>{motorista.id}</span>
              <h1>{motorista.nome}</h1>
              <span>{motorista.categoriaHabilitacao}</span>
              <h2>{motorista.situacao}</h2>
            </Link>
          ))
        )}

      </div>
      <footer className='lista-motoristas__footer'>
        <Botao className='lista-motoristas_footer-botao' texto="Página anterior" handleClick={handlePreviousPage} />
        <span className='lista-motoristas_footer-pagina'>{page}</span>
        <Botao className='lista-motoristas_footer-botao' texto="Próxima página" handleClick={handleNextPage} />
      </footer>
    </section>
  );
}
