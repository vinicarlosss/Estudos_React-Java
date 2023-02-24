package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static br.com.cwi.crescer.biblioteca.domain.Situacao.INATIVO;

@Service
public class RemoverLivroService {

    @Autowired
    private LivroRepository livroRepository;

    public void remover(Long livroId) {
        livroRepository.deleteById(livroId);
    }

    public void removerMaisCompleto(Long livroId) {

        Optional<Livro> livroOpt = livroRepository.findById(livroId);

        if (livroOpt.isEmpty()) {
            return;
        }

        Livro livro = livroOpt.get();
        livro.setSituacao(INATIVO);

        livroRepository.save(livro);
    }

}















