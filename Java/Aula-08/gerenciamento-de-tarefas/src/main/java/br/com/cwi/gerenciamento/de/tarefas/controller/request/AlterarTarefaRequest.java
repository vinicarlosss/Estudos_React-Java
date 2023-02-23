package br.com.cwi.gerenciamento.de.tarefas.controller.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter @Setter
public class AlterarTarefaRequest {

    @NotBlank
    private String titulo;
    @NotBlank
    private String descricao;
}
