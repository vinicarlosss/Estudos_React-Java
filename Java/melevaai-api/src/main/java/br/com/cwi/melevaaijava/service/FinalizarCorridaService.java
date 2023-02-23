package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.FinalizarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.search.BuscaCorridaService;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import br.com.cwi.melevaaijava.validator.FinalizarCorridaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.FinalizarCorridaMapper.toEntity;
import static br.com.cwi.melevaaijava.mapper.FinalizarCorridaMapper.toResponse;

@Service
public class FinalizarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;
    @Autowired
    private BuscaCorridaService buscaCorridaService;
    @Autowired
    private FinalizarCorridaValidator finalizarCorridaValidator;
    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    @Autowired
    private PassageiroRepository passageiroRepository;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;
    @Autowired
    private MotoristaRepository motoristaRepository;

    @Transactional
    public FinalizarCorridaResponse finalizar(Long id) {
        Corrida corridaAtual = buscaCorridaService.porId(id);
        Corrida corrridaAtualizada = toEntity(corridaAtual);
        finalizarCorridaValidator.validar(corridaAtual, corrridaAtualizada);

        corridaRepository.save(corrridaAtualizada);

        return toResponse(corrridaAtualizada);
    }
}
