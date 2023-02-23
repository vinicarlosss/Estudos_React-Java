package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.HabilitacaoRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosAlterarMotoristaService;
import br.com.cwi.melevaaijava.validator.DadosMotoristaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.AlterarMotoristaMapper.toEntity;

@Service
public class AlterarMotoristaService {

    @Autowired
    private DadosMotoristaValidator dadosMotoristaValidator;
    @Autowired
    private ValidaDadosAlterarMotoristaService validaDadosAlterarMotoristaService;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;
    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private HabilitacaoRepository habilitacaoRepository;

    @Transactional
    public void alterar(Long id, DadosMotoristaRequest request) {
        dadosMotoristaValidator.validar(request);
        Motorista motorista = buscaMotoristaService.porId(id);
        validaDadosAlterarMotoristaService.validar(motorista, request);

        Motorista motoristaAlterado = toEntity(motorista, request);

        habilitacaoRepository.save(motoristaAlterado.getHabilitacao());
        motoristaRepository.save(motoristaAlterado);
    }
}
