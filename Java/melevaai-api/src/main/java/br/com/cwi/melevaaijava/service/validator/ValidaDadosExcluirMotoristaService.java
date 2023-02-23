package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.enums.Situacao;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosExcluirMotoristaService {
    public void validar(Motorista motorista) {
        if (motorista.getSituacao() != Situacao.OCIOSO)
            throw new ResponseStatusException(BAD_REQUEST, "Motorista não pode ser excluído.");

        if (!motorista.isAtivo())
            throw new ResponseStatusException(BAD_REQUEST, "Motorista já está inativo.");
    }
}
