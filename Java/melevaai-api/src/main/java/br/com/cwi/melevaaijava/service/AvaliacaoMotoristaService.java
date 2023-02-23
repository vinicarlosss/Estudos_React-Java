package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosAvaliacaoRequest;
import br.com.cwi.melevaaijava.controller.response.AvaliacaoCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.service.search.BuscaCorridaService;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosAvaliacaoMotoristaService;
import br.com.cwi.melevaaijava.validator.DadosAvaliacaoValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static br.com.cwi.melevaaijava.mapper.AvaliacaoCorridaMotoristaMapper.toEntity;
import static br.com.cwi.melevaaijava.mapper.AvaliacaoCorridaMotoristaMapper.toResponse;

@Service
public class AvaliacaoMotoristaService {

    @Autowired
    private CorridaRepository corridaRepository;
    @Autowired
    private BuscaCorridaService buscaCorridaService;
    @Autowired
    private DadosAvaliacaoValidator dadosAvaliacaoValidator;
    @Autowired
    private ValidaDadosAvaliacaoMotoristaService validaDadosAvaliacaoMotoristaService;
    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;

    @Transactional
    public AvaliacaoCorridaResponse avaliar(Long idCorrida, DadosAvaliacaoRequest request) {
        dadosAvaliacaoValidator.validar(request);
        Corrida corrida = buscaCorridaService.porId(idCorrida);
        validaDadosAvaliacaoMotoristaService.validar(corrida);
        List<Corrida> corridasMotorista = corridaRepository.findAllByMotorista(corrida.getMotorista());

        Corrida corridaAtualizada = toEntity(corrida, request, corridasMotorista);

        corridaRepository.save(corridaAtualizada);

        return toResponse(corridaAtualizada);
    }
}
