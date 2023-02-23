package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class DadosMotoristaValidator {

    public void validar(DadosMotoristaRequest request) {
        if (request.getNome().trim().length() < 3)
            throw new ResponseStatusException(BAD_REQUEST, "Nome deve ter pelo menos 3 caracteres!");

        if (request.getCpf().replaceAll("[^0-9]", "").length() < 11)
            throw new ResponseStatusException(BAD_REQUEST, "CPF deve ter 11 digitos!");

        if (request.getNumeroHabilitacao().replaceAll("[^0-9]", "").length() < 11)
            throw new ResponseStatusException(BAD_REQUEST, "Número da habilitação deve ter 11 digitos!");
    }
}
