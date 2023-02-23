package br.com.cwi.melevaaijava.controller.response;

import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class ListarCorridaResponse {

    private Long id;
    private String nomePassageiro;
    private String nomeMotorista;
    private String modeloVeiculo;
    private Situacao situacao;
    private LocalDateTime dataInicial;
    private LocalDateTime dataFinal;
    private BigDecimal valor;
    private Integer avaliacaoPassageiro;
    private Integer avaliacaoMotorista;
    private BigDecimal pontoInicialX;
    private BigDecimal pontoInicialY;
    private BigDecimal pontoFinalX;
    private BigDecimal pontoFinalY;

}