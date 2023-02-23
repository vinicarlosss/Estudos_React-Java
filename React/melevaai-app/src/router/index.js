import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Passageiro,
  Motorista,
  Cadastro,
  AlterarPassageiro,
  Corrida,
  ListaPassageiros,
  ListaMotoristas,
  Viajar,
  Depositar,
  Perfil,
  Saque
} from "../ui/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/passageiro",
    element: <Passageiro />
  },
  {
    path: "/alterarPassageiro",
    element: <AlterarPassageiro />
  },
  {
    path: "/passageiro/viajar",
    element: <Viajar />
  },
  {
    path: "/passageiro/carteira",
    element: <Depositar/>
  },
  {
    path: "passageiro/perfil",
    element: <Perfil/>
  },
  {
    path: "/motorista",
    element: <Motorista />
  },
  {
    path: "/motorista/carteira",
    element: <Saque/>
  },
  {
    path: "/motorista/perfil",
    element: <Perfil/>
  },
  {
    path: "/lista-motoristas",
    element: <ListaMotoristas />
  },
  {
    path: "/lista-passageiros",
    element: <ListaPassageiros />
  },
  {
    path: "/corridas/:idCorrida",
    element: <Corrida />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
]);


// PERFIL: /MOTORISTA/PERFIL
//         /PASSAGEIRO/PERFIL
// VIAJARAGORA: /PASSAGEIRO/VIAJAR
// MINHASVIAGENS: /MOTORISTA
//                /PASSAGEIRO
// CARTEIRA: /MOTORISTA/CARTEIRA
//           /PASSAGEIRO/CARTEIRA
