package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefasUsuarioResumidoResponse;
import br.com.cwi.gerenciamento.de.tarefas.domain.Usuario;

import br.com.cwi.gerenciamento.de.tarefas.mapper.TarefasUsuarioResumidoMapper;
import br.com.cwi.gerenciamento.de.tarefas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

import static java.util.stream.Collectors.toList;

public class ListarUsuarioTarefasPaginadoService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private BuscarTarefaService buscarTarefaService;
    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    public Page<List<TarefasUsuarioResumidoResponse>> listarTarefasUsuarioPaginado(Long usuario_id, Pageable pageable) {
        return null;

    }
}
