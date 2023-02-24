package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.factories.LivroFactory;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static br.com.cwi.crescer.biblioteca.domain.Situacao.INATIVO;
import static br.com.cwi.crescer.biblioteca.factories.SimpleFactory.getRandomLong;
import static java.util.Optional.of;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RemoverLivroServiceTest {

    @InjectMocks
    private RemoverLivroService tested;

    @Mock
    private LivroRepository livroRepository;




    @Test
    @DisplayName("Deve remover (mais completo) livro com sucesso")
    void deveRemoverMaisCompleto() {

        Livro livro = LivroFactory.getDisponivel();
        Long livroId = livro.getId();

        when(livroRepository.findById(livroId)).thenReturn(of(livro));

        tested.removerMaisCompleto(livroId);

        verify(livroRepository).findById(livroId);
        verify(livroRepository).save(livro);

        assertEquals(INATIVO, livro.getSituacao());
    }





















    @Test
    @DisplayName("Deve remover livro com sucesso")
    void deveRemover() {

        Long livroId = getRandomLong();

        tested.remover(livroId);

        verify(livroRepository).deleteById(livroId);
    }
}