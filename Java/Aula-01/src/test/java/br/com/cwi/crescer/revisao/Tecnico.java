package br.com.cwi.crescer.revisao;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Tecnico extends Funcionario{

    public Tecnico(String nome, LocalDate data, TipoContrato tipoContrato, BigDecimal salario) {
        super(nome, data, tipoContrato, salario, "Tecnico");
    }
}
