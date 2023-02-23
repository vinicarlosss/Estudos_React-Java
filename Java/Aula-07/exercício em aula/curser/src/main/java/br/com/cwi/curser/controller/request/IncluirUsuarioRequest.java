package br.com.cwi.curser.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter @Setter
public class IncluirUsuarioRequest {

    @NotBlank
    private String nome;

    @NotNull @Email
    private String email;
}
