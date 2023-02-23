package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.response.AlterarFilmeResponse;
import br.com.cwi.api.domain.Filme;

public class AlterarFilmeMapper {
    public static AlterarFilmeResponse toResponse(Filme filme){
        AlterarFilmeResponse response = new AlterarFilmeResponse();
        response.setId(filme.getId());
        response.setTitulo(filme.getTitulo());
        response.setDescricao(filme.getDescricao());
        response.setDisponivel(filme.getDisponivel());
        response.setCategoria(filme.getCategoria());
        return response;
    }
}
