package br.com.cwi.crescer.biblioteca.service.core;

import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarLivroService {

    @Autowired
    private LivroRepository repository;

    public Livro porId(Long id) {
        return repository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "livro não encontrado"));
    }
}
