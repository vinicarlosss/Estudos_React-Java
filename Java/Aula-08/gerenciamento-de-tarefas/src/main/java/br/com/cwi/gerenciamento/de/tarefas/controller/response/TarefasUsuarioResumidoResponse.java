package br.com.cwi.gerenciamento.de.tarefas.controller.response;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class TarefasUsuarioResumidoResponse {

    private String tarefa_titulo;
    private String tarefa_descricao;
    private boolean tarefa_ativa;
}
