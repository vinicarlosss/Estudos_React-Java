package br.com.cwi.crescer.biblioteca.security.service;

import br.com.cwi.crescer.biblioteca.security.controller.request.UsuarioRequest;
import br.com.cwi.crescer.biblioteca.security.controller.response.UsuarioResponse;
import br.com.cwi.crescer.biblioteca.security.domain.Permissao;
import br.com.cwi.crescer.biblioteca.security.domain.Usuario;
import br.com.cwi.crescer.biblioteca.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static br.com.cwi.crescer.biblioteca.security.domain.Funcao.USUARIO;
import static br.com.cwi.crescer.biblioteca.security.mapper.UsuarioMapper.toEntity;
import static br.com.cwi.crescer.biblioteca.security.mapper.UsuarioMapper.toResponse;

@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UsuarioResponse incluir(UsuarioRequest request) {

        Usuario usuario = toEntity(request);
        usuario.setSenha(getSenhaCriptografada(request.getSenha()));
        usuario.adicionarPermissao(getPermissaoPadrao());
        usuario.setAtivo(true);

        usuarioRepository.save(usuario);

        return toResponse(usuario);
    }

    private String getSenhaCriptografada(String senhaAberta) {
        return passwordEncoder.encode(senhaAberta);
    }

    private Permissao getPermissaoPadrao() {
        Permissao permissao = new Permissao();
        permissao.setFuncao(USUARIO);
        return permissao;
    }
}
