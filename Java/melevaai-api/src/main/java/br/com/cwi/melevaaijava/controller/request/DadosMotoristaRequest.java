package br.com.cwi.melevaaijava.controller.request;

import br.com.cwi.melevaaijava.enums.Categoria;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Data
public class DadosMotoristaRequest {

    @NotBlank
    @Size(min = 3, max = 100)
    private String nome;
    @NotNull
    private LocalDate dataNascimento;
    @NotBlank
    @Size(min = 11, max = 11)
    private String cpf;
    @NotBlank
    @Size(min = 11, max = 11)
    private String numeroHabilitacao;
    @NotNull
    private Categoria categoria;
    @NotNull
    private LocalDate dataVencimento;

}
