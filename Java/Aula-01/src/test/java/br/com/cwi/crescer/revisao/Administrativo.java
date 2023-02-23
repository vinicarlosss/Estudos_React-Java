package br.com.cwi.crescer.revisao;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Administrativo extends Funcionario {

    public Administrativo(String nome, LocalDate data, TipoContrato tipoContrato, BigDecimal salario) {
        super(nome, data, tipoContrato, salario, "Administrativo");
    }
}
