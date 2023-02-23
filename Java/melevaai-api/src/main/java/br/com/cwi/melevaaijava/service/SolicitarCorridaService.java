package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.SolicitarCorridaRequest;
import br.com.cwi.melevaaijava.controller.response.SolicitarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.domain.Veiculo;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaDisponivelService;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import br.com.cwi.melevaaijava.service.search.BuscaVeiculoService;
import br.com.cwi.melevaaijava.service.validator.ValidarDadosIniciarCorridaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.enums.Situacao.SOLICITADA;
import static br.com.cwi.melevaaijava.mapper.SolicitarCorridaMapper.toEntity;
import static br.com.cwi.melevaaijava.mapper.SolicitarCorridaMapper.toResponse;

@Service
public class SolicitarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;
    @Autowired
    private PassageiroRepository passageiroRepository;
    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private ValidarDadosIniciarCorridaService validarDadosIniciarCorridaService;
    @Autowired
    private BuscaMotoristaDisponivelService buscaMotoristaDisponivel;
    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    @Autowired
    private BuscaVeiculoService buscaVeiculoService;

    @Transactional
    public SolicitarCorridaResponse solicitar(SolicitarCorridaRequest request) {
        Passageiro passageiro = buscaPassageiroService.porId(request.getIdPassageiro());
        validarDadosIniciarCorridaService.validar(passageiro, request);
        Motorista motorista = buscaMotoristaDisponivel.porAvaliacao();
        Veiculo veiculo =  buscaVeiculoService.porMotorista(motorista);

        Corrida corrida = toEntity(request);
        corrida.setPassageiro(passageiro);
        corrida.setMotorista(motorista);
        corrida.setVeiculo(veiculo);

        passageiro.setSituacao(SOLICITADA);
        motorista.setSituacao(SOLICITADA);

        corridaRepository.save(corrida);

        return toResponse(corrida);
    }
}
