package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ValidarDadosIncluirPassageiroService {

    @Autowired
    public PassageiroRepository passageiroRepository;

    public void validar(DadosPassageiroRequest request) {
        if(passageiroRepository.existsByCpf(request.getCpf())){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já existe um passageiro cadastrado com esse CPF!");
        }
    }
}
