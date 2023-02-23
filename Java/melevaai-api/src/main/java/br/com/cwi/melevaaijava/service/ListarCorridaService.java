package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.ListarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.mapper.ListarCorridaMapper;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;
    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    @Autowired
    private BuscaMotoristaService buscaMotoristaService;

    public Page<ListarCorridaResponse> listar(String passageiro, String motorista, Pageable pageable) {
        return corridaRepository
                .findByPassageiroNomeIgnoreCaseContainingAndMotoristaNomeIgnoreCaseContaining(passageiro, motorista, pageable)
                .map(ListarCorridaMapper::toResponse);
    }

    public Page<ListarCorridaResponse> listarPassageiro(Long id, Pageable pageable) {
        Passageiro passageiro = buscaPassageiroService.porId(id);
        return corridaRepository
                .findByPassageiro(passageiro, pageable)
                .map(ListarCorridaMapper::toResponse);
    }

    public Page<ListarCorridaResponse> listarMotorista(Long id, Pageable pageable) {
        Motorista motorista = buscaMotoristaService.porId(id);
        return corridaRepository
                .findByMotorista(motorista, pageable)
                .map(ListarCorridaMapper::toResponse);
    }
}