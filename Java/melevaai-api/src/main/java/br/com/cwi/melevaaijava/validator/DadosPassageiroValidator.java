package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class DadosPassageiroValidator {

    private static int TAMANHO_MINIMO = 3;
    private static int TAMANHO_CPF = 11;

    public void validar(DadosPassageiroRequest request) {

        if(isNull(request)){
            throw new ResponseStatusException(BAD_REQUEST, "Dados não informados");
        }

        if(isNull(request.getNome())){
            throw new ResponseStatusException(BAD_REQUEST, "Nome é obrigatório");
        }

        if(request.getNome().trim().length() < TAMANHO_MINIMO){
            throw new ResponseStatusException(BAD_REQUEST, "Nome deve ter no mínimo 3 caracteres");
        }

        if(isNull(request.getData_nascimento())){
            throw new ResponseStatusException(BAD_REQUEST, "Data de nascimento é obrigatória");
        }

        if(isNull(request.getCpf())){
            throw new ResponseStatusException(BAD_REQUEST, "Cpf é obrigatório");
        }

        if(request.getCpf().trim().length() != TAMANHO_CPF){
            throw new ResponseStatusException(BAD_REQUEST, "Cpf deve ter 11 caracteres");
        }

    }
}
