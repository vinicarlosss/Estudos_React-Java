package br.com.cwi.melevaaijava.controller.request;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class DadosOperacaoCarteiraRequest {

    private BigDecimal valor;
}
