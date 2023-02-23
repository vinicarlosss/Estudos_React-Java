package br.com.cwi.melevaaijava.controller.response;

import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import java.math.BigDecimal;


@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class ListarPassageiroResponse {

    private Long id;
    private  String nome;
    private Situacao situacao;
    private BigDecimal saldo;
    private boolean ativo;
}
