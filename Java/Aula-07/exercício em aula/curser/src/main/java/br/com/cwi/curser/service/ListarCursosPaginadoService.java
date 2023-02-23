package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.response.CursoResumidoPaginadoResponse;
import br.com.cwi.curser.controller.response.CursoResumidoResponse;
import br.com.cwi.curser.mapper.CursoResumidoPaginadoMapper;
import br.com.cwi.curser.repository.CursoRepository;
import br.com.cwi.curser.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarCursosPaginadoService {

    @Autowired
    CursoRepository cursoRepository;
    public Page<CursoResumidoPaginadoResponse> listar(String text, Pageable pageable) {
        return cursoRepository.findByTitulo(text.toLowerCase(), pageable)
                .map(CursoResumidoPaginadoMapper::toResponse);
    }
}
