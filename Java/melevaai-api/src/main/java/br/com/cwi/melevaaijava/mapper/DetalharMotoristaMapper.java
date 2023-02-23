package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.DetalharMotoristaResponse;
import br.com.cwi.melevaaijava.domain.Motorista;

public class DetalharMotoristaMapper {
    public static DetalharMotoristaResponse toResponse(Motorista entity) {
        return DetalharMotoristaResponse.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .dataNascimento(entity.getDataNascimento())
                .cpf(entity.getCpf())
                .situacao(entity.getSituacao())
                .saldo(entity.getSaldo())
                .avaliacao(entity.getAvaliacao())
                .numeroHabilitacao(entity.getHabilitacao().getNumero())
                .categoria(entity.getHabilitacao().getCategoria())
                .dataVencimento(entity.getHabilitacao().getDataVencimento())
                .build();
    }
}
