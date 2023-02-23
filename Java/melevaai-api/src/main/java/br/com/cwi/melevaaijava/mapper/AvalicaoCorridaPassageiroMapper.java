package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosAvaliacaoRequest;
import br.com.cwi.melevaaijava.controller.response.AvaliacaoCorridaResponse;
import br.com.cwi.melevaaijava.domain.Corrida;
import br.com.cwi.melevaaijava.domain.Passageiro;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class AvalicaoCorridaPassageiroMapper {

    public static AvaliacaoCorridaResponse toResponse(Corrida corrida) {
        return AvaliacaoCorridaResponse.builder()
                .id(corrida.getId())
                .nota(corrida.getAvaliacaoPassageiro())
                .build();
    }

    public static Corrida toEntity(Corrida corrida, DadosAvaliacaoRequest request, List<Corrida> corridasPassageiro) {
        BigDecimal avaliacaoPassageiroAtualizada = calculaAvaliacaoPassageiro(request, corridasPassageiro);
        Passageiro passageiroAtualizado = corrida.getPassageiro();
        passageiroAtualizado.setAvaliacao(avaliacaoPassageiroAtualizada);

        return Corrida.builder()
                .id(corrida.getId())
                .passageiro(passageiroAtualizado)
                .motorista(corrida.getMotorista())
                .veiculo(corrida.getVeiculo())
                .pontoInicialX(corrida.getPontoInicialX())
                .pontoInicialY(corrida.getPontoInicialY())
                .pontoFinalX(corrida.getPontoFinalX())
                .pontoFinalY(corrida.getPontoFinalY())
                .situacao(corrida.getSituacao())
                .dataInicial(corrida.getDataInicial())
                .dataFinal(corrida.getDataFinal())
                .valor(corrida.getValor())
                .avaliacaoPassageiro(request.getNota())
                .avaliacaoMotorista(corrida.getAvaliacaoMotorista())
                .build();
    }

    private static BigDecimal calculaAvaliacaoPassageiro(DadosAvaliacaoRequest request, List<Corrida> corridasPassageiro) {
        List<Integer> avaliacoesPassageiro = corridasPassageiro.stream()
                .filter(corrida -> Objects.nonNull(corrida.getAvaliacaoPassageiro()))
                .map(corridaFiltrada -> corridaFiltrada.getAvaliacaoPassageiro())
                .collect(Collectors.toList());
        Integer somaAvaliacoes = avaliacoesPassageiro.stream()
                .reduce(0, Integer::sum);
        return new BigDecimal(somaAvaliacoes + request.getNota())
                .divide(new BigDecimal(avaliacoesPassageiro.size() + 1), 2, RoundingMode.HALF_UP);
    }
}