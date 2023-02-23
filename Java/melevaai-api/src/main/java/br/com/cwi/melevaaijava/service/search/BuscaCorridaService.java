package br.com.cwi.melevaaijava.service.search;

import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.repository.CorridaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscaCorridaService {

    @Autowired
    private CorridaRepository corridaRepository;

    public Corrida porId(Long id) {
        return corridaRepository.findById(id).orElseThrow(
                () -> {
                    throw new ResponseStatusException(BAD_REQUEST, "Corrida não encontrada");
                }
        );
    }
}
