package br.com.cwi.crepet.controller;

import br.com.cwi.crepet.controller.request.IncluirPetRequest;
import br.com.cwi.crepet.controller.response.DetalharPetResponse;
import br.com.cwi.crepet.controller.response.IncluirPetResponse;
import br.com.cwi.crepet.controller.response.ListarPetResponse;
import br.com.cwi.crepet.service.DetalharPetService;
import br.com.cwi.crepet.service.IncluirPetService;
import br.com.cwi.crepet.service.ListarPetService;
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
    private DetalharPetService detalharPetService;

    @GetMapping
    public List<ListarPetResponse> listar(){
        return listarPetService.listar();
    }

    @PostMapping
    public IncluirPetResponse incluir(@RequestBody IncluirPetRequest request){
        return incluirPetService.incluir(request);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public List<DetalharPetResponse> detalhar(@PathVariable("id") String id){
        return detalharPetService.detalhar(id);
    }

}
