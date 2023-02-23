package br.com.cwi.gerenciamento.de.tarefas.validator;

import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class RemoverTarefaValidator {
    public void validar(Tarefa tarefa) {
        if(!tarefa.isAtiva()){
            throw new ResponseStatusException(BAD_REQUEST, "Somente tarefas ativas podem ser removidas");
        }
    }
}
