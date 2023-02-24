package br.com.cwi.crescer.biblioteca.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Data
public class AlterarLivroRequest {

    @NotBlank
    private String titulo;
    private LocalDate data_devolucao;
}
