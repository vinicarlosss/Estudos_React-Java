package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.DetalharPassageiroResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.melevaaijava.mapper.DetalharPassageiroMapper.toResponse;

@Service
public class DetalharPassageiroService {

    @Autowired
    private BuscaPassageiroService buscaPassageiroService;
    public DetalharPassageiroResponse detalhar(Long idPassageiro) {
        Passageiro passageiro = buscaPassageiroService.porId(idPassageiro);
        return toResponse(passageiro);
    }
}
