package br.com.cwi.api.service;

import br.com.cwi.api.controller.request.AlugarFilmeRequest;
import br.com.cwi.api.controller.response.AlugarFilmeResponse;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import br.com.cwi.api.validator.AlugarFilmeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static br.com.cwi.api.mapper.AlugarFilmeMapper.toResponse;

@Service
public class AlugarFilmeService {

    @Autowired
    private FilmeRepository filmeRepository;
    @Autowired
    private AlugarFilmeValidator alugarFilmeValidator;

    public AlugarFilmeResponse alugar(Long id, AlugarFilmeRequest request){

        alugarFilmeValidator.validar(request, id);
        Filme filme = filmeRepository.findById(id).get();
        LocalDate data = LocalDate.now();
        filme.setDisponivel(false);
        filme.setDataRetirada(data);
        filme.setResponsavel(request.getResponsavel());
        filmeRepository.save(filme);
        return toResponse(filme);
    }
}
