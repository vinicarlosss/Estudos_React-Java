package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.DetalharCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;

public class DetalharCorridaMapper {
    public static DetalharCorridaResponse toResponse(Corrida entity) {
        return DetalharCorridaResponse.builder()
                .id(entity.getId())
                .nomePassageiro(entity.getPassageiro().getNome())
                .nomeMotorista(entity.getMotorista().getNome())
                .modeloVeiculo(entity.getVeiculo().getModelo())
                .situacao(entity.getSituacao())
                .pontoInicialX(entity.getPontoInicialX())
                .pontoInicialY(entity.getPontoInicialY())
                .pontoFinalX(entity.getPontoFinalX())
                .pontoFinalY(entity.getPontoFinalY())
                .dataInicial(entity.getDataInicial())
                .dataFinal(entity.getDataFinal())
                .valor(entity.getValor())
                .avaliacaoPassageiro(entity.getAvaliacaoPassageiro())
                .avaliacaoMotorista(entity.getAvaliacaoMotorista())
                .build();
    }
}
