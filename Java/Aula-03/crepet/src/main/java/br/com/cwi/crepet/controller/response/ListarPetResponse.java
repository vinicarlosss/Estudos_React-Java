package br.com.cwi.crepet.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ListarPetResponse {

    private Long id;
    private String nome;
    private String responsavel;
    private boolean premium;

}
