package br.com.cwi.melevaaijava.domain;

import br.com.cwi.melevaaijava.enums.Categoria;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Entity
public class Habilitacao {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String numero;
    @Enumerated(STRING)
    private Categoria categoria;
    private LocalDate dataVencimento;

}