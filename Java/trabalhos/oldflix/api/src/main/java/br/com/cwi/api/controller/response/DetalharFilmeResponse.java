package br.com.cwi.api.controller.response;

import br.com.cwi.api.domain.Categoria;
import br.com.cwi.api.domain.Situacao;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Enumerated;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;

@Getter @Setter
public class DetalharFilmeResponse {
    private Long id;
    private String titulo;
    private String descricao;
    private Boolean disponivel;
    private Categoria categoria;
    private String responsavel;
    private LocalDate dataRetirada;
    private LocalDate dataEntrega;
    @Enumerated(STRING)
    private Situacao situacao;
    private String imagem;
}
