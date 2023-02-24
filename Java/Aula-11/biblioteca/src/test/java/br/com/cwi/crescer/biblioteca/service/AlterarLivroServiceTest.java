package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.controller.request.AlterarLivroRequest;
import br.com.cwi.crescer.biblioteca.controller.request.LivroRequest;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.factories.LivroFactory;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import br.com.cwi.crescer.biblioteca.service.core.BuscarLivroService;
import br.com.cwi.crescer.biblioteca.service.core.NowService;
import br.com.cwi.crescer.biblioteca.service.core.ValidaTituloUnicoService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;

import static java.util.Optional.of;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.never;

@ExtendWith(MockitoExtension.class)
public class AlterarLivroServiceTest {

    @InjectMocks
    private AlterarLivroService tested;
    @Mock
    private NowService nowService;
    @Mock
    private BuscarLivroService buscarLivroService;
    @Mock
    private LivroRepository livroRepository;
    @Mock
    private ValidaTituloUnicoService validaTituloUnicoService;

    @Test
    @DisplayName("Deve alterar título e data de devolução e retornar os detalhes do livro alugado")
    void deveAlterarLivro(){

        Livro livro = LivroFactory.getDisponivel();
        Long livroId = livro.getId();
        AlterarLivroRequest request = new AlterarLivroRequest();
        LocalDate hoje = LocalDate.now();
        request.setTitulo("Livro novo");
        request.setData_devolucao(hoje);

        when(buscarLivroService.porId(livroId)).thenReturn(livro);

        tested.alterar(livroId, request);

        assertEquals(request.getTitulo(), livro.getTitulo());
        assertEquals(request.getData_devolucao(), livro.getDataDevolucao());
    }

    @Test
    @DisplayName("Não deve alterar um livro se o título for igual a um já existente")
    void naoDeveAlterarParaTituloQueJaExiste(){
        Livro livro = LivroFactory.getDisponivel();
        Long livroId = livro.getId();
        AlterarLivroRequest request = new AlterarLivroRequest();
        request.setTitulo("Livro de teste");

        doThrow(ResponseStatusException.class)
                .when(validaTituloUnicoService).validar(request.getTitulo());

        when(buscarLivroService.porId(livroId)).thenReturn(livro);

        assertThrows(ResponseStatusException.class, () -> {
            tested.alterar(livroId, request);
        });

        verify(livroRepository, never()).save(livro);

    }

    @Test
    @DisplayName("Não deve alterar livro que estiver alugado")
    void naoDeveAlterarLivroAlugado(){
        Livro livro = LivroFactory.getAlugado();
        Long livroId = livro.getId();
        AlterarLivroRequest request = new AlterarLivroRequest();
        LocalDate hoje = LocalDate.now();
        request.setTitulo("Livro novo");
        request.setData_devolucao(hoje);

        when(buscarLivroService.porId(livroId)).thenReturn(livro);
        Assertions.assertThrows(ResponseStatusException.class, () ->{
           tested.alterar(livroId, request);
        });
        verify(livroRepository, never()).save(livro);
    }
}
