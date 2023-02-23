package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.enums.Situacao;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosExcluirPassageiroService {

    public void validar(Passageiro passageiro) {
        if (passageiro.getSituacao() != Situacao.OCIOSO)
            throw new ResponseStatusException(BAD_REQUEST, "Passageiro não pode ser excluído.");

        if (!passageiro.isAtivo())
            throw new ResponseStatusException(BAD_REQUEST, "Passageiro já está inativo.");
    }
}
