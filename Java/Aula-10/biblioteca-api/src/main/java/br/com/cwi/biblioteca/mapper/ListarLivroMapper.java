package br.com.cwi.biblioteca.mapper;


import br.com.cwi.biblioteca.controller.response.ListarLivroResponse;
import br.com.cwi.biblioteca.security.domain.Livro;

public class ListarLivroMapper {
    public static ListarLivroResponse toResponse(Livro livro) {
        return ListarLivroResponse.builder()
                .nome(livro.getNome())
                .descricao(livro.getDescricao())
                .ano_publicacao(livro.getAno_publicacao())
                .build();
    }
}
