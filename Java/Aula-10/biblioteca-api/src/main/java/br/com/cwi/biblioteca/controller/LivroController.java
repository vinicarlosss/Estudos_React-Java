package br.com.cwi.biblioteca.controller;

import br.com.cwi.biblioteca.controller.request.IncluirLivroRequest;
import br.com.cwi.biblioteca.controller.response.IncluirLivroResponse;
import br.com.cwi.biblioteca.controller.response.ListarLivroResponse;
import br.com.cwi.biblioteca.service.IncluirLivroService;
import br.com.cwi.biblioteca.service.ListarLivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private IncluirLivroService incluirLivroService;
    @Autowired
    private ListarLivroService listarLivroService;


    @GetMapping
    @ResponseStatus(OK)
    public List<ListarLivroResponse> listar(){
        return listarLivroService.listar();
    }

    @Secured("ROLE_ADMIN")
    @PostMapping("/incluir")
    @ResponseStatus(CREATED)
    public IncluirLivroResponse incluir(@Valid @RequestBody IncluirLivroRequest request){
        return incluirLivroService.incluir(request);
    }

    @GetMapping("/publico")
    public String publico(){
        return "Rota pública";
    }
}
