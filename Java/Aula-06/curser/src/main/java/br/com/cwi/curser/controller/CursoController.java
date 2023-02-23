package br.com.cwi.curser.controller;

import br.com.cwi.curser.controller.request.AdicionarAlunoRequest;
import br.com.cwi.curser.controller.request.AdicionarAulaRequest;
import br.com.cwi.curser.controller.request.IncluirCursoRequest;
import br.com.cwi.curser.controller.response.CursoResumidoResponse;
import br.com.cwi.curser.controller.response.IdResponse;
import br.com.cwi.curser.service.AdicionarAlunoService;
import br.com.cwi.curser.service.AdicionarAulaService;
import br.com.cwi.curser.service.IncluirCursosService;
import br.com.cwi.curser.service.ListarCursosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/cursos")
public class CursoController {

    @Autowired
    private ListarCursosService listarCursosService;
    @Autowired
    private IncluirCursosService incluirCursosService;
    @Autowired
    private AdicionarAulaService adicionarAulaService;
    @Autowired
    private AdicionarAlunoService adicionarAlunoService;

    @GetMapping
    public List<CursoResumidoResponse> listar(){
        return listarCursosService.listarAtivos();
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public IdResponse incluir(@Valid @RequestBody IncluirCursoRequest request){
        return incluirCursosService.incluir(request);
    }

    @PostMapping("/{id}/aulas")
    @ResponseStatus(CREATED)
    public IdResponse adicionarAula(@PathVariable Long id, @Valid @RequestBody AdicionarAulaRequest request){
        return adicionarAulaService.adicionar(id, request);
    }

    @PutMapping("/{id}/alunos")
    @ResponseStatus(NO_CONTENT)
    public void adicionarAluno(@RequestBody @PathVariable Long id, AdicionarAlunoRequest request){
        adicionarAlunoService.adicionar(id, request);
    }
}
