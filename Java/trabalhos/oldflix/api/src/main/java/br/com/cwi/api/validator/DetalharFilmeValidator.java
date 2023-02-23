package br.com.cwi.api.validator;

import br.com.cwi.api.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
public class DetalharFilmeValidator {

    @Autowired
    FilmeRepository filmeRepository;

    public void validar(Long id) {
        Boolean filmeExiste = filmeRepository.existsById(id);
        if(!filmeExiste){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Filme não encontrado");
        }
    }
}
