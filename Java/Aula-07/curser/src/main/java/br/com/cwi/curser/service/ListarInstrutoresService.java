package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.response.UsuarioResumidoResponse;
import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.mapper.UsuarioResumidoMapper;
import br.com.cwi.curser.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ListarInstrutoresService {

    @Autowired
    private BuscarCursoService buscarCursoService;
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<UsuarioResumidoResponse> listar(Long id) {

        Curso curso = buscarCursoService.porId(id);

        return usuarioRepository.findDistinctByAulasMinistradas_Curso(curso).stream()
                .map(UsuarioResumidoMapper::toResponse)
                .collect(toList());
    }

    public List<UsuarioResumidoResponse> listarJPQL(Long id) {

        Curso curso = buscarCursoService.porId(id);

        return usuarioRepository.findInstrutoresJPQL(curso).stream()
                .map(UsuarioResumidoMapper::toResponse)
                .collect(toList());
    }

    public List<UsuarioResumidoResponse> listarNativo(Long id) {

        Curso curso = buscarCursoService.porId(id);

        return usuarioRepository.findInstrutoresNativo(curso.getId()).stream()
                .map(UsuarioResumidoMapper::toResponse)
                .collect(toList());
    }
}
