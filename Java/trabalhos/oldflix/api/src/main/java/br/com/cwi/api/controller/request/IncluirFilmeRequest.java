package br.com.cwi.api.controller.request;

import br.com.cwi.api.domain.Categoria;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class IncluirFilmeRequest {

    private String titulo;
    private String descricao;
    private Categoria categoria;
    private String imagem;
}
