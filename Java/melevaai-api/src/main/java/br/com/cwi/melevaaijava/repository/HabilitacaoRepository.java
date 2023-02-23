package br.com.cwi.melevaaijava.repository;

import br.com.cwi.melevaaijava.domain.Habilitacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HabilitacaoRepository extends JpaRepository<Habilitacao, Long> {

    boolean existsByNumero(String numeroHabilitacao);

    boolean existsByNumeroAndIdNot(String numeroHabilitacao, Long id);
}
