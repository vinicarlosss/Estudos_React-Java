package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.request.IncluirUsuarioRequest;
import br.com.cwi.curser.controller.response.IdResponse;
import br.com.cwi.curser.domain.Usuario;
import br.com.cwi.curser.repository.UsuarioRepository;
import br.com.cwi.curser.validator.IncluirUsuarioValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.curser.mapper.IdResponseMapper.toResponse;
import static br.com.cwi.curser.mapper.IncluirUsuarioMapper.toEntity;

@Service
public class IncluirUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private ValidaEmailUnicoService validaEmailUnicoService;
    @Autowired
    private IncluirUsuarioValidator incluirUsuarioValidator;

    public IdResponse incluir(IncluirUsuarioRequest request) {

        incluirUsuarioValidator.validar(request);
        validaEmailUnicoService.validar(request.getEmail());

        Usuario usuario = toEntity(request);

        usuarioRepository.save(usuario);

        return toResponse(usuario.getId());

    }
}
