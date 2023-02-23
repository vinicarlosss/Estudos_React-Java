package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.response.UsuarioResumidoResponse;
import br.com.cwi.curser.domain.Usuario;

public class UsuarioResumidoMapper {

    public static UsuarioResumidoResponse toResponse(Usuario entity){
        return UsuarioResumidoResponse.builder()
                .id(entity.getId())
                .nome(entity.getNome())
                .build();
    }
}
