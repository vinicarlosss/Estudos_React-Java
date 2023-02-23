package br.com.cwi.crepet.controller;

import br.com.cwi.crepet.controller.request.AlterarPetRequest;
import br.com.cwi.crepet.controller.request.IncluirPetRequest;
import br.com.cwi.crepet.controller.response.AlterarPetResponse;
import br.com.cwi.crepet.controller.response.DetalharPetResponse;
import br.com.cwi.crepet.controller.response.IncluirPetResponse;
import br.com.cwi.crepet.controller.response.ListarPetResponse;
import br.com.cwi.crepet.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")

public class PetController {

    @Autowired
    private ListarPetService listarPetService;

    @Autowired
    private IncluirPetService incluirPetService;

    @Autowired
    private AlterarPetService alterarPetService;

    @Autowired
    private RemoverPetService removerPetService;

    @Autowired
    private DetalharPetService detalharPetService;

    @GetMapping
    public List<ListarPetResponse> listar(){
        return listarPetService.listar();
    }

    @PostMapping
    public IncluirPetResponse incluir(@RequestBody IncluirPetRequest request){
        return incluirPetService.incluir(request);
    }

    @PutMapping("/{id}")
    public AlterarPetResponse alterar(@RequestBody AlterarPetRequest request, @PathVariable Long id){
        return alterarPetService.alterar(id, request);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id){
        removerPetService.remover(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public DetalharPetResponse detalhar(@PathVariable("id") Long id){
        return detalharPetService.detalhar(id);
    }

}
