package br.com.cwi.api.service;

import br.com.cwi.api.controller.response.ListarFilmeResponse;
import br.com.cwi.api.mapper.ListarFilmeMapper;
import br.com.cwi.api.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ListarFilmeService {

    @Autowired
    private FilmeRepository filmeRepository;

    public List<ListarFilmeResponse> listar() {
        return filmeRepository.findAll().stream()
                .map(ListarFilmeMapper::toResponse)
                .collect(toList());
    }
}
