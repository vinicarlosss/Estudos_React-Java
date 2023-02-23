package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.domain.Habilitacao;
import br.com.cwi.melevaaijava.domain.Motorista;

public class AlterarMotoristaMapper {
    public static Motorista toEntity(Motorista motorista, DadosMotoristaRequest request) {
        Habilitacao habilitacaoAlterada = Habilitacao.builder()
                .id(motorista.getHabilitacao().getId())
                .numero(request.getNumeroHabilitacao())
                .categoria(request.getCategoria())
                .dataVencimento(request.getDataVencimento())
                .build();

        return Motorista.builder()
                .id(motorista.getId())
                .nome(request.getNome())
                .dataNascimento(request.getDataNascimento())
                .cpf(request.getCpf())
                .ativo(motorista.isAtivo())
                .situacao(motorista.getSituacao())
                .saldo(motorista.getSaldo())
                .habilitacao(habilitacaoAlterada)
                .build();
    }
}
