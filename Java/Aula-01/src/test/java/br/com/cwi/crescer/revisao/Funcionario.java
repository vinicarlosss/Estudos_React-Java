package br.com.cwi.crescer.revisao;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Funcionario {
    private String nome;
    private LocalDate dataNascimento;
    private TipoContrato tipoContrato;
    private BigDecimal salario;

    private String funcao;

    int funcionariosSubordinados;

    public Funcionario(String nome, LocalDate dataNascimento, TipoContrato tipoContrato, BigDecimal salario) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.tipoContrato = tipoContrato;
        this.salario = salario;
    }

    public Funcionario(String nome, LocalDate dataNascimento, TipoContrato tipoContrato, BigDecimal salario,String funcao, int funcionariosSubordinados) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.tipoContrato = tipoContrato;
        this.salario = salario;
        this.funcao = funcao;
        this.funcionariosSubordinados = funcionariosSubordinados;
    }

    public Funcionario(String nome, LocalDate dataNascimento, TipoContrato tipoContrato, BigDecimal salario,String funcao) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.tipoContrato = tipoContrato;
        this.salario = salario;
        this.funcao = funcao;
    }

    public String getNome() {
        return nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public TipoContrato getTipoContrato() {
        return tipoContrato;
    }

    public BigDecimal getSalarioBase() {
        return salario;
    }

    public String getFuncao() {
        return funcao;
    }

    public  void setSalarioBase(BigDecimal novoSalarioBase){
        this.salario = novoSalarioBase;
    }

    public BigDecimal getSalarioLiquido() {

        if(this.funcao == "Gestor" && this.tipoContrato == tipoContrato.CLT){
            BigDecimal salarioLiquido = this.salario.subtract (this.salario.multiply(new BigDecimal(0.30)));
            salarioLiquido = salarioLiquido.setScale(0, BigDecimal.ROUND_HALF_EVEN);
            int bonusPorFuncionario = 100;
            salarioLiquido = salarioLiquido.add(new BigDecimal(bonusPorFuncionario * this.funcionariosSubordinados));
            return salarioLiquido;
        } else if (this.funcao == "Gestor" && this.tipoContrato == tipoContrato.PJ){
            BigDecimal salarioLiquido = this.salario.subtract (this.salario.multiply(new BigDecimal(0.10)));
            salarioLiquido = salarioLiquido.setScale(0, BigDecimal.ROUND_HALF_EVEN);
            int bonusPorFuncionario = 100;
            salarioLiquido = salarioLiquido.add(new BigDecimal(bonusPorFuncionario * this.funcionariosSubordinados));
            return salarioLiquido;
        } else if (this.tipoContrato == tipoContrato.CLT){
            BigDecimal salarioLiquido = this.salario.subtract (this.salario.multiply(new BigDecimal(0.30)));
            salarioLiquido = salarioLiquido.setScale(0, BigDecimal.ROUND_HALF_EVEN);
            return salarioLiquido;
        }
        BigDecimal salarioLiquido = this.salario.subtract (this.salario.multiply(new BigDecimal(0.10)));
        salarioLiquido = salarioLiquido.setScale(0, BigDecimal.ROUND_HALF_EVEN);
        return salarioLiquido;
    }
}
