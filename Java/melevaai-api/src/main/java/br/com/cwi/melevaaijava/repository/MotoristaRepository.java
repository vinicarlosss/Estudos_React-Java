package br.com.cwi.melevaaijava.repository;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.enums.Situacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface MotoristaRepository extends JpaRepository<Motorista, Long> {
    Page<Motorista> findByAtivoAndNomeIgnoreCaseContaining(boolean ativo, String buscarNome, Pageable pageable);

    boolean existsByCpf(String cpf);

    boolean existsByCpfAndIdNot(String cpf, Long idMotorista);

    Optional<Motorista> findFirstBySituacaoAndHabilitacao_dataVencimentoGreaterThanAndVeiculosAtivoIsOrderByAvaliacaoDesc(Situacao ocioso, LocalDate now, boolean b);
}
