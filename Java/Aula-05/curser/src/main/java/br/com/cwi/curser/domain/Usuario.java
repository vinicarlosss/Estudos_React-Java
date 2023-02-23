package br.com.cwi.curser.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    @Basic(optional = false)
    private Long id;
    private String nome;
    private String email;

    @ManyToMany(mappedBy = "alunos")
    private List<Curso> cursos = new ArrayList<>();

    @OneToMany(mappedBy = "instrutor")
    private List<Aula> aulasMinistradas = new ArrayList<>();

    public void adicionarAula(Aula aula) {
        this.getAulasMinistradas().add(aula);
        aula.setInstrutor(this);
    }
}
