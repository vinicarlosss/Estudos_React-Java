package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.domain.Corrida;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.melevaaijava.enums.Situacao.INICIADA;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class FinalizarCorridaValidator {
    public void validar(Corrida corridaAtual, Corrida corridaAtualizada) {
        if (corridaAtual.getSituacao() != INICIADA)
            throw new ResponseStatusException(BAD_REQUEST,
                    "A corrida informada não pode ser finalizada. Pois ela ainda não foi iniciada.");
        if (corridaAtualizada.getValor().compareTo(corridaAtual.getPassageiro().getSaldo()) == 1)
            throw new ResponseStatusException(BAD_REQUEST,
                    "Não foi possível finalizar! " +
                            "O passageiro não possuí saldo suficiente para pagar a corrida!");
    }
}
