package br.com.cwi.biblioteca.security.mapper;

import br.com.cwi.biblioteca.security.controller.response.UsuarioReponse;
import br.com.cwi.biblioteca.security.domain.Permissao;
import br.com.cwi.biblioteca.security.domain.Usuario;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

public class UsuarioMapper {
    public static UsuarioReponse toResponse(Usuario entity){
        return UsuarioReponse.builder()
                .nome(entity.getNome())
                .email(entity.getEmail())
                .permissoes(buildPermissoesResponse(entity.getPermissoes()))
                .build();
    }

    private static List<String> buildPermissoesResponse(List<Permissao> permissoes) {
        return permissoes.stream()
                .map(Permissao::getNome)
                .collect(toList());
    }
}
