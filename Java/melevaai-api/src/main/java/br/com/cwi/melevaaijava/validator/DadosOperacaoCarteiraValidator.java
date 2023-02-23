package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class DadosOperacaoCarteiraValidator {

    public void validar(DadosOperacaoCarteiraRequest request) {

        if(isNull(request)){
            throw new ResponseStatusException(BAD_REQUEST, "Dados não informados");
        }

        if(isNull(request.getValor())){
            throw new ResponseStatusException(BAD_REQUEST, "Valor é obrigatório");
        }
    }
}
