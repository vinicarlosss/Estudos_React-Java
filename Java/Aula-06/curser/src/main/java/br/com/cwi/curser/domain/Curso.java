package br.com.cwi.curser.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.EnumType.STRING;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
@Entity
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    @Enumerated(STRING)
    private Tipo tipo;
    @Enumerated(STRING)
    private Nivel nivel;
    private LocalDate dataInicio;
    private boolean ativo;

    @OneToMany(mappedBy = "curso")
    private List<Aula> aulas = new ArrayList<>();
    @ManyToMany
    @JoinTable(name = "curso_aluno",
            joinColumns = @JoinColumn(name = "curso_id")
            , inverseJoinColumns = @JoinColumn(name = "aluno_id"))
    private List<Usuario> alunos = new ArrayList<>();

    public void adicionarAula(Aula aula) {
        this.getAulas().add(aula);
        aula.setCurso(this);
    }

    public void adicionarAluno(Usuario aluno) {
        this.getAlunos().add(aluno);
        aluno.getCursos().add(this);
    }
}
