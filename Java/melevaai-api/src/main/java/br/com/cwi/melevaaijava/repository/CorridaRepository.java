package br.com.cwi.melevaaijava.repository;

import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.enums.Situacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CorridaRepository extends JpaRepository<Corrida, Long> {

    Page<Corrida> findByPassageiroNomeIgnoreCaseContainingAndMotoristaNomeIgnoreCaseContaining(String passageiro, String motorista, Pageable pageable);

    boolean existsByPassageiroAndSituacao(Passageiro passageiro, Situacao situacao);

    Page<Corrida> findByPassageiro(Passageiro passageiro, Pageable pageable);

    Page<Corrida> findByMotorista(Motorista motorista, Pageable pageable);

    List<Corrida> findAllByPassageiro(Passageiro passageiro);

    List<Corrida> findAllByMotorista(Motorista motorista);
}
