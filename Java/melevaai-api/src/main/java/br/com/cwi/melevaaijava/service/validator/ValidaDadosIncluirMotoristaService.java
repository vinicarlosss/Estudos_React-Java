package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.repository.HabilitacaoRepository;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ValidaDadosIncluirMotoristaService {
    
    @Autowired
    private MotoristaRepository motoristaRepository;
    @Autowired
    private HabilitacaoRepository habilitacaoRepository;

    public void validar(DadosMotoristaRequest request) {
        if (motoristaRepository.existsByCpf(request.getCpf()))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já existe um motorista cadastrado com esse CPF!");
        if (habilitacaoRepository.existsByNumero(request.getNumeroHabilitacao()))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já existe uma habilitação cadastrada com esse número!");
    }
}
