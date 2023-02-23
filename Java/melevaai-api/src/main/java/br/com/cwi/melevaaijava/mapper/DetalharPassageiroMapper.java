package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.DetalharPassageiroResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;

public class DetalharPassageiroMapper {
    public static DetalharPassageiroResponse toResponse(Passageiro entity) {
        return DetalharPassageiroResponse.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .data_nascimento(entity.getData_nascimento())
                .situacao(entity.getSituacao())
                .saldo(entity.getSaldo())
                .ativo(entity.isAtivo())
                .avaliacao(entity.getAvaliacao())
                .build();
    }
}
