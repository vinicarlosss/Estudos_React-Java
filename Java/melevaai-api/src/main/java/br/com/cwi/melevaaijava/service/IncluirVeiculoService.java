package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosVeiculoRequest;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Veiculo;
import br.com.cwi.melevaaijava.repository.VeiculoRepository;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.validator.DadosVeiculoValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.IdResponseMapper.toResponse;
import static br.com.cwi.melevaaijava.mapper.IncluirVeiculoMapper.toEntity;

@Service
public class IncluirVeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;
    @Autowired
    private DadosVeiculoValidator dadosVeiculoValidator;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;

    @Transactional
    public IdResponse incluir(DadosVeiculoRequest request) {
        dadosVeiculoValidator.validar(request);
        Motorista motorista = buscaMotoristaService.porId(request.getIdMotorista());
        Veiculo veiculo = toEntity(request, motorista);
        veiculoRepository.save(veiculo);
        return toResponse(veiculo.getId());
    }
}
