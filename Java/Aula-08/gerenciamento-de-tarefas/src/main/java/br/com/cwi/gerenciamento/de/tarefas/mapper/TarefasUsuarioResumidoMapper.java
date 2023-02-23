package br.com.cwi.gerenciamento.de.tarefas.mapper;

import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefasUsuarioResumidoResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;

public class TarefasUsuarioResumidoMapper {
    public static TarefasUsuarioResumidoResponse toResponse(Tarefa entity) {
        return  TarefasUsuarioResumidoResponse.builder()
                .tarefa_titulo(entity.getTitulo())
                .tarefa_descricao(entity.getDescricao())
                .tarefa_ativa(entity.isAtiva())
                .build();
    }
}
