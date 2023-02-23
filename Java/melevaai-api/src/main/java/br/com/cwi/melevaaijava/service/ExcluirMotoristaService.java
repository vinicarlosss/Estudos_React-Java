package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosExcluirMotoristaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExcluirMotoristaService {

    @Autowired
    private ValidaDadosExcluirMotoristaService validaDadosExcluirMotoristaService;
    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;

    @Transactional
    public void excluir(Long id) {
        Motorista motorista = buscaMotoristaService.porId(id);
        validaDadosExcluirMotoristaService.validar(motorista);

        motorista.setAtivo(false);

        motoristaRepository.save(motorista);
    }
}