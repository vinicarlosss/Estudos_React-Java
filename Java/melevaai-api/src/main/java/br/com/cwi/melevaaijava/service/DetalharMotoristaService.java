package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.DetalharMotoristaResponse;
import br.com.cwi.melevaaijava.service.search.BuscaMotoristaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.melevaaijava.mapper.DetalharMotoristaMapper.toResponse;

@Service
public class DetalharMotoristaService {

    @Autowired
    private BuscaMotoristaService buscaMotoristaService;

    public DetalharMotoristaResponse detalhar(Long id) {
        return toResponse(buscaMotoristaService.porId(id));
    }
}
