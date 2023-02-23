package br.com.cwi.crepet.controller.response;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class IncluirPetResponse {

    private Long id;
    private String nome;
    private String responsavel;
}
