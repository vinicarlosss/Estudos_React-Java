import { useState } from "react";
import {
  useControleFormDadosUsuario,
  useCriaNovoUsuario,
  useCriaNovoVeiculo,
} from "../../../hooks";
import {
  Botao,
  BotaoSelecao,
  Container,
  Header,
  Input,
} from "../../components";
import { CATEGORIA_CNH, TIPO_CADASTRO } from "../../../constants/cadastro.const";
import "./cadastro.style.css";

export function Cadastro() {
  const [tipoUsuario, setTipoUsuario] = useState(TIPO_CADASTRO.PASSAGEIRO);
  const { formInputsDadosUsuario, handleChangeInput, validaSubmit } =
    useControleFormDadosUsuario();
  const { erro, setErro, criaNovoPassageiro, criaNovoMotorista } =
    useCriaNovoUsuario();
  const { criaNovoVeiculo } = useCriaNovoVeiculo();

  async function handleSubmitForm(event) {
    setErro("");
    if (!validaSubmit(event, tipoUsuario)) {
      return;
    }
    if (tipoUsuario === TIPO_CADASTRO.PASSAGEIRO) {
      await criaNovoPassageiro(formInputsDadosUsuario);
    }
    if (tipoUsuario === TIPO_CADASTRO.MOTORISTA) {
      const novoUsuario = await criaNovoMotorista(formInputsDadosUsuario);
      await criaNovoVeiculo(formInputsDadosUsuario, novoUsuario.id)
    }
  }

  function renderFormDadosHabilitacao() {
    if (tipoUsuario !== TIPO_CADASTRO.MOTORISTA) return;
    return (
      <>
        <h1>Dados do Veículo</h1>
        <Input
          titulo="Modelo"
          name="modelo"
          erro={formInputsDadosUsuario.modelo.erro}
          valor={formInputsDadosUsuario.modelo.valor}
          onChange={handleChangeInput}
        />
        <Input
          titulo="Cor"
          name="cor"
          erro={formInputsDadosUsuario.cor.erro}
          valor={formInputsDadosUsuario.cor.valor}
          onChange={handleChangeInput}
        />
        <Input
          titulo="Imagem"
          name="imagem"
          erro={formInputsDadosUsuario.imagem.erro}
          valor={formInputsDadosUsuario.imagem.valor}
          onChange={handleChangeInput}
        />
      </>
    );
  }

  function renderFormDadosVeiculo() {
    if (tipoUsuario !== TIPO_CADASTRO.MOTORISTA) return;
    return (
      <>
        <h1>Dados da CNH</h1>
        <Input
          titulo="Número de registro"
          name="numero"
          erro={formInputsDadosUsuario.numero.erro}
          valor={formInputsDadosUsuario.numero.valor}
          onChange={handleChangeInput}
        />
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          onChange={handleChangeInput}
          defaultValue={formInputsDadosUsuario.categoria.valor}
        >
          <option value="" selected disabled>
            Selecione...
          </option>
          {CATEGORIA_CNH.map((categoria) => (
            <option
              value={categoria}
              key={categoria}
              selected={categoria === formInputsDadosUsuario.categoria.valor}
            >
              {categoria}
            </option>
          ))}
        </select>
        <Input
          titulo="Data Vencimento"
          name="dataVencimento"
          tipo="date"
          erro={formInputsDadosUsuario.dataVencimento.erro}
          valor={formInputsDadosUsuario.dataVencimento.valor}
          onChange={handleChangeInput}
        />
      </>
    );
  }

  return (
    <section className="cadastro__">
      <Header />
      <Container align="center">
        <form
          className="cadastro__form--conteudo"
          onSubmit={(event) => handleSubmitForm(event)}
        >
          <h1>Cadastro de novo usuário</h1>
          <Input
            titulo="Nome"
            name="nome"
            erro={formInputsDadosUsuario.nome.erro}
            valor={formInputsDadosUsuario.nome.valor}
            onChange={handleChangeInput}
          />
          <Input
            titulo="Data nascimento"
            tipo="date"
            name="dataNascimento"
            erro={formInputsDadosUsuario.dataNascimento.erro}
            valor={formInputsDadosUsuario.dataNascimento.valor}
            onChange={handleChangeInput}
          />
          <Input
            titulo="CPF"
            name="cpf"
            erro={formInputsDadosUsuario.cpf.erro}
            valor={formInputsDadosUsuario.cpf.valor}
            onChange={handleChangeInput}
          />
          <div className="cadastro__div--tipo-cadastro">
            <BotaoSelecao
              texto="Passageiro"
              estaAtivo={tipoUsuario === TIPO_CADASTRO.PASSAGEIRO}
              handleClick={() => setTipoUsuario(TIPO_CADASTRO.PASSAGEIRO)}
            />
            <BotaoSelecao
              texto="Motorista"
              estaAtivo={tipoUsuario === TIPO_CADASTRO.MOTORISTA}
              handleClick={() => setTipoUsuario(TIPO_CADASTRO.MOTORISTA)}
            />
          </div>
          {renderFormDadosHabilitacao()}
          {renderFormDadosVeiculo()}
          <p className="cadastro__p--erro">{erro}</p>
          <Botao texto="Prosseguir" />
        </form>
      </Container>
    </section>
  );
}
