package br.com.cwi.api.service;

import br.com.cwi.api.domain.Filme;
import br.com.cwi.api.repository.FilmeRepository;
import br.com.cwi.api.validator.RemoverFilmeValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RemoverFilmeService {

    @Autowired
    private FilmeRepository filmeRepository;
    @Autowired
    private RemoverFilmeValidator removerFilmeValidator;

    public void remover(Long id) {

        removerFilmeValidator.validar(id);
        Filme filme = filmeRepository.findById(id).get();
        filmeRepository.deleteById(id);
    }

}
