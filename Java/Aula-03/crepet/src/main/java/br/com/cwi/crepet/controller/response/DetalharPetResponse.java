package br.com.cwi.crepet.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Calendar;

@Getter @Setter
public class DetalharPetResponse {
    private Long id;
    private String nome;
    private String responsavel;
    private boolean premium;
    private LocalDateTime data_inscricao;
}
