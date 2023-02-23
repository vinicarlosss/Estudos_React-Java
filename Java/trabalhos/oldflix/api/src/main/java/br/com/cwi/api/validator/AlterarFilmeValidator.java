package br.com.cwi.api.validator;

import br.com.cwi.api.controller.request.AlterarFilmeRequest;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import static java.util.Objects.isNull;

@Component
public class AlterarFilmeValidator {

    private static final int CAMPO_VAZIO = 0;

    @Autowired
    private FilmeRepository filmeRepository;
    public void validar(AlterarFilmeRequest request, Long id){

        if(isNull(request)){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "request não pode ser nulo");
        }

        Boolean filmeExiste = filmeRepository.existsById(id);
        if(!filmeExiste){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND, "Filme não encontrado");
        }
        if(isNull(request.getTitulo()) || request.getTitulo().trim().length() == CAMPO_VAZIO){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Título é obrigatório");
        }

        if(isNull(request.getDescricao()) || request.getDescricao().trim().length() == CAMPO_VAZIO){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Descrição é obrigatório");
        }

        if(isNull(request.getCategoria())){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Categoria é obrigatória");
        }

        if(isNull(request.getImagem()) || request.getImagem().trim().length() == CAMPO_VAZIO){
            throw  new ResponseStatusException(HttpStatus.BAD_REQUEST, "Imagem é obrigatória");
        }

        Filme filme = filmeRepository.findById(id).get();
        if(!filme.getDisponivel()){
            throw  new ResponseStatusException(HttpStatus.FORBIDDEN, "Somente filmes disponíveis podem ser editados");
        }
    }
}
