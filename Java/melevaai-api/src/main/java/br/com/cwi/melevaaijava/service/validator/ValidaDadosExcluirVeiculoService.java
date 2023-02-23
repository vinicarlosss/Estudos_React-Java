package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.domain.Veiculo;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosExcluirVeiculoService {
    public void validar(Veiculo veiculo) {

        if (!veiculo.isAtivo())
            throw new ResponseStatusException(BAD_REQUEST, "Veículo já está inativo.");
    }
}
