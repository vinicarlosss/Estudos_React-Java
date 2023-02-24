package br.com.cwi.crescer.biblioteca.repository;

import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.domain.Situacao;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro, Long> {

    Page<Livro> findAllBySituacao(Situacao situacao, Pageable pageable);

    boolean existsByTitulo(String titulo);
}
