package br.com.cwi.api.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter @Setter
public class AlugarFilmeResponse {
    private Long id;
    private LocalDate dataRetirada;
}
