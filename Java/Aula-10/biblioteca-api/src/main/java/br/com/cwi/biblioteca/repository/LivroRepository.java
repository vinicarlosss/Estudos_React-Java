package br.com.cwi.biblioteca.repository;

import br.com.cwi.biblioteca.security.domain.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro, Long> {
}
