package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.domain.Habilitacao;
import br.com.cwi.melevaaijava.domain.Motorista;
import br.com.cwi.melevaaijava.enums.Situacao;

import java.math.BigDecimal;

public class IncluirMotoristaMapper {
    public static Motorista toEntity(DadosMotoristaRequest request, Habilitacao habilitacao) {

        return Motorista.builder()
                .nome(request.getNome())
                .dataNascimento(request.getDataNascimento())
                .cpf(request.getCpf())
                .ativo(true)
                .situacao(Situacao.OCIOSO)
                .saldo(new BigDecimal("0"))
                .habilitacao(habilitacao)
                .build();
    }
}
