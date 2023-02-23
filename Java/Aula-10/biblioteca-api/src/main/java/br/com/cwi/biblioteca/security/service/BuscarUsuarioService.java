package br.com.cwi.biblioteca.security.service;

import br.com.cwi.biblioteca.security.controller.response.UsuarioReponse;
import br.com.cwi.biblioteca.security.domain.Usuario;
import br.com.cwi.biblioteca.security.mapper.UsuarioMapper;
import br.com.cwi.biblioteca.security.service.UsuarioAutenticadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.biblioteca.security.mapper.UsuarioMapper.toResponse;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    public UsuarioReponse buscar(){
        Usuario usuarioAutenticado = usuarioAutenticadoService.get();
        return toResponse(usuarioAutenticado);
    }

}
