package br.com.cwi.gerenciamento.de.tarefas.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Setter @Getter
@Builder @AllArgsConstructor @NoArgsConstructor
public class Tarefa {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;
    private boolean ativa;

    @ManyToMany(mappedBy = "tarefas")
    private List<Usuario> usuarios = new ArrayList<>();
}
