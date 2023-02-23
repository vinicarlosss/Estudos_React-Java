package br.com.cwi.biblioteca.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Getter @Setter
public class IncluirLivroRequest {

    @NotBlank
    private String nome;
    @NotBlank
    private String descricao;

    private LocalDate ano_publicacao;
}
