package br.com.cwi.crepet.mapper;

import br.com.cwi.crepet.controller.request.IncluirPetRequest;
import br.com.cwi.crepet.controller.response.IncluirPetResponse;
import br.com.cwi.crepet.domain.Pet;

public class IncluirPetMapper {

    public static Pet toEntity(IncluirPetRequest request){
        Pet entity = new Pet();
        entity.setNome(request.getNome());
        entity.setResponsavel(request.getResponsavel());
        return entity;
    }

    public static IncluirPetResponse toResponse(Pet entity){
        IncluirPetResponse response = new IncluirPetResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setResponsavel(entity.getResponsavel());
        return response;
    }
}
