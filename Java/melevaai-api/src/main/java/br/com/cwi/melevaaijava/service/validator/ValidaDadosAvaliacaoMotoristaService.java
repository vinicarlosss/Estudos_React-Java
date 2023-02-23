package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.domain.Corrida;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;

import static br.com.cwi.melevaaijava.enums.Situacao.*;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosAvaliacaoMotoristaService {

    public void validar(Corrida corrida) {
        if (Objects.nonNull(corrida.getAvaliacaoMotorista())){
            throw new ResponseStatusException(BAD_REQUEST, "Esta corrida já foi avaliada");
        }

        if (corrida.getSituacao() != FINALIZADA){
            throw new ResponseStatusException(BAD_REQUEST, "A corrida não pode ser avaliada enquanto está em andamento");
        }
    }
}
