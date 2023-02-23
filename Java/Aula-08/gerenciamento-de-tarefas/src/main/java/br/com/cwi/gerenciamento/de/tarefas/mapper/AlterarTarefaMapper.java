package br.com.cwi.gerenciamento.de.tarefas.mapper;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.AlterarTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefaResumidaResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class AlterarTarefaMapper {

    @Autowired
    private static TarefaResumidaResponse tarefaResumidaResponse;

    public static Tarefa change(Tarefa tarefa, AlterarTarefaRequest request) {

        tarefa.setTitulo(request.getTitulo());
        tarefa.setDescricao(request.getDescricao());

        return  tarefa;
    }

    public static TarefaResumidaResponse toResponse(Tarefa tarefa) {

        return tarefaResumidaResponse.builder()
                .id(tarefa.getId())
                .titulo(tarefa.getTitulo())
                .Descricao(tarefa.getDescricao())
                .build();
    }
}
