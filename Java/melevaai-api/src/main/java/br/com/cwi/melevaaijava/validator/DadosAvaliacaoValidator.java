package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.controller.request.DadosAvaliacaoRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class DadosAvaliacaoValidator {
    private static final int NOTA_MINIMA = 0;
    private static final int NOTA_MAXIMA = 5;
    public void validar(DadosAvaliacaoRequest request) {

        if(isNull(request)){
            throw new ResponseStatusException(BAD_REQUEST, "Dados não informados");
        }

        if (isNull(request.getNota())){
            throw new ResponseStatusException(BAD_REQUEST, "Nota é obrigatória");
        }

        if(request.getNota() < NOTA_MINIMA){
            throw new ResponseStatusException(BAD_REQUEST, "Nota deve ser maior ou igual a 0");
        }

        if(request.getNota() > NOTA_MAXIMA){
            throw new ResponseStatusException(BAD_REQUEST, "Nota deve ser menor ou igual a 5");
        }
    }
}
