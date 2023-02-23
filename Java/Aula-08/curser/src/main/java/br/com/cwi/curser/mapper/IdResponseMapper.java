package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.response.IdResponse;

public class IdResponseMapper {
    public static IdResponse toResponse(Long id) {
        return IdResponse.builder().id(id).build();
    }
}
