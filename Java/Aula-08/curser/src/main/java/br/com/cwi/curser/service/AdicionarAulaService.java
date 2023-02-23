package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.request.AdicionarAulaRequest;
import br.com.cwi.curser.controller.response.IdResponse;
import br.com.cwi.curser.domain.Aula;
import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.domain.Usuario;
import br.com.cwi.curser.repository.AulaRepository;
import br.com.cwi.curser.repository.CursoRepository;
import br.com.cwi.curser.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.curser.mapper.AdicionarAulaMapper.toEntity;
import static br.com.cwi.curser.mapper.IdResponseMapper.toResponse;

@Service
public class AdicionarAulaService {

    @Autowired
    private BuscarCursoService buscarCursoService;
    @Autowired BuscarUsuarioService buscarUsuarioService;
    @Autowired
    private CursoRepository cursoRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private AulaRepository aulaRepository;

    @Transactional
    public IdResponse adicionar(Long idCurso, AdicionarAulaRequest request) {

        Curso curso = buscarCursoService.porId(idCurso);

        Usuario instrutor = buscarUsuarioService.porId(request.getInstrutorId());
        Aula aula = toEntity(request);
        curso.adicionarAula(aula);
        instrutor.adicionarAula(aula);
        aulaRepository.save(aula);

        return toResponse(aula.getId());
    }
}
