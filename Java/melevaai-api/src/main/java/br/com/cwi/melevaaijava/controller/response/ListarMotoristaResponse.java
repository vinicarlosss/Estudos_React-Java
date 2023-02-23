package br.com.cwi.melevaaijava.controller.response;

import br.com.cwi.melevaaijava.enums.Categoria;
import br.com.cwi.melevaaijava.enums.Situacao;
import lombok.*;


@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class ListarMotoristaResponse {

    private Long id;
    private String nome;
    private Categoria categoriaHabilitacao;
    private Situacao situacao;

}
