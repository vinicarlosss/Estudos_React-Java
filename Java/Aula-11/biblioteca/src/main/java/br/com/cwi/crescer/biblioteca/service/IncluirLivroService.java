package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.controller.request.LivroRequest;
import br.com.cwi.crescer.biblioteca.controller.response.LivroResponse;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.mapper.LivroMapper;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import br.com.cwi.crescer.biblioteca.service.core.NowService;
import br.com.cwi.crescer.biblioteca.service.core.ValidaTituloUnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.crescer.biblioteca.domain.Situacao.ATIVO;

@Service
public class IncluirLivroService {

    @Autowired
    private ValidaTituloUnicoService validaTituloUnicoService;

    @Autowired
    private NowService nowService;

    @Autowired
    private LivroRepository repository;

    @Transactional
    public LivroResponse incluir(LivroRequest request) {

        Livro livro = LivroMapper.toEntity(request);

        validaTituloUnicoService.validar(request.getTitulo());

        livro.setSituacao(ATIVO);
        livro.setDataInclusao(nowService.getDate());

        repository.save(livro);

        return LivroMapper.toResponse(livro);
    }
}
