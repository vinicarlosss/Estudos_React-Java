package br.com.cwi.curser.repository;

import br.com.cwi.curser.domain.Curso;
import br.com.cwi.curser.domain.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    boolean existsByEmail(String email);


    List<Usuario> findDistinctByAulasMinistradas_Curso(Curso curso);
    @Query("select distinct u from Usuario u join u.aulasMinistradas a where a.curso = :curso")
    List<Usuario> findInstrutoresJPQL(@Param("curso") Curso curso);

    @Query(value = "select distinct u.* from usuario u inner join aula a on a.instrutor_id = u.id where a.curso_id = ?1", nativeQuery = true)
    List<Usuario> findInstrutoresNativo(Long cursoId);


    @Query("from Usuario u where lower(u.nome) like %:text% or lower(u.email) like %:text%")
    Page<Usuario> findByText(@Param("text") String text, Pageable pageable);
}
