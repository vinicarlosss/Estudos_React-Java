package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.response.CursoResumidoPaginadoResponse;
import br.com.cwi.curser.domain.Curso;

public class CursoResumidoPaginadoMapper {
    public static CursoResumidoPaginadoResponse toResponse(Curso entity) {
        return CursoResumidoPaginadoResponse.builder()
                .titulo(entity.getTitulo())
                .build();
    }
}
