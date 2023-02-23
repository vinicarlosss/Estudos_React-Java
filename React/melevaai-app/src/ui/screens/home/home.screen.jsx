import { useNavigate } from "react-router-dom";
import { Botao, Container, Header } from "../../components";
import "./home.style.css";

export function Home() {
  const navigate = useNavigate()
  return (
    <section className="home__">
      <Header/>
      <Container>
        <div className="home__div--conteudo">
          <Botao texto="Listar passageiros" handleClick={()=> navigate("/lista-passageiros")}/>
          <Botao texto="Listar motoristas" handleClick={()=> navigate("/lista-motoristas")}/>
        </div>

      </Container>
    </section>
  );
}