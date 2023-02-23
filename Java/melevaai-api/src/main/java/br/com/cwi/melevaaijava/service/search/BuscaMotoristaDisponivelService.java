package br.com.cwi.melevaaijava.service.search;

import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;

import static br.com.cwi.melevaaijava.enums.Situacao.OCIOSO;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class BuscaMotoristaDisponivelService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    public Motorista porAvaliacao() {
        return motoristaRepository.findFirstBySituacaoAndHabilitacao_dataVencimentoGreaterThanAndVeiculosAtivoIsOrderByAvaliacaoDesc(
                        OCIOSO, LocalDate.now(), true)
                .orElseThrow(() -> new ResponseStatusException(BAD_REQUEST, "Não há motoristas disponíveis."));
    }
}
