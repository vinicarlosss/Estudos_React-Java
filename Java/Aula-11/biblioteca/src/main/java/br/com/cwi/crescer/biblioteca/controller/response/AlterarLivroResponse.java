package br.com.cwi.crescer.biblioteca.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AlterarLivroResponse {

    private Long id;
    private String titulo;
    private LocalDate data_devolucao;
}
