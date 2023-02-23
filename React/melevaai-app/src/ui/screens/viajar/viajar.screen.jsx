import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  usePassageiroApi,
  useCorridaApi,
  useControleFormDadosCorrida,
  useToastr,
} from "../../../hooks/index";
import {
  Header,
  CardCorrida,
  Container,
  MenuNavegacao,
  Input,
  Botao,
} from "../../components/index";
import useGlobalUser from "../../../contexts/usuario/user.contex";
import "./viajar.style.css";
import { useSolicitaCorrida } from "../../../hooks/corrida/use-solicita-corrida.hook";

export function Viajar() {
  const [user, setUser] = useGlobalUser();
  const { formInputsDadosCorrida, handleChangeInput, validaSubmit, setOrigem } =
    useControleFormDadosCorrida();
  const { dadosCorrida, erro, setErro, solicitaCorrida } = useSolicitaCorrida(user?.PASSAGEIRO.id);
  const navigate = useNavigate();
  const showToastr = useToastr();

  useEffect(() => {
    if (!user?.PASSAGEIRO) navigate("/lista-passageiros");
  }, [user]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setOrigem(`${position.coords.latitude}, ${position.coords.longitude}`),
      showError
    );
    function showError(error) {
      showToastr(error.message);
    }
  }, []);

  function handleSubmit(event) {
    if (!validaSubmit(event)) {
      return;
    }
    solicitaCorrida(formInputsDadosCorrida);
  }


  return (
    <main className="viajar__">
      <Header />
      <Container>
        <section>
          <MenuNavegacao />

          <form
            className="viajar__form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h1>Informações da corrida</h1>
            <Input
              erro={formInputsDadosCorrida.origem.erro}
              name="origem"
              onChange={handleChangeInput}
              titulo="Local de origem"
              valor={formInputsDadosCorrida.origem.valor}
            />
            <Input
              erro={formInputsDadosCorrida.destino.erro}
              name="destino"
              onChange={handleChangeInput}
              titulo="Local de destino"
              valor={formInputsDadosCorrida.destino.valor}
            />
            <Botao texto="Iniciar corrida" />
          </form>
        </section>
      </Container>
    </main>
  );
}
