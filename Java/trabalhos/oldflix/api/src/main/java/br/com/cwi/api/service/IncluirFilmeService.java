package br.com.cwi.api.service;

import br.com.cwi.api.controller.request.IncluirFilmeRequest;
import br.com.cwi.api.controller.response.IncluirFilmeResponse;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import br.com.cwi.api.validator.IncluirFilmeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.api.mapper.InlcuirFilmeMapper.toEntity;
import static br.com.cwi.api.mapper.InlcuirFilmeMapper.toResponse;

@Service
public class IncluirFilmeService {

    @Autowired
    private FilmeRepository filmeRepository;
    @Autowired
    private IncluirFilmeValidator incluirFilmeValidator;

    public IncluirFilmeResponse incluir(IncluirFilmeRequest request){

        incluirFilmeValidator.validar(request);
        Filme filme = toEntity(request);
        filmeRepository.save(filme);
        return toResponse(filme);
    }
}
