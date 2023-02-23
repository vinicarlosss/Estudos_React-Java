package br.com.cwi.curser.controller;

import br.com.cwi.curser.controller.request.AdicionarAlunoRequest;
import br.com.cwi.curser.controller.request.AdicionarAulaRequest;
import br.com.cwi.curser.controller.request.IncluirCursoRequest;
import br.com.cwi.curser.controller.response.CursoResumidoPaginadoResponse;
import br.com.cwi.curser.controller.response.CursoResumidoResponse;
import br.com.cwi.curser.controller.response.IdResponse;
import br.com.cwi.curser.controller.response.UsuarioResumidoResponse;
import br.com.cwi.curser.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    @Autowired
    private RemoverCursoService removerCursoService;
    @Autowired
    private ListarInstrutoresService listarInstrutoresService;
    @Autowired
    private ListarCursosPaginadoService listarCursosPaginadoService;

    @GetMapping
    public List<CursoResumidoResponse> listar(){
        return listarCursosService.listarAtivos();
    }

    @GetMapping("/paginado")
    public Page<CursoResumidoResponse> listarPaginado(Pageable pageable){
        return listarCursosService.listarAtivosPaginados(pageable);
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
    public void adicionarAluno(@PathVariable Long id, @Valid @RequestBody AdicionarAlunoRequest request){
        adicionarAlunoService.adicionar(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(NO_CONTENT)
    public void removerCurso(@PathVariable @Valid Long id){
        removerCursoService.remover(id);
    }

    @GetMapping("/{id}/instrutores")
    public List<UsuarioResumidoResponse> listarInstrutores(@PathVariable Long id){
        return listarInstrutoresService.listar(id);
    }

    @GetMapping("/{id}/instrutores/jpql")
    public List<UsuarioResumidoResponse> listarInstrutoresJPQL(@PathVariable Long id){
        return listarInstrutoresService.listarJPQL(id);
    }

    @GetMapping("/{id}/instrutores/nativo")
    public List<UsuarioResumidoResponse> listarInstrutoresNativo(@PathVariable Long id){
        return listarInstrutoresService.listarNativo(id);
    }

    @GetMapping("/search")
    public Page<CursoResumidoPaginadoResponse> listarCursosPaginado(@RequestParam String text, Pageable pageable){
        return listarCursosPaginadoService.listar(text, pageable);
    }
}
