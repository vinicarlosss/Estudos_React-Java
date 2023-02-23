package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.AlterarTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefaResumidaResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import br.com.cwi.gerenciamento.de.tarefas.validator.AlterarTarefaValidator;
import br.com.cwi.gerenciamento.de.tarefas.validator.IncluirTarefaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.gerenciamento.de.tarefas.mapper.AlterarTarefaMapper.change;
import static br.com.cwi.gerenciamento.de.tarefas.mapper.AlterarTarefaMapper.toResponse;

@Service
public class AlterarTarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;
    @Autowired
    private BuscarTarefaService buscarTarefaService;
    @Autowired
    private AlterarTarefaValidator alterarTarefaValidator;
    @Autowired
    private ValidaTituloUnicoService validaTituloUnicoService;


    public TarefaResumidaResponse alterar(Long id, AlterarTarefaRequest request) {

        alterarTarefaValidator.validar(request);
        validaTituloUnicoService.validar(request.getTitulo());
        Tarefa tarefa = buscarTarefaService.porId(id);
        tarefa = change(tarefa, request);
        tarefaRepository.save(tarefa);
        return toResponse(tarefa);
    }
}
