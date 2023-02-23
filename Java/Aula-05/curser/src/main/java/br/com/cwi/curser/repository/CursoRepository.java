package br.com.cwi.curser.repository;

import br.com.cwi.curser.domain.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {
    List<Curso> findByAtivo(boolean b);

    boolean existsByTitulo(String titulo);
}
