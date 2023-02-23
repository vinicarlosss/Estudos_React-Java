package br.com.cwi.curser.controller.response;

import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class CursoResumidoResponse {

    private Long id;
    private String titulo;
    private LocalDate dataInicio;
}
