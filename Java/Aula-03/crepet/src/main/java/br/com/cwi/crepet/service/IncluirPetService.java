package br.com.cwi.crepet.service;

import br.com.cwi.crepet.controller.request.IncluirPetRequest;
import br.com.cwi.crepet.controller.response.IncluirPetResponse;
import br.com.cwi.crepet.domain.Pet;
import br.com.cwi.crepet.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.crepet.mapper.IncluirPetMapper.toEntity;
import static br.com.cwi.crepet.mapper.IncluirPetMapper.toResponse;

@Service
public class IncluirPetService {

    @Autowired
    private PetRepository petRepository;
    public IncluirPetResponse incluir(IncluirPetRequest request) {

        Pet pet = toEntity(request);

        petRepository.save(pet);

        return toResponse(pet);
    }
}
