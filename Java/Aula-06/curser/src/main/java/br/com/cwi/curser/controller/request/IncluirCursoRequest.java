package br.com.cwi.curser.controller.request;

import br.com.cwi.curser.domain.Nivel;
import br.com.cwi.curser.domain.Tipo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;

@Getter @Setter
public class IncluirCursoRequest {

    @NotBlank
    private String titulo;
    @NotNull
    private Tipo tipo;
    @NotNull
    private Nivel nivel;
    @NotNull
    private LocalDate dataInicio;
}
