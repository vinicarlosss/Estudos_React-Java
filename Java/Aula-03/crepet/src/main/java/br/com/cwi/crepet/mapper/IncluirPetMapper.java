package br.com.cwi.crepet.mapper;

import br.com.cwi.crepet.controller.request.IncluirPetRequest;
import br.com.cwi.crepet.controller.response.IncluirPetResponse;
import br.com.cwi.crepet.domain.Pet;

import java.time.LocalDateTime;
import java.util.Calendar;

public class IncluirPetMapper {

    public static Pet toEntity(IncluirPetRequest request){
        Pet entity = new Pet();
        entity.setNome(request.getNome());
        entity.setResponsavel(request.getResponsavel());
        entity.setPremium(request.isPremium());
        entity.setData_inclusao(LocalDateTime.now());
        return entity;
    }

    public static IncluirPetResponse toResponse(Pet entity){
        IncluirPetResponse response = new IncluirPetResponse();
        response.setId(entity.getId());
        response.setNome(entity.getNome());
        response.setResponsavel(entity.getResponsavel());
        response.setPremium(entity.isPremium());
        response.setData_inscricao(LocalDateTime.now());
        return response;
    }
}
