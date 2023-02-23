package br.com.cwi.curser.service;

import br.com.cwi.curser.controller.response.CursoResumidoResponse;
import br.com.cwi.curser.mapper.CursoResumidoMapper;
import br.com.cwi.curser.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ListarCursosService {

    @Autowired
    private CursoRepository cursoRepository;
    public List<CursoResumidoResponse> listarAtivos(){

        return cursoRepository.findByAtivo(true)
                .stream()
                .map(CursoResumidoMapper::toResponse)
                .collect(toList());
    }

    public Page<CursoResumidoResponse> listarAtivosPaginados(Pageable pageable){

        return cursoRepository.findByAtivo(true, pageable)
                .map(CursoResumidoMapper::toResponse);
    }
}
