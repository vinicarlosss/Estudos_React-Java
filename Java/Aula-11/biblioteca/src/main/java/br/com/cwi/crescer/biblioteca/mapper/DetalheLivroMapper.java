package br.com.cwi.crescer.biblioteca.mapper;

import br.com.cwi.crescer.biblioteca.controller.response.DetalheLivroResponse;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.security.domain.Usuario;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

public class DetalheLivroMapper {

    public static DetalheLivroResponse toResponse(Livro livro) {

        if (isNull(livro)) {
            return DetalheLivroResponse.builder().build();
        }

        return DetalheLivroResponse.builder()
                .id(livro.getId())
                .titulo(livro.getTitulo())
                .situacao(livro.getSituacao())
                .dataInclusao(livro.getDataInclusao())
                .dataDevolucao(livro.getDataDevolucao())
                .responsavelId(getResponsavelId(livro.getResponsavel()))
                .build();
    }

    private static Long getResponsavelId(Usuario responsavel) {
        return nonNull(responsavel) ? responsavel.getId() : null;
    }
}
