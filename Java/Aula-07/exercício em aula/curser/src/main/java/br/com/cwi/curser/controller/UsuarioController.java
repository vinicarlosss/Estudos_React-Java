package br.com.cwi.curser.controller;

import br.com.cwi.curser.controller.request.IncluirUsuarioRequest;
import br.com.cwi.curser.controller.response.IdResponse;
import br.com.cwi.curser.controller.response.UsuarioResumidoComEmailResponse;
import br.com.cwi.curser.service.IncluirUsuarioService;
import br.com.cwi.curser.service.ListarUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private IncluirUsuarioService incluirUsuarioService;
    @Autowired
    private ListarUsuarioService listarUsuarioService;

    @PostMapping
    @ResponseStatus(CREATED)
    private IdResponse incluir(@Valid @RequestBody IncluirUsuarioRequest request){
        return incluirUsuarioService.incluir(request);
    }

    @GetMapping("/search")
    private Page<UsuarioResumidoComEmailResponse> ListarUsuarioPaginado(@RequestParam("text") String text, Pageable pageable){
        return listarUsuarioService.listarUsuarioPaginado(text, pageable);
    }
}
