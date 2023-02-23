package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.response.ListarFilmeResponse;
import br.com.cwi.api.domain.Filme;

public class ListarFilmeMapper {
    public static ListarFilmeResponse toResponse(Filme entity){

        ListarFilmeResponse response = new ListarFilmeResponse();
        response.setId(entity.getId());
        response.setTitulo(entity.getTitulo());
        response.setDescricao(entity.getDescricao());
        response.setDisponivel(entity.getDisponivel());
        response.setCategoria(entity.getCategoria());
        response.setImagem(entity.getImagem());

        return response;
    }
}
