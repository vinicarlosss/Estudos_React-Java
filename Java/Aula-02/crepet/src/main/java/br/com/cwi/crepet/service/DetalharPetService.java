package br.com.cwi.crepet.service;

import br.com.cwi.crepet.controller.response.DetalharPetResponse;
import br.com.cwi.crepet.mapper.DetalharPetMapper;
import br.com.cwi.crepet.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class DetalharPetService {

    @Autowired
    private PetRepository petRepository;

    public List<DetalharPetResponse> detalhar(String id){
        return petRepository.findById(new Long(id)).stream()
                .map(DetalharPetMapper::toResponse)
                .collect(toList());
    }
}
