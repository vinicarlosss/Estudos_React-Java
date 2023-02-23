package br.com.cwi.crescer.revisao;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Gestor extends Funcionario{

    public Gestor(String nome, LocalDate data, TipoContrato tipoContrato, BigDecimal salario, int funcionariosSubordinados) {
        super(nome, data, tipoContrato, salario, "Gestor", funcionariosSubordinados);
    }
}
