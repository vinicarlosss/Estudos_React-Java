package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.SolicitarCorridaRequest;
import br.com.cwi.melevaaijava.controller.response.SolicitarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;

import java.math.BigDecimal;
import java.util.Random;

import static br.com.cwi.melevaaijava.enums.Situacao.SOLICITADA;

public class SolicitarCorridaMapper {
    public static Corrida toEntity(SolicitarCorridaRequest request) {
        return Corrida.builder()
                .pontoInicialX(request.getPontoInicial().get(0))
                .pontoInicialY(request.getPontoInicial().get(1))
                .pontoFinalX(request.getPontoFinal().get(0))
                .pontoFinalY(request.getPontoFinal().get(1))
                .situacao(SOLICITADA)
                .build();
    }

    public static SolicitarCorridaResponse toResponse(Corrida corrida) {
        int tempoAleatorio =  new Random().nextInt(6) + 5;
        return SolicitarCorridaResponse.builder()
                .id(corrida.getId())
                .nomeMotorista(corrida.getMotorista().getNome())
                .avaliacaoMotorista(corrida.getMotorista().getAvaliacao())
                .veiculoModelo(corrida.getVeiculo().getModelo())
                .veiculoCor(corrida.getVeiculo().getCor())
                .tempoEsperaMotorista(new BigDecimal(tempoAleatorio))
                .build();
    }
}
