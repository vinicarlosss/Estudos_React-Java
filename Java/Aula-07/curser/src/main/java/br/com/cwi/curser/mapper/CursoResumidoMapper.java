package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.response.CursoResumidoResponse;
import br.com.cwi.curser.domain.Curso;

public class CursoResumidoMapper {
    public static CursoResumidoResponse toResponse(Curso entity) {
        return CursoResumidoResponse.builder()
                .id(entity.getId())
                .titulo(entity.getTitulo())
                .dataInicio(entity.getDataInicio())
                .build();
    }
}
