package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.domain.Passageiro;

public class AlterarPassageiroMapper {
    public static Passageiro toEntity(Passageiro passageiro, DadosPassageiroRequest request) {
        return Passageiro.builder()
                .id(passageiro.getId())
                .nome(request.getNome())
                .cpf(request.getCpf())
                .data_nascimento(request.getData_nascimento())
                .saldo(passageiro.getSaldo())
                .ativo(passageiro.isAtivo())
                .situacao(passageiro.getSituacao())
                .build();
    }
}
