package br.com.cwi.curser.service;

import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RemoverCursoService {

    @Autowired
    private  BuscarCursoService buscarCursoService;
    @Autowired
    private CursoRepository cursoRepository;

    @Transactional
    public void remover(Long cursoId) {

        Curso curso = buscarCursoService.porId(cursoId);
        curso.setAtivo(false);

        cursoRepository.save(curso);
    }
}
