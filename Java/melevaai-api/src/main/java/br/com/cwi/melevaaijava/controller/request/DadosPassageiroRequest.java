package br.com.cwi.melevaaijava.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
public class DadosPassageiroRequest {

    @NotBlank
    @Size(max = 100)
    private String nome;
    @NotNull
    private LocalDate data_nascimento;
    @NotBlank
    @Size(min = 11, max = 11)
    private String cpf;
}
