package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosAvaliacaoRequest;
import br.com.cwi.melevaaijava.controller.response.AvaliacaoCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Motorista;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class AvaliacaoCorridaMotoristaMapper {
    public static AvaliacaoCorridaResponse toResponse(Corrida corrida) {
        return AvaliacaoCorridaResponse.builder()
                .id(corrida.getId())
                .nota(corrida.getAvaliacaoMotorista())
                .build();
    }

    public static Corrida toEntity(Corrida corrida, DadosAvaliacaoRequest request, List<Corrida> corridasMotorista) {
        BigDecimal avaliacaoMotoristaAtualizada = calculaAvaliacaoMotorista(request, corridasMotorista);
        Motorista motoristaAtualizado = corrida.getMotorista();
        motoristaAtualizado.setAvaliacao(avaliacaoMotoristaAtualizada);

        return Corrida.builder()
                .id(corrida.getId())
                .passageiro(corrida.getPassageiro())
                .motorista(motoristaAtualizado)
                .veiculo(corrida.getVeiculo())
                .pontoInicialX(corrida.getPontoInicialX())
                .pontoInicialY(corrida.getPontoInicialY())
                .pontoFinalX(corrida.getPontoFinalX())
                .pontoFinalY(corrida.getPontoFinalY())
                .situacao(corrida.getSituacao())
                .dataInicial(corrida.getDataInicial())
                .dataFinal(corrida.getDataFinal())
                .valor(corrida.getValor())
                .avaliacaoPassageiro(corrida.getAvaliacaoPassageiro())
                .avaliacaoMotorista(request.getNota())
                .build();
    }

    private static BigDecimal calculaAvaliacaoMotorista(DadosAvaliacaoRequest request, List<Corrida> corridasMotorista) {
        List<Integer> avaliacoesMotorista = corridasMotorista.stream()
                .filter(corrida -> Objects.nonNull(corrida.getAvaliacaoMotorista()))
                .map(corridaFiltrada -> corridaFiltrada.getAvaliacaoMotorista())
                .collect(Collectors.toList());
        Integer somaAvaliacoes = avaliacoesMotorista.stream()
                .reduce(0, Integer::sum);
        return new BigDecimal(somaAvaliacoes + request.getNota())
                .divide(new BigDecimal(avaliacoesMotorista.size() + 1), 2, RoundingMode.HALF_UP);
    }
}
