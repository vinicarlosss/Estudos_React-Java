package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.request.IncluirCursoRequest;
import br.com.cwi.curser.controller.response.IdResponse;
import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.mapper.IdResponseMapper;
import br.com.cwi.curser.mapper.IncluirCursoMapper;
import br.com.cwi.curser.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static br.com.cwi.curser.mapper.IdResponseMapper.toResponse;
import static br.com.cwi.curser.mapper.IncluirCursoMapper.toEntity;

@Service
@Transactional
public class IncluirCursosService {

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private ValidaTituloCursoService validaTituloCursoService;
    public IdResponse incluir(IncluirCursoRequest request) {

        validaTituloCursoService.validar(request.getTitulo());

        Curso curso = toEntity(request);
        curso.setAtivo(true);
        cursoRepository.save(curso);

        return toResponse(curso.getId());
    }
}
