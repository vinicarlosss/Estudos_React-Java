package br.com.cwi.melevaaijava.domain;

import br.com.cwi.melevaaijava.enums.Categoria;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
public class Veiculo {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String modelo;
    private String cor;
    private String fotoUrl;
    @Enumerated(STRING)
    private Categoria categoria;
    private boolean ativo;
    @ManyToOne
    @JoinColumn(name = "id_motorista")
    private Motorista idMotorista;
}
