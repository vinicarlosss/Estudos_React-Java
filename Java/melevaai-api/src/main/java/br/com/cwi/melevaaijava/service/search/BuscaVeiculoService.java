package br.com.cwi.melevaaijava.service.search;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Veiculo;
import br.com.cwi.melevaaijava.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscaVeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public Veiculo porId(Long id) {
        return veiculoRepository.findById(id)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(BAD_REQUEST, "Veículo não encontrado");
                });
    }

    public Veiculo porMotorista(Motorista motorista) {
        return veiculoRepository.findByIdMotorista(motorista)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(BAD_REQUEST, "Veículo não encontrado");
                });
    }
}
