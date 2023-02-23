package br.com.cwi.curser.domain;

import lombok.*;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
public class Telefone {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String numero;
    @ManyToOne()
    @JoinColumn(name = "pessoa_id")
    private Pessoa pessoaId;
}
