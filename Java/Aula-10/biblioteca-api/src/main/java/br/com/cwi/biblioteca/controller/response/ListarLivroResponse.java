package br.com.cwi.biblioteca.controller.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ListarLivroResponse {

    private String nome;
    private String descricao;
    private LocalDate ano_publicacao;
}
