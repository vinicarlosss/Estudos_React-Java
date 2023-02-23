package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.domain.Habilitacao;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.HabilitacaoRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosIncluirMotoristaService;
import br.com.cwi.melevaaijava.validator.DadosMotoristaValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.IdResponseMapper.toResponse;
import static br.com.cwi.melevaaijava.mapper.IncluirMotoristaMapper.toEntity;

@Service
public class IncluirMotoristaService {

    @Autowired
    private DadosMotoristaValidator dadosMotoristaValidator;
    @Autowired
    private ValidaDadosIncluirMotoristaService validaDadosIncluirMotoristaService;
    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private HabilitacaoRepository habilitacaoRepository;

    @Transactional
    public IdResponse incluir(DadosMotoristaRequest request) {
        dadosMotoristaValidator.validar(request);
        validaDadosIncluirMotoristaService.validar(request);

        Habilitacao habilitacao = Habilitacao.builder()
                .numero(request.getNumeroHabilitacao())
                .categoria(request.getCategoria())
                .dataVencimento(request.getDataVencimento())
                .build();

        habilitacaoRepository.save(habilitacao);

        Motorista motorista = toEntity(request, habilitacao);

        motoristaRepository.save(motorista);

        return toResponse(motorista.getId());
    }
}
