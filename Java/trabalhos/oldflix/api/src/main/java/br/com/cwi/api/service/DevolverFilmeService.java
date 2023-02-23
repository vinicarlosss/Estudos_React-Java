package br.com.cwi.api.service;

import br.com.cwi.api.controller.response.DevolverFilmeResponse;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import br.com.cwi.api.validator.DevolverFilmeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.api.mapper.DevolverFilmeMapper.toResponse;

@Service
public class DevolverFilmeService {

    @Autowired
    private FilmeRepository filmeRepository;
    @Autowired
    DevolverFilmeValidator devolverFilmeValidator;

    public DevolverFilmeResponse devolver(Long id) {


        devolverFilmeValidator.validar(id);
        Filme filme = filmeRepository.findById(id).get();
        filme.setDisponivel(true);
        filme.setDataRetirada(null);
        filme.setResponsavel(null);
        filmeRepository.save(filme);
        return toResponse(filme);
    }
}
