package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.IniciarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import br.com.cwi.melevaaijava.service.search.BuscaCorridaService;
import br.com.cwi.melevaaijava.validator.IniciarCorridaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.IniciarCorridaMapper.toEntity;
import static br.com.cwi.melevaaijava.mapper.IniciarCorridaMapper.toResponse;

@Service
public class IniciarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;
    @Autowired
    private BuscaCorridaService buscaCorridaService;
    @Autowired
    private IniciarCorridaValidator iniciarCorridaValidator;

    @Transactional
    public IniciarCorridaResponse iniciar(Long id) {
        Corrida corrida = buscaCorridaService.porId(id);
        iniciarCorridaValidator.validar(corrida);
        Corrida corridaAtualizada = toEntity(corrida);

        corridaRepository.save(corridaAtualizada);

        return toResponse(corridaAtualizada);
    }
}
