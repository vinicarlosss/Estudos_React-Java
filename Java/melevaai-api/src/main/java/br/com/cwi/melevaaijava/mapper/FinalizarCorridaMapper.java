package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.FinalizarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

import static br.com.cwi.melevaaijava.enums.Situacao.FINALIZADA;
import static br.com.cwi.melevaaijava.enums.Situacao.OCIOSO;

public class FinalizarCorridaMapper {

    public static final BigDecimal VALOR_POR_SEGUNDO = new BigDecimal("0.20");

    public static Corrida toEntity(Corrida corrida) {
        Corrida corridaAtualizada = Corrida.builder()
                .id(corrida.getId())
                .passageiro(corrida.getPassageiro())
                .motorista(corrida.getMotorista())
                .veiculo(corrida.getVeiculo())
                .pontoInicialX(corrida.getPontoInicialX())
                .pontoInicialY(corrida.getPontoInicialY())
                .pontoFinalX(corrida.getPontoFinalX())
                .pontoFinalY(corrida.getPontoFinalY())
                .dataInicial(corrida.getDataInicial())
                .dataFinal(LocalDateTime.now())
                .situacao(FINALIZADA)
                .valor(calculaValorCorrida(corrida).multiply(VALOR_POR_SEGUNDO))
                .build();
        corridaAtualizada.getPassageiro().pagar(corridaAtualizada.getValor());
        corridaAtualizada.getMotorista().depositar(corridaAtualizada.getValor());
        corridaAtualizada.getPassageiro().setSituacao(OCIOSO);
        corridaAtualizada.getMotorista().setSituacao(OCIOSO);
        return corridaAtualizada;
    }

    private static BigDecimal calculaValorCorrida(Corrida corrida) {
        return BigDecimal.valueOf(corrida.getDataInicial()
                .until(LocalDateTime.now(), ChronoUnit.SECONDS));
    }

    public static FinalizarCorridaResponse toResponse(Corrida entity) {
        return  FinalizarCorridaResponse.builder()
                .valorCobrado(entity.getValor())
                .build();
    }
}
