package br.com.cwi.biblioteca.service;

import br.com.cwi.biblioteca.controller.response.ListarLivroResponse;
import br.com.cwi.biblioteca.mapper.ListarLivroMapper;
import br.com.cwi.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Service
public class ListarLivroService {

    @Autowired
    private LivroRepository livroRepository;

    public List<ListarLivroResponse> listar() {
        return livroRepository.findAll()
                .stream()
                .map(ListarLivroMapper::toResponse)
                .collect(toList());
    }
}
