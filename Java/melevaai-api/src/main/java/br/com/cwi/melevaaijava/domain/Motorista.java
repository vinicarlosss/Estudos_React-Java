package br.com.cwi.melevaaijava.domain;

import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Entity
public class Motorista {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String nome;
    private LocalDate dataNascimento;
    private String cpf;
    private boolean ativo;
    @Enumerated(STRING)
    private Situacao situacao;
    private BigDecimal saldo;
    private BigDecimal avaliacao;

    @OneToOne
    @JoinColumn(name = "id_habilitacao", referencedColumnName = "id")
    private Habilitacao habilitacao;

    @OneToMany(mappedBy = "idMotorista")
    private List<Veiculo> veiculos = new ArrayList<>();

    public void sacar(BigDecimal valor) {
        BigDecimal novoSaldo = this.getSaldo().subtract(valor);
        this.setSaldo(novoSaldo);
    }

    public void depositar(BigDecimal valor) {
        BigDecimal novoSaldo = this.getSaldo().add(valor);
        this.setSaldo(novoSaldo);
    }
}
