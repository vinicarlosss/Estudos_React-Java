package br.com.cwi.crescer.biblioteca.mapper;

import br.com.cwi.crescer.biblioteca.controller.request.LivroRequest;
import br.com.cwi.crescer.biblioteca.controller.response.LivroResponse;
import br.com.cwi.crescer.biblioteca.domain.Livro;

public class LivroMapper {

    public static Livro toEntity(LivroRequest request) {
        Livro livro = new Livro();
        livro.setTitulo(request.getTitulo());
        return livro;
    }

    public static LivroResponse toResponse(Livro livro) {
        return LivroResponse.builder()
                .id(livro.getId())
                .titulo(livro.getTitulo())
                .situacao(livro.getSituacao())
                .build();
    }
}
