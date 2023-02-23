package br.com.cwi.curser.repository;

import br.com.cwi.curser.domain.Curso;
import io.micrometer.core.instrument.binder.db.MetricsDSLContext;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {
    List<Curso> findByAtivo(boolean ativo);
    Page<Curso> findByAtivo(boolean ativo, Pageable pageable);
    boolean existsByTitulo(String titulo);

    @Query("from Curso u where lower(u.titulo) like %:text% and u.ativo is true")
    Page<Curso> findByTitulo(@Param("text") String text, Pageable pageable);
}
