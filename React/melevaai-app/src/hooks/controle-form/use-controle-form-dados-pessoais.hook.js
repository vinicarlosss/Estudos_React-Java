import { useState } from "react";
import { TIPO_CADASTRO } from "../../constants/cadastro.const";

export function useControleFormDadosUsuario() {

    const [formInputsDadosUsuario, setFormInputsDadosUsuario] = useState({
        nome: { valor: "", erro: "" },
        dataNascimento: { valor: "", erro: "" },
        cpf: { valor: "", erro: "" },
        numero: { valor: "", erro: "" },
        categoria: { valor: "", erro: "" },
        dataVencimento: { valor: "", erro: "" },
        modelo: { valor: "", erro: "" },
        cor: { valor: "", erro: "" },
        imagem: { valor: "", erro: "" },
    });

    function handleChangeInput(event) {
        const { name, value } = event.target;

        if (name === "cpf") {
            aplicaMascara(value);
            return;
        }
        if (name === "numero") {
            validaNumero(value);
            return;
        }

        setFormInputsDadosUsuario((oldFormInput) => ({
            ...oldFormInput,
            [name]: { valor: value, erro: "" },
        }));
    }

    function validaSubmit(event, tipoUsuario) {
        event.preventDefault();
        const dadosPessoaisValidos = _dadosPessoaisValidos();
        const dadosHabilitacaoValidos = _dadosHabilitacaoValidos(tipoUsuario);
        const dadosVeiculoValidos = _dadosVeiculoValidos(tipoUsuario);
        return (dadosPessoaisValidos && dadosHabilitacaoValidos && dadosVeiculoValidos);
    }

    function _dadosPessoaisValidos() {
        const nomeInvalido = _dadosPessoaisValidosNome();
        const dataNascimentoInvalido = _dadosPessoaisValidosDataNascimento();
        const cpfInvalido = _dadosPessoaisValidosCpf();
        return !(nomeInvalido || dataNascimentoInvalido || cpfInvalido);
    }

    function _dadosPessoaisValidosNome() {
        if (!formInputsDadosUsuario.nome.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                nome: {
                    ...oldFormInput.nome,
                    erro: "Informe seu nome!",
                },
            }));
            return true;
        }
    }

    function _dadosPessoaisValidosDataNascimento() {
        if (!formInputsDadosUsuario.dataNascimento.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                dataNascimento: { ...oldFormInput.dataNascimento, erro: "Informe sua data de nascimento!" },
            }));
            return true;
        }
        if (new Date(formInputsDadosUsuario.dataNascimento.valor) > Date.now()) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                dataNascimento: { ...oldFormInput.dataNascimento, erro: "Data de nascimento não pode ser maior que a data atual!" },
            }));
            return true;
        }
        if (new Date(formInputsDadosUsuario.dataNascimento.valor).getFullYear() < 1900) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                dataNascimento: { ...oldFormInput.dataNascimento, erro: "Data de nascimento inválida!" },
            }));
            return true;
        }
    }

    function _dadosPessoaisValidosCpf() {
        if (!formInputsDadosUsuario.cpf.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                cpf: { ...oldFormInput.cpf, erro: "Informe seu CPF!" },
            }));
            return true;
        }
    }

    function _dadosHabilitacaoValidos(tipoUsuario) {
        if (tipoUsuario === TIPO_CADASTRO.PASSAGEIRO) return true;

        const numeroInvalido = _dadosHabilitacaoValidosNumero();
        const categoriaInvalido = _dadosHabilitacaoValidosCategoria();
        const dataVencimentoInvalido = _dadosHabilitacaoValidosDataVencimento();
        return !(numeroInvalido || categoriaInvalido || dataVencimentoInvalido);
    }

    function _dadosHabilitacaoValidosNumero() {
        if (!formInputsDadosUsuario.numero.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                numero: {
                    ...oldFormInput.numero,
                    erro: "Informe o número de registro da CNH!",
                },
            }));
            return true;
        }
    }

    function _dadosHabilitacaoValidosCategoria() {
        if (!formInputsDadosUsuario.categoria.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                categoria: { ...oldFormInput.categoria, erro: "Informe a categoria da CNH!" },
            }));
            return true;
        }
    }

    function _dadosHabilitacaoValidosDataVencimento() {
        if (!formInputsDadosUsuario.dataVencimento.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                dataVencimento: { ...oldFormInput.dataVencimento, erro: "Informe a data de vencimento da CNH!" },
            }));
            return true;
        }
        if (new Date(formInputsDadosUsuario.dataVencimento.valor) < Date.now()) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                dataVencimento: { ...oldFormInput.dataVencimento, erro: "Não é possível cadastrar essa CNH, pois já está vencida!" },
            }));
            return true;
        }
        if (new Date(formInputsDadosUsuario.dataVencimento.valor).getFullYear() > (new Date().getFullYear() + 15)) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                dataVencimento: { ...oldFormInput.dataVencimento, erro: "Data de vencimento da CNH está inválida!" },
            }));
            return true;
        }
    }

    function _dadosVeiculoValidos(tipoUsuario) {
        if (tipoUsuario === TIPO_CADASTRO.PASSAGEIRO) return true;
        const modeloInvalido = _dadosVeiculoValidosModelo();
        const corInvalido = _dadosVeiculoValidosCor();
        const imagemInvalido = _dadosVeiculoValidosImagem();
        return !(modeloInvalido || corInvalido || imagemInvalido);
    }

    function _dadosVeiculoValidosModelo() {
        if (!formInputsDadosUsuario.modelo.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                modelo: { ...oldFormInput.modelo, erro: "Informe o modelo do veículo!" },
            }));
            return true;
        }
    }

    function _dadosVeiculoValidosCor() {
        if (!formInputsDadosUsuario.cor.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                cor: { ...oldFormInput.cor, erro: "Informe a cor do veículo!" },
            }));
            return true;
        }
    }

    function _dadosVeiculoValidosImagem() {
        if (!formInputsDadosUsuario.imagem.valor) {
            setFormInputsDadosUsuario((oldFormInput) => ({
                ...oldFormInput,
                imagem: { ...oldFormInput.imagem, erro: "Informe a imagem do veículo!" },
            }));
            return true;
        }
    }

    function aplicaMascara(cpf) {
        if (cpf.length > 14) {
            return;
        }
        const novoValorSoNumeros = cpf.replace(/[^0-9]/g, '');
        const mascaraPrimeiraParte = novoValorSoNumeros.length > 3 ? novoValorSoNumeros.replace(/(\d{3})(\d)/, "$1.$2") : novoValorSoNumeros;
        const mascaraSegundaParte = mascaraPrimeiraParte.length > 4 ? mascaraPrimeiraParte.replace(/(\d{3})(\d)/, "$1.$2") : mascaraPrimeiraParte;
        const mascaraTerceiraParte = mascaraSegundaParte.length > 11 ? mascaraSegundaParte.replace(/(\d{3})(\d{1,2})$/, "$1-$2") : mascaraSegundaParte;

        setFormInputsDadosUsuario((oldFormInput) => ({
            ...oldFormInput,
            cpf: { valor: mascaraTerceiraParte, erro: "" },
        }));
    }

    function validaNumero(numero) {
        if (numero.length > 11) return;
        const novoValorSoNumeros = numero.replace(/[^0-9]/g, '');
        setFormInputsDadosUsuario((oldFormInput) => ({
            ...oldFormInput,
            numero: { valor: novoValorSoNumeros, erro: "" },
        }));
    }

    return { formInputsDadosUsuario, handleChangeInput, validaSubmit };
}
