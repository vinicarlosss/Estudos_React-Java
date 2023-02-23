package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.domain.Corrida;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import static br.com.cwi.melevaaijava.enums.Situacao.FINALIZADA;
import static java.util.Objects.nonNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosAvaliacaoPassageiroService {

    public void validar(Corrida corrida) {

        if (nonNull(corrida.getAvaliacaoPassageiro())){
            throw new ResponseStatusException(BAD_REQUEST, "Esta corrida já foi avaliada");
        }

        if (corrida.getSituacao() != FINALIZADA){
            throw new ResponseStatusException(BAD_REQUEST, "A corrida não pode ser avaliada enquanto está em andamento");
        }
    }
}
