package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import br.com.cwi.melevaaijava.controller.response.NovoSaldoResponse;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosSaqueService;
import br.com.cwi.melevaaijava.validator.DadosOperacaoCarteiraValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.melevaaijava.mapper.NovoSaldoMotoristaMapper.toResponse;

@Service
public class SacarValorService {

    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;
    @Autowired
    private DadosOperacaoCarteiraValidator dadosOperacaoCarteiraValidator;
    @Autowired
    private ValidaDadosSaqueService validaDadosSaqueService;

    public NovoSaldoResponse sacar(Long id, DadosOperacaoCarteiraRequest request) {

        dadosOperacaoCarteiraValidator.validar(request);
        Motorista motorista = buscaMotoristaService.porId(id);
        validaDadosSaqueService.validar(motorista, request);
        motorista.sacar(request.getValor());
        motoristaRepository.save(motorista);

        return toResponse(motorista);
    }
}
