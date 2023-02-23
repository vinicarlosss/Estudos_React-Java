package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.controller.request.AdicionarTarefaRequest;
import br.com.cwi.gerenciamento.de.tarefas.domain.Tarefa;
import br.com.cwi.gerenciamento.de.tarefas.domain.Usuario;
import br.com.cwi.gerenciamento.de.tarefas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdicionarTarefaService {
    @Autowired
    private BuscarUsuarioService buscarUsuarioService;
    @Autowired
    private BuscarTarefaService buscarTarefaService;
    @Autowired
    private UsuarioRepository usuarioRepository;

    public void adicionar(Long id, AdicionarTarefaRequest request) {
        Usuario usuario = buscarUsuarioService.porId(id);
        Tarefa tarefa = buscarTarefaService.porId(request.getTarefa_id());

        usuario.adicionarTarefa(tarefa);

        usuarioRepository.save(usuario);
    }
}
