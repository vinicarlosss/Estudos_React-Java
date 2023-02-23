package br.com.cwi.api.controller.response;

import br.com.cwi.api.domain.Categoria;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ListarFilmeResponse {
    private Long id;
    private String titulo;
    private String descricao;
    private boolean disponivel;
    private Categoria categoria;
    private String imagem;
}
