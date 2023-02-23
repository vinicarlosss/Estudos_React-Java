package br.com.cwi.curser.controller.response;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class UsuarioResumidoComEmailResponse {

    private String nome;
    private String email;
}
