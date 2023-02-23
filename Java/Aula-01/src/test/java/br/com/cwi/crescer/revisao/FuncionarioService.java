package br.com.cwi.crescer.revisao;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public class FuncionarioService {
    public List<Funcionario> filtrarComSalarioMenorQue(BigDecimal salarioEsperado, List<Funcionario> funcionarios) {
        List<Funcionario> funcionariosSelecionados = new ArrayList<>();
        for(Funcionario funcionario: funcionarios){
            if(funcionario.getSalarioLiquido().compareTo(salarioEsperado)==-1){
                funcionariosSelecionados.add(funcionario);
            }
        }
        return funcionariosSelecionados;
    }


    public List<String> retornarApenasPrimeiroNome(List<Funcionario> funcionarios) {
        List<String> nomesSelecionados = new ArrayList<>();
        for(Funcionario funcionario: funcionarios){
            String nome = funcionario.getNome();
            String pattern = "^([a-zA-ZÈ-Úè-ú]+)";
            Pattern regex = Pattern.compile(pattern);
            Matcher verificador = regex.matcher(nome);
            if(verificador.find()){
                nomesSelecionados.add(verificador.group(0));
            }
        }
        return nomesSelecionados;
    }

    public int somarIdade(List<Funcionario> funcionarios) {
        int somaDasIdades = 0;
        for(Funcionario funcionario : funcionarios){
            int idade = Period.between(funcionario.getDataNascimento(), LocalDate.now()).getYears();
            somaDasIdades += idade;
        }

        return somaDasIdades;
    }
}
