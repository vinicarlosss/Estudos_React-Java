package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import br.com.cwi.crescer.biblioteca.service.core.BuscarLivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class DevolverLivroService {

    @Autowired
    private BuscarLivroService buscarLivroService;

    @Autowired
    private LivroRepository livroRepository;

    @Transactional
    public void devolver(Long livroId) {

        Livro livro = buscarLivroService.porId(livroId);

        if (isNull(livro.getResponsavel())) {
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "livro está disponível");
        }

        livro.setResponsavel(null);
        livro.setDataDevolucao(null);

        livroRepository.save(livro);
    }
}















