package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import br.com.cwi.melevaaijava.controller.response.NovoSaldoResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosDepositoService;
import br.com.cwi.melevaaijava.validator.DadosOperacaoCarteiraValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.NovoSaldoPassageiroMapper.toResponse;

@Service
public class DepositarValorService {

    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    @Autowired
    private DadosOperacaoCarteiraValidator dadosOperacaoCarteiraValidator;
    @Autowired
    private ValidaDadosDepositoService validaDadosDepositoService;
    @Autowired
    private PassageiroRepository passageiroRepository;

    @Transactional
    public NovoSaldoResponse depositar(Long id, DadosOperacaoCarteiraRequest request) {
        dadosOperacaoCarteiraValidator.validar(request);
        validaDadosDepositoService.validar(request);
        Passageiro passageiro = buscaPassageiroService.porId(id);
        passageiro.depositar(request.getValor());

        passageiroRepository.save(passageiro);

        return toResponse(passageiro);
    }
}
