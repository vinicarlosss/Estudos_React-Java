package br.com.cwi.crescer.biblioteca.mapper;

import br.com.cwi.crescer.biblioteca.controller.response.AlterarLivroResponse;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.factories.LivroFactory;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class AlterarLivroMapperTest {

    @Test
    @DisplayName("Deve retornar response com id, título e data de devolução")
    void deveRetornarResponseCompleto(){
        Livro livro = LivroFactory.getDisponivel();

        AlterarLivroResponse response = AlterarLivroMapper.toResponse(livro);

        assertEquals(livro.getId(), response.getId());
        assertEquals(livro.getTitulo(), response.getTitulo());
        assertEquals(livro.getDataDevolucao(), response.getData_devolucao());
    }
}
