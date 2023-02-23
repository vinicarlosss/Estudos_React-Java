package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.response.AlugarFilmeResponse;
import br.com.cwi.api.domain.Filme;

public class AlugarFilmeMapper {

    public static AlugarFilmeResponse toResponse(Filme filme){

        AlugarFilmeResponse response = new AlugarFilmeResponse();
        response.setId(filme.getId());
        response.setDataRetirada(filme.getDataRetirada());
        return response;
    }
}
