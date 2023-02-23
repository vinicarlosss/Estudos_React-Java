package br.com.cwi.melevaaijava.controller.request;

import br.com.cwi.melevaaijava.enums.Categoria;
import lombok.Data;
import org.hibernate.validator.constraints.URL;

import javax.persistence.Enumerated;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import static javax.persistence.EnumType.STRING;

@Data
public class DadosVeiculoRequest {

    @NotBlank
    @Size(min = 3, max = 50)
    private String modelo;
    @NotBlank
    @Size(min = 3, max = 25)
    private String cor;
    @NotBlank
    @URL
    @Size(max = 200)
    private String fotoUrl;
    @Enumerated(STRING)
    private Categoria categoria;
    @NotNull
    private Long idMotorista;

}
