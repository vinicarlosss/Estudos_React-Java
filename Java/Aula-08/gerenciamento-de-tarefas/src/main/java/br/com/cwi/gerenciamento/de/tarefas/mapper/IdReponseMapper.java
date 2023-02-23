package br.com.cwi.gerenciamento.de.tarefas.mapper;

import br.com.cwi.gerenciamento.de.tarefas.controller.response.IdResponse;

public class IdReponseMapper {

    public static IdResponse toResponse(Long id) {
        return IdResponse.builder()
                .id(id)
                .build();
    }
}
