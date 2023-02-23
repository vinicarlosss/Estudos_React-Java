package br.com.cwi.biblioteca.security.repository;

import br.com.cwi.biblioteca.security.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByEmail(String email);
}
