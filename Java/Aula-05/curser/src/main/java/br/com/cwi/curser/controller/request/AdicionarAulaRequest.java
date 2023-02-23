package br.com.cwi.curser.controller.request;


import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Getter @Setter
public class AdicionarAulaRequest {

    @NotBlank
    private String titulo;
    @NotBlank
    private String descricao;
    @NotNull
    private Long instrutorId;
}
