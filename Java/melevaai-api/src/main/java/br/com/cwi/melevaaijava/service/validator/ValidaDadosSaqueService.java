package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import br.com.cwi.melevaaijava.domain.Motorista;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosSaqueService {
    private static int VALOR_INDICA_MAIOR_OU_IGUAL = 0;
    public void validar(Motorista motorista, DadosOperacaoCarteiraRequest request) {
        if(motorista.getSaldo().compareTo(request.getValor()) < VALOR_INDICA_MAIOR_OU_IGUAL){
            throw new ResponseStatusException(BAD_REQUEST, "Saldo insuficiente");
        }
    }
}
