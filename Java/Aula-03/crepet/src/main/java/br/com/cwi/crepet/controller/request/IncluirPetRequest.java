package br.com.cwi.crepet.controller.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class IncluirPetRequest {

    private String nome;
    private String responsavel;
    private boolean premium;
}
