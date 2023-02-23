package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.domain.Passageiro;

import java.math.BigDecimal;

import static br.com.cwi.melevaaijava.enums.Situacao.OCIOSO;

public class IncluirPassageiroMapper {
    public static Passageiro toEntity(DadosPassageiroRequest request) {
        return Passageiro.builder()
                .nome(request.getNome())
                .cpf(request.getCpf())
                .data_nascimento(request.getData_nascimento())
                .saldo(new BigDecimal("0"))
                .ativo(true)
                .situacao(OCIOSO)
                .build();
    }
}
