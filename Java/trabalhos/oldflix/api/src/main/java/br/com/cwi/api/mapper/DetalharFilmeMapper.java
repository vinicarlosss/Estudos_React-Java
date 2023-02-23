package br.com.cwi.api.mapper;

import br.com.cwi.api.controller.response.DetalharFilmeResponse;
import br.com.cwi.api.domain.Categoria;
import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.domain.Situacao;

import java.time.LocalDate;

public class DetalharFilmeMapper {

    public static LocalDate checaDataDeEntrega(LocalDate dataRetirada, Categoria categoria){
        switch (categoria){
            case OURO:
                return dataRetirada.plusDays(2);
            case PRATA:
                return dataRetirada.plusDays(3);
            case BRONZE:
                return dataRetirada.plusDays(5);
            default:
                return dataRetirada;
        }
    }

    public static Situacao checaSituacao(LocalDate dataEntrega){
        boolean emDia = LocalDate.now().isAfter(dataEntrega);
        if(emDia){
            return Situacao.EM_ATRASO;
        }
        return Situacao.EM_DIA;
    }

    public  static DetalharFilmeResponse toResponse(Filme filme){
        DetalharFilmeResponse response = new DetalharFilmeResponse();
        if(filme.getDisponivel()){
            response.setId(filme.getId());
            response.setTitulo(filme.getTitulo());
            response.setDescricao(filme.getDescricao());
            response.setDisponivel(filme.getDisponivel());
            response.setCategoria(filme.getCategoria());
            response.setImagem(filme.getImagem());
        }else{
            response.setId(filme.getId());
            response.setTitulo(filme.getTitulo());
            response.setDescricao(filme.getDescricao());
            response.setDisponivel(filme.getDisponivel());
            response.setCategoria(filme.getCategoria());
            response.setResponsavel(filme.getResponsavel());
            response.setDataRetirada(filme.getDataRetirada());
            LocalDate dataEntrega = checaDataDeEntrega(filme.getDataRetirada(), filme.getCategoria());
            response.setDataEntrega(dataEntrega);
            response.setSituacao(checaSituacao(dataEntrega));
            response.setImagem(filme.getImagem());
        }
        return response;
    }
}
