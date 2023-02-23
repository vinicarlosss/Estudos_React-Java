package br.com.cwi.curser.repository;

import br.com.cwi.curser.domain.Curso;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {
    List<Curso> findByAtivo(boolean ativo);
    Page<Curso> findByAtivo(boolean ativo, Pageable pageable);
    boolean existsByTitulo(String titulo);
}
