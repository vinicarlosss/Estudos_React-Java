package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.response.DevolverFilmeResponse;
import br.com.cwi.api.domain.Filme;

public class DevolverFilmeMapper {

    public static DevolverFilmeResponse toResponse(Filme filme){

        DevolverFilmeResponse response = new DevolverFilmeResponse();
        response.setId(filme.getId());
        return response;
    }
}
