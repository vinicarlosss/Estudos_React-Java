package br.com.cwi.curser.service;

import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.domain.Usuario;
import br.com.cwi.curser.repository.CursoRepository;
import br.com.cwi.curser.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario porId(Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(()-> new ResponseStatusException(UNPROCESSABLE_ENTITY, "Usuário não encontrado"));
    }
}
