package br.com.cwi.crepet.mapper;

import br.com.cwi.crepet.controller.response.ListarPetResponse;
import br.com.cwi.crepet.domain.Pet;

public class ListarPetMapper {

    public static ListarPetResponse toResponse(Pet entity){
        ListarPetResponse response = new ListarPetResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setResponsavel(entity.getResponsavel());
        response.setPremium(entity.isPremium());
        return response;
    }
}
