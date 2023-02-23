package br.com.cwi.curser.controller.response;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter
public class UsuarioResumidoResponse {

    private Long id;
    private String nome;
}
