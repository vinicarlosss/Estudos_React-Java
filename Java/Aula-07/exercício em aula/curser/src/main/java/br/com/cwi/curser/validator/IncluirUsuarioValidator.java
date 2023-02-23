package br.com.cwi.curser.validator;

import br.com.cwi.curser.controller.request.IncluirUsuarioRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;


import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.*;

@Component
public class IncluirUsuarioValidator {

    public static final int TAMANHO_MINIMO = 3;

    public void validar(IncluirUsuarioRequest request){

        if(isNull(request)){
            throw  new ResponseStatusException(BAD_REQUEST, "Dados não informados");
        }

        if(isNull(request.getNome())){
            throw  new ResponseStatusException(BAD_REQUEST, "Nome é obrigatório");
        }

        if(request.getNome().trim().length() < TAMANHO_MINIMO){
            throw  new ResponseStatusException(BAD_REQUEST, "Nome deve ter pelo menos 3 caracteres");
        }
    }
}
