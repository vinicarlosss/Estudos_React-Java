package br.com.cwi.curser.mapper;

import br.com.cwi.curser.controller.request.IncluirUsuarioRequest;
import br.com.cwi.curser.domain.Usuario;

public class IncluirUsuarioMapper {

    public static Usuario toEntity(IncluirUsuarioRequest request){
        return Usuario.builder()
                .nome(request.getNome())
                .email(request.getEmail())
                .build();
    }
}
