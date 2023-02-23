package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.IncluirTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.controller.response.IdResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import br.com.cwi.gerenciamento.de.tarefas.validator.IncluirTarefaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.gerenciamento.de.tarefas.mapper.IdReponseMapper.toResponse;
import static br.com.cwi.gerenciamento.de.tarefas.mapper.IncluirTarefaMapper.toEntity;

@Service
@Transactional
public class InlcuirTarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;
    @Autowired
    private ValidaTituloUnicoService validaTituloUnicoService;
    @Autowired
    private IncluirTarefaValidator incluirTarefaValidator;

    public IdResponse incluir(IncluirTarefaRequest request) {
        incluirTarefaValidator.validar(request);
        validaTituloUnicoService.validar(request.getTitulo());

        Tarefa tarefa = toEntity(request);

        tarefaRepository.save(tarefa);

        return toResponse(tarefa.getId());
    }
}
