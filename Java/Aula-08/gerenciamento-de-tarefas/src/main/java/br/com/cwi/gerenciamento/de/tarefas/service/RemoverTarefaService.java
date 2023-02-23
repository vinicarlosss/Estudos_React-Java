package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import br.com.cwi.gerenciamento.de.tarefas.validator.RemoverTarefaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RemoverTarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;
    @Autowired
    private BuscarTarefaService buscarTarefaService;
    @Autowired
    private RemoverTarefaValidator removerTarefaValidator;

    public void remover(Long tarefaId) {
        Tarefa tarefa = buscarTarefaService.porId(tarefaId);
        removerTarefaValidator.validar(tarefa);
        tarefa.setAtiva(false);

        tarefaRepository.save(tarefa);
    }
}
