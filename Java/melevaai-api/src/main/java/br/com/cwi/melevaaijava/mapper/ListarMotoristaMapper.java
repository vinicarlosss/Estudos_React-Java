package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.ListarMotoristaResponse;
import br.com.cwi.melevaaijava.domain.Motorista;

public class ListarMotoristaMapper {

    public static ListarMotoristaResponse toResponse(Motorista entity) {
        return ListarMotoristaResponse.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .categoriaHabilitacao((entity.getHabilitacao().getCategoria()))
                .situacao(entity.getSituacao())
                .build();
    }
}
