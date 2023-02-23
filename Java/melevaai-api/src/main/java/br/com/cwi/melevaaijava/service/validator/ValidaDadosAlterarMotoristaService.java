package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.HabilitacaoRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosAlterarMotoristaService {

    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private HabilitacaoRepository habilitacaoRepository;

    public void validar(Motorista motorista, DadosMotoristaRequest request) {
        if (motoristaRepository.existsByCpfAndIdNot(request.getCpf(), motorista.getId())) {
            throw new ResponseStatusException(BAD_REQUEST, "Já existe um motorista cadastrado com esse CPF!");
        }

        if (habilitacaoRepository.existsByNumeroAndIdNot(request.getNumeroHabilitacao(), motorista.getHabilitacao().getId()))
            throw new ResponseStatusException(BAD_REQUEST, "Já existe uma habilitação cadastrada com esse número!");
    }
}
