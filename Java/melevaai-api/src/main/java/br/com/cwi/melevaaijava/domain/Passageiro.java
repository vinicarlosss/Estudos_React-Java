package br.com.cwi.melevaaijava.domain;

import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
public class Passageiro {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String nome;
    private LocalDate data_nascimento;
    private String cpf;
    @Enumerated(STRING)
    private Situacao situacao;
    private BigDecimal saldo;
    private boolean ativo;

    private BigDecimal avaliacao;

    public void depositar(BigDecimal valor){
        BigDecimal novoSaldo = this.getSaldo().add(valor);
        this.setSaldo(novoSaldo);
    }

    public void pagar(BigDecimal valor){
        BigDecimal novoSaldo = this.getSaldo().subtract(valor);
        this.setSaldo(novoSaldo);
    }
}
