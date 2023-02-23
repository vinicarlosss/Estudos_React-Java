package br.com.cwi.biblioteca.mapper;

import br.com.cwi.biblioteca.controller.request.IncluirLivroRequest;
import br.com.cwi.biblioteca.controller.response.IncluirLivroResponse;
import br.com.cwi.biblioteca.security.domain.Livro;

public class IncluirLivroMapper {
    public static Livro toEntity(IncluirLivroRequest request) {
        return Livro.builder()
                .nome(request.getNome())
                .descricao(request.getDescricao())
                .ano_publicacao(request.getAno_publicacao())
                .build();
    }

    public static IncluirLivroResponse toResponse(Livro livro) {
        return IncluirLivroResponse.builder()
                .id(livro.getId())
                .build();
    }
}
