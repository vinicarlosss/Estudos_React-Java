package br.com.cwi.gerenciamento.de.tarefas.repository;

import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefaResumidaResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa,Long> {
    boolean existsByTitulo(String titulo);

    Page<Tarefa> findByTituloContainingIgnoreCaseOrDescricaoContainingIgnoreCase(String text, String text1, Pageable pageable);
}
