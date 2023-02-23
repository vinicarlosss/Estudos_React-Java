package br.com.cwi.crepet.service;

import br.com.cwi.crepet.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RemoverPetService {

    @Autowired
    private PetRepository petRepository;
    public void remover(Long id) {
        petRepository.deleteById(id);
    }
}
