package br.com.cwi.gerenciamento.de.tarefas.controller.response;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class TarefaResumidaResponse {

    private Long id;
    private String titulo;
    private String Descricao;
}
