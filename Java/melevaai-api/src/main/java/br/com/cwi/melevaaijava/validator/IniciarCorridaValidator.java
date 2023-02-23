package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.domain.Corrida;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.melevaaijava.enums.Situacao.SOLICITADA;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class IniciarCorridaValidator {

    public void validar(Corrida corrida) {
        if (corrida.getSituacao() != SOLICITADA)
            throw new ResponseStatusException(BAD_REQUEST, "Status de corrida inválido");
    }
}
