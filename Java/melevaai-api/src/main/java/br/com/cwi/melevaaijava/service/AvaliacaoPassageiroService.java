package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosAvaliacaoRequest;
import br.com.cwi.melevaaijava.controller.response.AvaliacaoCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.search.BuscaCorridaService;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosAvaliacaoPassageiroService;
import br.com.cwi.melevaaijava.validator.DadosAvaliacaoValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static br.com.cwi.melevaaijava.mapper.AvalicaoCorridaPassageiroMapper.toEntity;
import static br.com.cwi.melevaaijava.mapper.AvalicaoCorridaPassageiroMapper.toResponse;

@Service
public class AvaliacaoPassageiroService {


    @Autowired
    private CorridaRepository corridaRepository;
    @Autowired
    private PassageiroRepository passageiroRepository;
    @Autowired
    private BuscaCorridaService buscaCorridaService;
    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    @Autowired
    private DadosAvaliacaoValidator dadosAvaliacaoValidator;
    @Autowired
    private ValidaDadosAvaliacaoPassageiroService validaDadosAvaliacaoPassageiroService;

    @Transactional
    public AvaliacaoCorridaResponse avaliar(Long id, DadosAvaliacaoRequest request) {
        dadosAvaliacaoValidator.validar(request);
        Corrida corrida = buscaCorridaService.porId(id);
        validaDadosAvaliacaoPassageiroService.validar(corrida);
        List<Corrida> corridasPassageiro = corridaRepository.findAllByPassageiro(corrida.getPassageiro());

        Corrida corridaAtualizada = toEntity(corrida, request, corridasPassageiro);

        corridaRepository.save(corridaAtualizada);

        return  toResponse(corridaAtualizada);
    }
}
