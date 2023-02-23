package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.response.UsuarioResumidoComEmailResponse;
import br.com.cwi.curser.domain.Usuario;

public class UsuarioResumidoComEmailMapper {

    public static UsuarioResumidoComEmailResponse toResponse(Usuario entity){
        return UsuarioResumidoComEmailResponse.builder()
                .nome(entity.getNome())
                .email(entity.getEmail())
                .build();
    }
}
