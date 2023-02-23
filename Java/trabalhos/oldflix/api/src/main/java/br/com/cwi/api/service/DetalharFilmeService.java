package br.com.cwi.api.service;

import br.com.cwi.api.controller.response.DetalharFilmeResponse;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.mapper.DetalharFilmeMapper;
import br.com.cwi.api.repository.FilmeRepository;
import br.com.cwi.api.validator.DetalharFilmeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetalharFilmeService {

    @Autowired
    FilmeRepository filmeRepository;
    @Autowired
    private DetalharFilmeValidator detalharFilmeValidator;

    public DetalharFilmeResponse detalhar(Long id) {
        detalharFilmeValidator.validar(id);
        Filme filme = filmeRepository.findById(id).get();
        return DetalharFilmeMapper.toResponse(filme);
    }
}
