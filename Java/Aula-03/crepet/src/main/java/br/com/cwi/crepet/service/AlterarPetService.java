package br.com.cwi.crepet.service;

import br.com.cwi.crepet.controller.request.AlterarPetRequest;
import br.com.cwi.crepet.controller.response.AlterarPetResponse;
import br.com.cwi.crepet.domain.Pet;
import br.com.cwi.crepet.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.crepet.mapper.AlterarPetMapper.toResponse;

@Service
public class AlterarPetService {

    @Autowired
    private PetRepository petRepository;

    public AlterarPetResponse alterar(Long id, AlterarPetRequest request) {

        Pet pet = petRepository.findById(id).get();
        pet.setNome(request.getNome());
        pet.setResponsavel(request.getResponsavel());
        pet.setPremium(request.isPremium());


        petRepository.save(pet);


        return toResponse(pet);
    }
}
