package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class ValidaTituloUnicoService {
    @Autowired
    private TarefaRepository tarefaRepository;

    public void validar(String titulo){
        if(tarefaRepository.existsByTitulo(titulo)){
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "Já existe uma tarefa com este título");
        }
    }
}
