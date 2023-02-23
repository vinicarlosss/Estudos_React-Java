package br.com.cwi.melevaaijava.service.search;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscaMotoristaService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    public Motorista porId(Long id) {
        return motoristaRepository.findById(id)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(BAD_REQUEST, "Motorista não encontrado!");
                });
    }
}
