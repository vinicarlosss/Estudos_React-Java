package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.melevaaijava.enums.Situacao.OCIOSO;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidarDadosAlterarPassageiroService {
    @Autowired
    private PassageiroRepository passageiroRepository;

    public void validar(Passageiro passageiro, DadosPassageiroRequest request) {

        if(passageiro.getSituacao() != OCIOSO){
            throw new ResponseStatusException(BAD_REQUEST, "Passageiro não pode ser alterado enquanto estiver em uma corrida");
        }

        if(!passageiro.isAtivo()){
            throw new ResponseStatusException(BAD_REQUEST, "Passageiro inativo não pode ser alterado");
        }

        if (passageiroRepository.existsByCpfAndIdNot(request.getCpf(), passageiro.getId())) {
            throw new ResponseStatusException(BAD_REQUEST, "Já existe um Passageiro cadastrado com esse CPF!");
        }
    }
}
