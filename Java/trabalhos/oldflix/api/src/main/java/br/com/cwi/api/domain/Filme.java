package br.com.cwi.api.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;

@Entity
@Getter @Setter
public class Filme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String descricao;
    private Boolean disponivel;
    @Enumerated(STRING)
    private Categoria categoria;
    private String responsavel;
    @Column(name = "data_retirada")
    private LocalDate dataRetirada;
    private String imagem;
}
