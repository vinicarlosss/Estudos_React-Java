package br.com.cwi.melevaaijava.domain;

import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
@Entity
public class Corrida {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_passageiro", referencedColumnName = "id")
    private Passageiro passageiro;

    @ManyToOne
    @JoinColumn(name = "id_motorista", referencedColumnName = "id")
    private Motorista motorista;

    @ManyToOne
    @JoinColumn(name = "id_veiculo", referencedColumnName = "id")
    private Veiculo veiculo;

    private BigDecimal pontoInicialX;
    private BigDecimal pontoInicialY;
    private BigDecimal pontoFinalX;
    private BigDecimal pontoFinalY;

    @Enumerated(STRING)
    private Situacao situacao;
    private LocalDateTime dataInicial;
    private LocalDateTime dataFinal;
    private BigDecimal valor;
    private Integer avaliacaoPassageiro;
    private Integer avaliacaoMotorista;
}
