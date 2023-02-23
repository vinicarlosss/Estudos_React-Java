package br.com.cwi.crepet.service;

import br.com.cwi.crepet.controller.response.ListarPetResponse;
import br.com.cwi.crepet.mapper.ListarPetMapper;
import br.com.cwi.crepet.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ListarPetService {

    @Autowired
    private PetRepository petRepository;

    public List<ListarPetResponse> listar(){
        return petRepository.findAll().stream()
                .map(ListarPetMapper::toResponse)
                .collect(toList());
    }
}
