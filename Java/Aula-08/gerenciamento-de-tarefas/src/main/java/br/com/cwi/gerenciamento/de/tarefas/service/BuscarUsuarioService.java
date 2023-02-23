package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.domain.Usuario;
import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import br.com.cwi.gerenciamento.de.tarefas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario porId(Long usaurioId) {
        return usuarioRepository.findById(usaurioId)
                .orElseThrow(()-> new ResponseStatusException(UNPROCESSABLE_ENTITY, "Usuário não encontrado"));
    }
}
