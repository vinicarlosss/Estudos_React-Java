package br.com.cwi.gerenciamento.de.tarefas.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.*;

@Entity
@Getter @Setter
public class Usuario {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", unique = true)
    @Basic(optional = false)
    private Long id;
    private String nome;
    private String email;

    @ManyToMany
    @JoinTable(name = "usuario_tarefa",
                joinColumns = @JoinColumn(name = "usuario_id"),
                inverseJoinColumns = @JoinColumn(name = "tarefa_id"))
    private List<Tarefa> tarefas = new ArrayList<>();

    public void adicionarTarefa(Tarefa tarefa) {
        this.getTarefas().add(tarefa);
        tarefa.getUsuarios().add(this);
    }
}
