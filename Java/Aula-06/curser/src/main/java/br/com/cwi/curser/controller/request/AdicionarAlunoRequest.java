package br.com.cwi.curser.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter @Setter
public class AdicionarAlunoRequest {

    @NotNull
    private Long usuarioId;
}
