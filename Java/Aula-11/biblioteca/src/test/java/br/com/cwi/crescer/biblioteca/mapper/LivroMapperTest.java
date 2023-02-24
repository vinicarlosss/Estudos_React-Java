package br.com.cwi.crescer.biblioteca.mapper;

import br.com.cwi.crescer.biblioteca.controller.response.DetalheLivroResponse;
import br.com.cwi.crescer.biblioteca.controller.response.LivroResponse;
import br.com.cwi.crescer.biblioteca.factories.LivroFactory;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)
class LivroMapperTest {

    @Test
    @DisplayName("Deve retornar response completo quando request completo")
    void deveRetornarResponseCompleto() {

        Livro livro = LivroFactory.getAlugado();

        LivroResponse response = LivroMapper.toResponse(livro);

        assertEquals(livro.getId(), response.getId());
        assertEquals(livro.getTitulo(), response.getTitulo());
        assertEquals(livro.getSituacao(), response.getSituacao());
    }

    @Test
    @DisplayName("Deve retornar response vazio quando request for nulo")
    void deveRetornarResponseVazio() {

        DetalheLivroResponse response = DetalheLivroMapper.toResponse(null);

        assertNotNull(response);
    }
}