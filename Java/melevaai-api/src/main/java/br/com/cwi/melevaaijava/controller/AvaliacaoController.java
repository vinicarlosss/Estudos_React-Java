package br.com.cwi.melevaaijava.controller;

import br.com.cwi.melevaaijava.controller.request.DadosAvaliacaoRequest;
import br.com.cwi.melevaaijava.controller.response.AvaliacaoCorridaResponse;
import br.com.cwi.melevaaijava.service.AvaliacaoMotoristaService;
import br.com.cwi.melevaaijava.service.AvaliacaoPassageiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/avaliacoes")
@CrossOrigin(origins = "*")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoPassageiroService avaliacaoPassageiroService;
    @Autowired
    private AvaliacaoMotoristaService avaliacaoMotoristaService;

    @PutMapping("/passageiro/{id}")
    @ResponseStatus(CREATED)
    public AvaliacaoCorridaResponse avaliarPassageiro(@PathVariable Long id, @RequestBody DadosAvaliacaoRequest request){
        return avaliacaoPassageiroService.avaliar(id, request);
    }
    @PutMapping("/motorista/{id}")
    @ResponseStatus(CREATED)
    public AvaliacaoCorridaResponse avaliarMotorista(@PathVariable Long id, @RequestBody DadosAvaliacaoRequest request){
        return avaliacaoMotoristaService.avaliar(id, request);
    }

}
