package br.com.cwi.gerenciamento.de.tarefas.mapper;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.IncluirTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;

public class IncluirTarefaMapper {
    public static Tarefa toEntity(IncluirTarefaRequest request) {
        return Tarefa.builder()
                .titulo(request.getTitulo())
                .descricao(request.getDescricao())
                .ativa(true)
                .build();
    }
}
