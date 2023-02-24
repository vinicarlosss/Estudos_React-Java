package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.controller.response.LivroResponse;
import br.com.cwi.crescer.biblioteca.mapper.LivroMapper;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import static br.com.cwi.crescer.biblioteca.domain.Situacao.ATIVO;

@Service
public class ListarLivroService {

    @Autowired
    private LivroRepository livroRepository;

    public Page<LivroResponse> listar(Pageable pageable) {

        Page<Livro> livros = livroRepository.findAllBySituacao(ATIVO, pageable);

        Page<LivroResponse> response = livros.map(livro -> LivroMapper.toResponse(livro));

        return response;
    }
}
