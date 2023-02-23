package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosVeiculoRequest;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.domain.Veiculo;

public class IncluirVeiculoMapper {

    public static Veiculo toEntity(DadosVeiculoRequest request, Motorista motorista) {
        return Veiculo.builder()
                .modelo(request.getModelo())
                .cor(request.getCor())
                .fotoUrl(request.getFotoUrl())
                .categoria(request.getCategoria())
                .idMotorista(motorista)
                .ativo(true)
                .build();
    }
}
