package br.com.cwi.gerenciamento.de.tarefas.mapper;

import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefaResumidaResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;

public class ListarTarefaMapper {
    public static TarefaResumidaResponse toResponse(Tarefa entity) {
        return TarefaResumidaResponse.builder()
                .id(entity.getId())
                .titulo(entity.getTitulo())
                .Descricao(entity.getDescricao())
                .build();
    }
}
