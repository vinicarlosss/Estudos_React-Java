package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.response.UsuarioResumidoComEmailResponse;
import br.com.cwi.curser.mapper.UsuarioResumidoComEmailMapper;
import br.com.cwi.curser.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    public Page<UsuarioResumidoComEmailResponse> listarUsuarioPaginado(String text, Pageable pageable) {

        return usuarioRepository.findByText(text.toLowerCase(), pageable)
                .map(UsuarioResumidoComEmailMapper::toResponse);
    }
}
