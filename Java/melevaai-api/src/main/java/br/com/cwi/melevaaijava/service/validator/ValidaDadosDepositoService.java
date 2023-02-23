package br.com.cwi.melevaaijava.service.validator;

import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class ValidaDadosDepositoService {
    private static BigDecimal VALOR_MINIMO_DEPOSITO = new BigDecimal("0");
    private static int VALOR_INDICA_MAIOR = 1;
    public void validar(DadosOperacaoCarteiraRequest request) {
        if(request.getValor().compareTo(VALOR_MINIMO_DEPOSITO) < VALOR_INDICA_MAIOR){
            throw new ResponseStatusException(BAD_REQUEST, "O valor do depósito deve ser maior do que zero");
        }
    }
}
