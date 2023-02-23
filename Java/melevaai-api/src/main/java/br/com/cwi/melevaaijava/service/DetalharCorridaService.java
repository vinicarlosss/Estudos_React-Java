package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.DetalharCorridaResponse;
import br.com.cwi.melevaaijava.service.search.BuscaCorridaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.melevaaijava.mapper.DetalharCorridaMapper.toResponse;

@Service
public class DetalharCorridaService {

    @Autowired
    private BuscaCorridaService buscaCorridaService;

    public DetalharCorridaResponse detalhar(Long id) {
        return toResponse(buscaCorridaService.porId(id));
    }
}
