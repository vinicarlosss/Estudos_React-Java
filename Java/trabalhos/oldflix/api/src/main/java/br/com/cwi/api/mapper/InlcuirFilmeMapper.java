package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.request.IncluirFilmeRequest;
import br.com.cwi.api.controller.response.IncluirFilmeResponse;
import br.com.cwi.api.domain.Filme;

public class InlcuirFilmeMapper {

    public static Filme toEntity(IncluirFilmeRequest request){
        Filme entity = new Filme();
        entity.setTitulo(request.getTitulo());
        entity.setDescricao(request.getDescricao());
        entity.setDisponivel(true);
        entity.setCategoria(request.getCategoria());
        entity.setImagem(request.getImagem());
        return entity;
    }

    public static IncluirFilmeResponse toResponse(Filme entity){
        IncluirFilmeResponse response = new IncluirFilmeResponse();
        response.setId(entity.getId());
        response.setTitulo(entity.getTitulo());
        response.setDescricao(entity.getDescricao());
        response.setDisponivel(true);
        response.setCategoria(entity.getCategoria());
        response.setImagem(entity.getImagem());
        return response;
    }
}
