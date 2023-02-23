package br.com.cwi.gerenciamento.de.tarefas.validator;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.IncluirTarefaRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class IncluirTarefaValidator {
    public static final int TAMANHO_MINIMO = 3;

    public void validar(IncluirTarefaRequest request){

        if(isNull(request)){
            throw new ResponseStatusException(BAD_REQUEST, "Dados não informados");
        }

        if(isNull(request.getTitulo())){
            throw new ResponseStatusException(BAD_REQUEST, "Título é obrigatório");
        }

        if(isNull(request.getTitulo().trim().length() < TAMANHO_MINIMO)){
            throw new ResponseStatusException(BAD_REQUEST, "Título deve ter pelo menos 3 caracteres");
        }

        if(isNull(request.getDescricao())){
            throw new ResponseStatusException(BAD_REQUEST, "Descrição é obrigatório");
        }


        if(isNull(request.getDescricao().trim().length() < TAMANHO_MINIMO)){
            throw new ResponseStatusException(BAD_REQUEST, "Descrição deve ter pelo menos 3 caracteres");
        }
    }
}
