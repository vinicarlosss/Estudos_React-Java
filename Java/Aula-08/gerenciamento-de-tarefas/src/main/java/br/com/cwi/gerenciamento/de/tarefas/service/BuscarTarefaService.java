package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class BuscarTarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    public Tarefa porId(Long tarefaId) {
        return tarefaRepository.findById(tarefaId)
                .orElseThrow(()-> new ResponseStatusException(UNPROCESSABLE_ENTITY, "Tarefa não encontrada"));
    }
}
