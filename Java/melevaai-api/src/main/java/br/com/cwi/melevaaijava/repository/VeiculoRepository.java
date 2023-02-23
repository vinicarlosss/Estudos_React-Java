package br.com.cwi.melevaaijava.repository;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

    Optional<Veiculo> findByIdMotorista(Motorista motorista);
}
