package br.com.cwi.melevaaijava.controller.response;

import lombok.*;

import java.math.BigDecimal;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class SolicitarCorridaResponse {

    private Long id;
    private String nomeMotorista;
    private BigDecimal avaliacaoMotorista;
    private String veiculoModelo;
    private String veiculoCor;
    private BigDecimal tempoEsperaMotorista;

}