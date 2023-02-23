package br.com.cwi.gerenciamento.de.tarefas.controller;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.AdicionarTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.controller.request.AlterarTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.controller.request.IncluirTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.controller.response.IdResponse;
import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefaResumidaResponse;
import br.com.cwi.gerenciamento.de.tarefas.service.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    private InlcuirTarefaService inlcuirTarefaService;
    @Autowired
    private RemoverTarefaService removerTarefaService;
    @Autowired
    private AlterarTarefaService alterarTarefaService;
    @Autowired
    private AdicionarTarefaService adicionarTarefaService;
    @Autowired
    private ListarTarefaService listarTarefaService;

    @PostMapping
    @ResponseStatus(CREATED)
    public IdResponse incluir(@Valid @RequestBody IncluirTarefaRequest request){

        return inlcuirTarefaService.incluir(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(NO_CONTENT)
    public void remover(@Valid @PathVariable Long id){

        removerTarefaService.remover(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(CREATED)
    public TarefaResumidaResponse alterar(@Valid @PathVariable Long id, @RequestBody AlterarTarefaRequest request){
        return alterarTarefaService.alterar(id, request);
    }

    @PutMapping("/{id}/tarefa")
    @ResponseStatus(NO_CONTENT)
    public void adicionarTarefa(@PathVariable Long id, @Valid @RequestBody AdicionarTarefaRequest request){
        adicionarTarefaService.adicionar(id, request);
    }

    @GetMapping("/search")
    public Page<TarefaResumidaResponse> detalharTarefa(@RequestParam("text") String text, Pageable pageable){
        return listarTarefaService.listarTarefaPaginado(text, pageable);
    }
}
