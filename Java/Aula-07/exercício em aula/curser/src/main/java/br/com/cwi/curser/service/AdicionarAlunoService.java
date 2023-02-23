package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.request.AdicionarAlunoRequest;
import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.domain.Usuario;
import br.com.cwi.curser.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdicionarAlunoService {

    @Autowired
    private BuscarCursoService buscarCursoService;
    @Autowired BuscarUsuarioService buscarUsuarioService;
    @Autowired
    private CursoRepository cursoRepository;
    public void adicionar(Long cursoId, AdicionarAlunoRequest request) {

        Curso curso= buscarCursoService.porId(cursoId);
        Usuario aluno = buscarUsuarioService.porId(request.getUsuarioId());

        curso.adicionarAluno(aluno);

        cursoRepository.save(curso);
    }
}
