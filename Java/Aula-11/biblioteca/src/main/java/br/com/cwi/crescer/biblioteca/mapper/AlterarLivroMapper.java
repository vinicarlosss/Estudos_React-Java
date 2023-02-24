package br.com.cwi.crescer.biblioteca.mapper;

import br.com.cwi.crescer.biblioteca.controller.response.AlterarLivroResponse;
import br.com.cwi.crescer.biblioteca.domain.Livro;

public class AlterarLivroMapper {

    public static AlterarLivroResponse toResponse(Livro livro) {
        return AlterarLivroResponse.builder()
                .id(livro.getId())
                .titulo(livro.getTitulo())
                .data_devolucao(livro.getDataDevolucao())
                .build();
    }
}
