package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.domain.Veiculo;
import br.com.cwi.melevaaijava.repository.VeiculoRepository;
import br.com.cwi.melevaaijava.service.search.BuscaVeiculoService;
import br.com.cwi.melevaaijava.service.validator.ValidaDadosExcluirVeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ExcluirVeiculoService {
    @Autowired
    private ValidaDadosExcluirVeiculoService validaDadosExcluirVeiculoService;
    @Autowired
    private BuscaVeiculoService buscaVeiculoService;
    @Autowired
    private VeiculoRepository veiculoRepository;

    @Transactional
    public void excluir(Long id) {
        Veiculo veiculo = buscaVeiculoService.porId(id);
        validaDadosExcluirVeiculoService.validar(veiculo);

        veiculo.setAtivo(false);

        veiculoRepository.save(veiculo);
    }
}
