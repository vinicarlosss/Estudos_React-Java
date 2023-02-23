package br.com.cwi.api.service;

import br.com.cwi.api.controller.request.AlterarFilmeRequest;
import br.com.cwi.api.controller.response.AlterarFilmeResponse;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import br.com.cwi.api.validator.AlterarFilmeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import static br.com.cwi.api.mapper.AlterarFilmeMapper.toResponse;

@Service
public class AlterarFilmeService {
    @Autowired
    private FilmeRepository filmeRepository;
    @Autowired
    private AlterarFilmeValidator alterarFilmeValidator;
    public AlterarFilmeResponse alterar(Long id, AlterarFilmeRequest request){

        alterarFilmeValidator.validar(request, id);
        Filme filme = filmeRepository.findById(id).get();
        filme.setTitulo(request.getTitulo());
        filme.setDescricao(request.getDescricao());
        filme.setCategoria(request.getCategoria());
        filme.setImagem(request.getImagem());
        filmeRepository.save(filme);
        return toResponse(filme);
    }
}
