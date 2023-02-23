package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.ListarPassageiroResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;


public class ListarPassageiroMapper {

    public static ListarPassageiroResponse toResponse(Passageiro entity) {
        return ListarPassageiroResponse.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .situacao(entity.getSituacao())
                .saldo(entity.getSaldo())
                .ativo(entity.isAtivo())
                .build();
    }
}

