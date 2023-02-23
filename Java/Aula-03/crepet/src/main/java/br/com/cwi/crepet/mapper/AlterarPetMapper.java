package br.com.cwi.crepet.mapper;

import br.com.cwi.crepet.controller.response.AlterarPetResponse;
import br.com.cwi.crepet.domain.Pet;

public class AlterarPetMapper {
    public static AlterarPetResponse toResponse(Pet pet) {
        AlterarPetResponse response = new AlterarPetResponse();
        response.setId(pet.getId());
        return response;
    }
}
