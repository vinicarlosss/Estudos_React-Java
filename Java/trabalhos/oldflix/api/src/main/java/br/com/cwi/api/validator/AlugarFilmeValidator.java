package br.com.cwi.api.validator;

import br.com.cwi.api.controller.request.AlugarFilmeRequest;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;


import static java.util.Objects.isNull;

@Component
public class AlugarFilmeValidator {

    private static final int CAMPO_VAZIO = 0;

    @Autowired
    FilmeRepository filmeRepository;

    public void validar(AlugarFilmeRequest request, Long id){

        if(isNull(request)){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "request não pode ser nulo");
        }

        Boolean filmeExiste = filmeRepository.existsById(id);
        if(!filmeExiste){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND, "Filme não encontrado");
        }

        if(isNull(request.getResponsavel()) || request.getResponsavel().trim().length() == CAMPO_VAZIO){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Responsável é obrigatório");
        }


        Filme filme = filmeRepository.findById(id).get();
        if(!filme.getDisponivel()){
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Filme indisponível para aluguel");
        }

    }
}
