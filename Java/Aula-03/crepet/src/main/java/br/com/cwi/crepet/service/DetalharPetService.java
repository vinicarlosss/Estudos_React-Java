package br.com.cwi.crepet.service;

import br.com.cwi.crepet.controller.response.DetalharPetResponse;
import br.com.cwi.crepet.domain.Pet;
import br.com.cwi.crepet.mapper.DetalharPetMapper;
import br.com.cwi.crepet.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static br.com.cwi.crepet.mapper.DetalharPetMapper.toResponse;
import static java.util.stream.Collectors.toList;

@Service
public class DetalharPetService {

    @Autowired
    private PetRepository petRepository;

    public DetalharPetResponse detalhar(Long id){
        Pet pet = petRepository.findById(id).get();

        return toResponse(pet);
    }
}
