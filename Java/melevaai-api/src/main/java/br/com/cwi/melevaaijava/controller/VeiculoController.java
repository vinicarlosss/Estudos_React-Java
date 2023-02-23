package br.com.cwi.melevaaijava.controller;

import br.com.cwi.melevaaijava.controller.request.DadosVeiculoRequest;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.service.ExcluirVeiculoService;
import br.com.cwi.melevaaijava.service.IncluirVeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/veiculos")
@CrossOrigin(origins = "*")
public class VeiculoController {

    @Autowired
    private IncluirVeiculoService incluirVeiculoService;
    @Autowired
    private ExcluirVeiculoService excluirVeiculoService;

    @PostMapping
    @ResponseStatus(CREATED)
    public IdResponse incluir(@Valid @RequestBody DadosVeiculoRequest request){

        return incluirVeiculoService.incluir(request);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(NO_CONTENT)
    public void excluir(@PathVariable Long id){
        excluirVeiculoService.excluir(id);
    }
}
