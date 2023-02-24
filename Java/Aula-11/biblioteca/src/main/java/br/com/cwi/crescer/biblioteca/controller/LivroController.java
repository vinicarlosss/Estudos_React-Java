package br.com.cwi.crescer.biblioteca.controller;

import br.com.cwi.crescer.biblioteca.controller.request.AlterarLivroRequest;
import br.com.cwi.crescer.biblioteca.controller.request.LivroRequest;
import br.com.cwi.crescer.biblioteca.controller.response.AlterarLivroResponse;
import br.com.cwi.crescer.biblioteca.controller.response.DetalheLivroResponse;
import br.com.cwi.crescer.biblioteca.controller.response.LivroResponse;
import br.com.cwi.crescer.biblioteca.security.service.UsuarioAutenticadoService;
import br.com.cwi.crescer.biblioteca.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static br.com.cwi.crescer.biblioteca.security.domain.Funcao.Nomes.ADMIN;
import static br.com.cwi.crescer.biblioteca.security.domain.Funcao.Nomes.USUARIO;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private ListarLivroService listarLivroService;

    @Autowired
    private IncluirLivroService incluirLivroService;

    @Autowired
    private AlugarLivroService alugarLivroService;

    @Autowired
    private DevolverLivroService devolverLivroService;

    @Autowired
    private RemoverLivroService removerLivroService;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private AlterarLivroService alterarLivroService;

    @GetMapping
    public Page<LivroResponse> listarPaginado(Pageable pageable) {
        return listarLivroService.listar(pageable);
    }

    @Secured(ADMIN)
    @PostMapping
    @ResponseStatus(CREATED)
    public LivroResponse incluir(@Valid @RequestBody LivroRequest request) {
        return incluirLivroService.incluir(request);
    }

    @Secured(USUARIO)
    @PutMapping("/{livroId}/alugar")
    public DetalheLivroResponse alugar(@PathVariable Long livroId) {
        return alugarLivroService.alugar(livroId);
    }

    @Secured(USUARIO)
    @PutMapping("/{livroId}/devolver")
    @ResponseStatus(NO_CONTENT)
    public void devolver(@PathVariable Long livroId) {
        devolverLivroService.devolver(livroId);
    }

    @Secured(ADMIN)
    @DeleteMapping("/{livroId}")
    @ResponseStatus(NO_CONTENT)
    public void remover(@PathVariable Long livroId) {
        removerLivroService.remover(livroId);
    }

    @Secured(ADMIN)
    @PutMapping("/{livroId}/alterar")
    @ResponseStatus(CREATED)
    public AlterarLivroResponse alterar(@PathVariable Long livroId, @RequestBody AlterarLivroRequest request){
            return alterarLivroService.alterar(livroId, request);
    }
}
