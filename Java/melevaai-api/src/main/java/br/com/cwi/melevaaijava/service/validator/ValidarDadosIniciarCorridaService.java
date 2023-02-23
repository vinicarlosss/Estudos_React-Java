package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.SolicitarCorridaRequest;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.melevaaijava.enums.Situacao.INICIADA;
import static br.com.cwi.melevaaijava.enums.Situacao.SOLICITADA;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidarDadosIniciarCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;

    public void validar(Passageiro passageiro, SolicitarCorridaRequest request) {
        if (request.getPontoInicial().size() != 2)
            throw new ResponseStatusException(BAD_REQUEST,
                    "Devem ser informadas as coordernadas iniciais.");
        if (request.getPontoFinal().size() != 2)
            throw new ResponseStatusException(BAD_REQUEST,
                    "Devem ser informadas as coordernadas finais.");
        if (corridaRepository.existsByPassageiroAndSituacao(passageiro, SOLICITADA))
            throw new ResponseStatusException(BAD_REQUEST,
                    "O passageiro informado já possuí uma corrida Solicitada");
        if (corridaRepository.existsByPassageiroAndSituacao(passageiro, INICIADA))
            throw new ResponseStatusException(BAD_REQUEST,
                    "O passageiro informado já possuí uma corrida Iniciada");
    }
}
