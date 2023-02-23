import { useState } from "react";

export function useControleFormDadosCorrida() {

    const [formInputsDadosCorrida, setFormInputsDadosCorrida] = useState({
        origem: { valor: "", erro: "" },
        destino: { valor: "", erro: "" },
    });

    function handleChangeInput(event) {
        const { name, value } = event.target;
        setFormInputsDadosCorrida((oldFormInput) => ({
            ...oldFormInput,
            [name]: { valor: value, erro: "" },
        }));
    }

    function validaSubmit(event) {
        event.preventDefault();
        const origemInvalida = !formInputsDadosCorrida.origem.valor ;
        const destinoInvalido = !formInputsDadosCorrida.destino.valor ;
        if (origemInvalida) {
            setFormInputsDadosCorrida((oldFormInput) => ({
                ...oldFormInput,
                origem: { valor: oldFormInput.origem.valor, erro: "Digite o local de origem!" },
            }));
        }
        if (destinoInvalido) {
            setFormInputsDadosCorrida((oldFormInput) => ({
                ...oldFormInput,
                destino: { valor: oldFormInput.destino.valor, erro: "Digite o local de destino!" },
            }));

        }
        return !(origemInvalida || destinoInvalido);
    }

    function setOrigem(position) {
        setFormInputsDadosCorrida((oldFormInput) => ({
            ...oldFormInput,
            origem: { valor: position, erro: "" },
        }));
    }

    return { formInputsDadosCorrida, handleChangeInput, validaSubmit, setOrigem };
}
