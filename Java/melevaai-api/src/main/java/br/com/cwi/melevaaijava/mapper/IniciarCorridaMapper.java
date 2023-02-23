package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.IniciarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Passageiro;

import java.math.BigDecimal;
import java.math.MathContext;
import java.time.LocalDateTime;

import static br.com.cwi.melevaaijava.enums.Situacao.INICIADA;
import static java.math.RoundingMode.HALF_UP;

public class IniciarCorridaMapper {

    public static final BigDecimal VELOCIDADE_MEDIA_KM = new BigDecimal("30");
    public static final BigDecimal VALOR_POR_SEGUNDO = new BigDecimal("0.20");
    public static final BigDecimal CONVERSAO_GRAUDECIMAL_KM = new BigDecimal("111.32");
    public static final BigDecimal CONVERSAO_HORA_SEGUNDO = new BigDecimal("3600");

    public static Corrida toEntity(Corrida corrida) {
        Passageiro passageiro = corrida.getPassageiro();
        passageiro.setSituacao(INICIADA);
        Motorista motorista = corrida.getMotorista();
        motorista.setSituacao(INICIADA);

        return Corrida.builder()
                .id(corrida.getId())
                .passageiro(passageiro)
                .motorista(motorista)
                .veiculo(corrida.getVeiculo())
                .pontoInicialX(corrida.getPontoInicialX())
                .pontoInicialY(corrida.getPontoInicialY())
                .pontoFinalX(corrida.getPontoFinalX())
                .pontoFinalY(corrida.getPontoFinalY())
                .situacao(INICIADA)
                .dataInicial(LocalDateTime.now())
                .build();
    }

    public static IniciarCorridaResponse toResponse(Corrida corridaAtualizada) {
        BigDecimal distanciaGrauDecimal = calculaTempoEstimado(corridaAtualizada);
        BigDecimal distanciaKm = distanciaGrauDecimal.multiply(CONVERSAO_GRAUDECIMAL_KM);
        BigDecimal tempoEstimado = distanciaKm
                .divide(VELOCIDADE_MEDIA_KM, HALF_UP)
                .multiply(CONVERSAO_HORA_SEGUNDO);
        BigDecimal valorEstimado = tempoEstimado.multiply(VALOR_POR_SEGUNDO);
        return IniciarCorridaResponse.builder()
                .tempoEstimado(tempoEstimado)
                .valorEstimado(valorEstimado)
                .build();
    }

    private static BigDecimal calculaTempoEstimado(Corrida corridaAtualizada) {
        BigDecimal inicialX = corridaAtualizada.getPontoInicialX();
        BigDecimal inicialY = corridaAtualizada.getPontoInicialY();
        BigDecimal finalX = corridaAtualizada.getPontoFinalX();
        BigDecimal finalY = corridaAtualizada.getPontoFinalY();

        BigDecimal catetoX = finalX.subtract(inicialX);
        BigDecimal catetoY = finalY.subtract(inicialY);

        return catetoX.pow(2).add(catetoY.pow(2)).sqrt(new MathContext(4));
    }
}
