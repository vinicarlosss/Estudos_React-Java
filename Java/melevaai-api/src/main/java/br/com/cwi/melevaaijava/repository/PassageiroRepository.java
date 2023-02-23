package br.com.cwi.melevaaijava.repository;

import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.enums.Situacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassageiroRepository extends JpaRepository<Passageiro, Long> {
    boolean existsByCpf(String cpf);

    boolean existsByCpfAndIdNot(String cpf, Long id);

    Page<Passageiro> findBysituacao(Situacao ocioso, Pageable pageable);
}
