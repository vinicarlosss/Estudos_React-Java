package br.com.cwi.biblioteca.security.controller;

import br.com.cwi.biblioteca.security.controller.response.UsuarioReponse;
import br.com.cwi.biblioteca.security.service.BuscarUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @PostMapping
    public UsuarioReponse login(){
        return buscarUsuarioService.buscar();
    }
}
