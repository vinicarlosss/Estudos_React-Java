package br.com.cwi.api.controller;

import br.com.cwi.api.controller.request.AlterarFilmeRequest;
import br.com.cwi.api.controller.request.AlugarFilmeRequest;
import br.com.cwi.api.controller.request.IncluirFilmeRequest;
import br.com.cwi.api.controller.response.*;
import br.com.cwi.api.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/filmes")
public class FilmeController {

    @Autowired
    private ListarFilmeService listarFilmeService;

    @Autowired
    private IncluirFilmeService incluirFilmeService;

    @Autowired
    private RemoverFilmeService removerFilmeService;

    @Autowired
    private AlterarFilmeService alterarFilmeService;

    @Autowired
    private AlugarFilmeService alugarFilmeService;

    @Autowired
    private DevolverFilmeService devolverFilmeService;

    @Autowired DetalharFilmeService detalharFilmeService;

    @GetMapping
    public List<ListarFilmeResponse> listar(){
        return listarFilmeService.listar();
    }

    @PostMapping
    public IncluirFilmeResponse incluir(@RequestBody IncluirFilmeRequest request){
        return incluirFilmeService.incluir(request);
    }

    @DeleteMapping("/{id}")
    public void remover(@PathVariable Long id){
        removerFilmeService.remover(id);
    }

    @PutMapping("/{id}")
    public AlterarFilmeResponse alterar(@RequestBody AlterarFilmeRequest request, @PathVariable Long id){
        return alterarFilmeService.alterar(id, request);
    }

    @PutMapping("/{id}/alugar")
    public AlugarFilmeResponse alugar(@RequestBody AlugarFilmeRequest request, @PathVariable Long id){
        return alugarFilmeService.alugar(id, request);
    }

    @PutMapping("/{id}/devolver")
    public DevolverFilmeResponse devolver(@PathVariable Long id){
        return devolverFilmeService.devolver(id);
    }

    @GetMapping("/{id}")
    public DetalharFilmeResponse detalhar(@PathVariable Long id){
        return detalharFilmeService.detalhar(id);
    }
}
