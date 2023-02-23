package br.com.cwi.melevaaijava.controller.response;

import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;


@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class DetalharPassageiroResponse {

    private Long id;
    private String nome;
    private LocalDate data_nascimento;
    private Situacao situacao;
    private BigDecimal saldo;
    private boolean ativo;
    private BigDecimal avaliacao;
}
