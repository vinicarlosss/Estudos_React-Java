package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.IdResponse;

public class IdResponseMapper {
    public static IdResponse toResponse(Long id) {
        return IdResponse.builder()
                .id(id)
                .build();
    }
}
