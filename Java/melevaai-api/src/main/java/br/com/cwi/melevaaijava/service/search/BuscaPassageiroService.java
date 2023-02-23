package br.com.cwi.melevaaijava.service.search;

import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscaPassageiroService {

    @Autowired
    private PassageiroRepository passageiroRepository;

    public Passageiro porId(Long id) {
        return passageiroRepository.findById(id)
                .orElseThrow(() -> {
                    throw new ResponseStatusException(BAD_REQUEST, "Passageiro não encontrado");
                });
    }


}
