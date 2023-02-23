package br.com.cwi.crepet.repository;

import br.com.cwi.crepet.domain.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Long> {
}
