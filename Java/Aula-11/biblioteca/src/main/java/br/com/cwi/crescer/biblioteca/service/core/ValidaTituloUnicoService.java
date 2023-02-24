package br.com.cwi.crescer.biblioteca.service.core;

import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class ValidaTituloUnicoService {

    @Autowired
    private LivroRepository repository;

    public void validar(String titulo) {

        boolean existeOutroLivroComMesmotitulo = repository.existsByTitulo(titulo);

        if (existeOutroLivroComMesmotitulo) {
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "título do livro deve ser único");
        }
    }
}
