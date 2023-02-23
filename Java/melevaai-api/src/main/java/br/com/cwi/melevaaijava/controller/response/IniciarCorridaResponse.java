package br.com.cwi.melevaaijava.controller.response;

import lombok.*;

import java.math.BigDecimal;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class IniciarCorridaResponse {

    private BigDecimal tempoEstimado;
    private BigDecimal valorEstimado;

}
