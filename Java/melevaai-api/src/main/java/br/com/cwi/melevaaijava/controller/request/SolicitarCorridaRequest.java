package br.com.cwi.melevaaijava.controller.request;

import lombok.*;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.LinkedList;
import java.util.List;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class SolicitarCorridaRequest {

    @NotNull
    private Long idPassageiro;
    @NotNull
    private List<BigDecimal> pontoInicial = new LinkedList<>();
    @NotNull
    private List<BigDecimal> pontoFinal = new LinkedList<>();

}
