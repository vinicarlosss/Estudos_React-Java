package br.com.cwi.melevaaijava.validator;

import br.com.cwi.melevaaijava.controller.request.DadosVeiculoRequest;
import br.com.cwi.melevaaijava.enums.Categoria;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;


import static java.util.Objects.isNull;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Component
public class DadosVeiculoValidator {

    public static final int TAMANHO_MINIMO = 5;

    public void validar(DadosVeiculoRequest request){
        if(isNull(request)){
            throw new ResponseStatusException(BAD_REQUEST, "Dados não informados");
        }

        if(isNull(request.getModelo())){
            throw new ResponseStatusException(BAD_REQUEST, "Modelo é obrigatório!");
        }

        if(request.getModelo().trim().length() < TAMANHO_MINIMO){
            throw new ResponseStatusException(BAD_REQUEST, "Modelo deve ter pelo menos 5 caracteres!");
        }

        if(isNull(request.getCor())){
            throw new ResponseStatusException(BAD_REQUEST, "Cor é obrigatória!");
        }

        if(request.getCor().trim().length() < TAMANHO_MINIMO){
            throw new ResponseStatusException(BAD_REQUEST, "Cor deve ter pelo menos 5 caracteres!");
        }

        if(isNull(request.getFotoUrl())){
            throw new ResponseStatusException(BAD_REQUEST, "A url da foto é obrigatória!");
        }

        if(request.getFotoUrl().trim().length() < TAMANHO_MINIMO){
            throw new ResponseStatusException(BAD_REQUEST, "A url da foto deve ter pelo menos 5 caracteres!");
        }

        if(isNull(request.getIdMotorista())){
            throw new ResponseStatusException(BAD_REQUEST, "Motorista inválido");
        }

        if(isNull(request.getCategoria())){
            throw new ResponseStatusException(BAD_REQUEST, "Categoria é obrigatória!");
        }

        if(request.getCategoria() != Categoria.A &&
                request.getCategoria() != Categoria.B &&
                request.getCategoria() != Categoria.C){
            throw new ResponseStatusException(BAD_REQUEST, "Categoria inválida");
        }
    }
}
