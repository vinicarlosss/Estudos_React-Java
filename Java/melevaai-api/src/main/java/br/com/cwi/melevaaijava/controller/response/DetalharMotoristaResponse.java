package br.com.cwi.melevaaijava.controller.response;

import br.com.cwi.melevaaijava.domain.Veiculo;
import br.com.cwi.melevaaijava.enums.Categoria;
import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class DetalharMotoristaResponse {

    private Long id;
    private String nome;
    private LocalDate dataNascimento;
    private String cpf;
    private Situacao situacao;
    private BigDecimal saldo;
    private BigDecimal avaliacao;
    private String numeroHabilitacao;
    private Categoria categoria;
    private LocalDate dataVencimento;

}
