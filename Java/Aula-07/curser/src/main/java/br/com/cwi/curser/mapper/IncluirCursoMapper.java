package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.request.IncluirCursoRequest;
import br.com.cwi.curser.domain.Curso;

public class IncluirCursoMapper {
    public static Curso toEntity(IncluirCursoRequest request) {
        return Curso.builder()
                .titulo(request.getTitulo())
                .tipo(request.getTipo())
                .nivel(request.getNivel())
                .dataInicio(request.getDataInicio() )
                .build();
    }
}
