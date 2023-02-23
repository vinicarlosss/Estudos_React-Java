package br.com.cwi.biblioteca.service;

import br.com.cwi.biblioteca.controller.request.IncluirLivroRequest;
import br.com.cwi.biblioteca.controller.response.IncluirLivroResponse;
import br.com.cwi.biblioteca.mapper.IncluirLivroMapper;
import br.com.cwi.biblioteca.repository.LivroRepository;
import br.com.cwi.biblioteca.security.domain.Livro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.biblioteca.mapper.IncluirLivroMapper.toEntity;
import static br.com.cwi.biblioteca.mapper.IncluirLivroMapper.toResponse;

@Service
public class IncluirLivroService {

    @Autowired
    private LivroRepository livroRepository;


    public IncluirLivroResponse incluir(IncluirLivroRequest request) {

        Livro livro = toEntity(request);

        livroRepository.save(livro);

        return toResponse(livro);
    }
}
