package br.com.cwi.gerenciamento.de.tarefas.repository;

import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.domain.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


}
