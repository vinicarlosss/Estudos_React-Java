package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.controller.request.AlterarLivroRequest;
import br.com.cwi.crescer.biblioteca.controller.response.AlterarLivroResponse;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import br.com.cwi.crescer.biblioteca.service.core.BuscarLivroService;
import br.com.cwi.crescer.biblioteca.service.core.ValidaTituloUnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.crescer.biblioteca.mapper.AlterarLivroMapper.toResponse;
import static java.util.Objects.nonNull;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class AlterarLivroService {

    @Autowired
    private BuscarLivroService buscarLivroService;
    @Autowired
    private LivroRepository livroRepository;
    @Autowired
    private ValidaTituloUnicoService validaTituloUnicoService;

    @Transactional
    public AlterarLivroResponse alterar(Long livroId, AlterarLivroRequest request) {

        Livro livro = buscarLivroService.porId(livroId);

        if (nonNull(livro.getResponsavel())) {
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "livros alugados não podem ser alterados");
        }

        validaTituloUnicoService.validar(request.getTitulo());

        livro.setTitulo(request.getTitulo());
        livro.setDataDevolucao(request.getData_devolucao());

        livroRepository.save(livro);

        return toResponse(livro);
    }
}
