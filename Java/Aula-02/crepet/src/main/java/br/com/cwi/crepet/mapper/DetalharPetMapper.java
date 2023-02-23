package br.com.cwi.crepet.mapper;

import br.com.cwi.crepet.controller.response.DetalharPetResponse;
import br.com.cwi.crepet.domain.Pet;

public class DetalharPetMapper {

    public static DetalharPetResponse toResponse(Pet entity){
        DetalharPetResponse response = new DetalharPetResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setResponsavel(entity.getResponsavel());
        return response;
    }
}
