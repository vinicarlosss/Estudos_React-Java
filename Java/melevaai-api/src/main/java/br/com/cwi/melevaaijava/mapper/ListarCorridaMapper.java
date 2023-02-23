package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.ListarCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;

public class ListarCorridaMapper {
    public static ListarCorridaResponse toResponse(Corrida entity) {
        return ListarCorridaResponse.builder()
                .id(entity.getId())
                .nomePassageiro(entity.getPassageiro().getNome())
                .nomeMotorista(entity.getMotorista().getNome())
                .modeloVeiculo(entity.getVeiculo().getModelo())
                .situacao(entity.getSituacao())
                .dataInicial(entity.getDataInicial())
                .dataFinal(entity.getDataFinal())
                .valor(entity.getValor())
                .avaliacaoPassageiro(entity.getAvaliacaoPassageiro())
                .avaliacaoMotorista(entity.getAvaliacaoMotorista())
                .pontoInicialX(entity.getPontoInicialX())
                .pontoInicialY(entity.getPontoInicialY())
                .pontoFinalX(entity.getPontoFinalX())
                .pontoFinalY(entity.getPontoFinalY())
                .build();
    }
}
