package br.com.cwi.melevaaijava.controller.response;

import lombok.*;

@Builder @AllArgsConstructor
@NoArgsConstructor @Getter @Setter
public class AvaliacaoCorridaResponse {

    private Long id;
    private Integer nota;
}
