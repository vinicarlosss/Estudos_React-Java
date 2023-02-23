package br.com.cwi.biblioteca.security.controller.response;

import lombok.*;

import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UsuarioReponse {

    private String nome;
    private String email;
    private List<String> permissoes;
}
