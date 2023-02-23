package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosExcluirPassageiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExcluirPassageiroService {

    @Autowired
    private ValidaDadosExcluirPassageiroService validaDadosExcluirVeiculoService;
    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    @Autowired
    private PassageiroRepository passageiroRepository;

    @Transactional
    public void excluir(Long id) {
        Passageiro passageiro = buscaPassageiroService.porId(id);
        validaDadosExcluirVeiculoService.validar(passageiro);

        passageiro.setAtivo(false);

        passageiroRepository.save(passageiro);
    }
}
