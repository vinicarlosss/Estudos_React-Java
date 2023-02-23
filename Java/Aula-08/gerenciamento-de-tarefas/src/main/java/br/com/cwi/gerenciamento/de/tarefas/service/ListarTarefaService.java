package br.com.cwi.gerenciamento.de.tarefas.service;

import br.com.cwi.gerenciamento.de.tarefas.controller.response.TarefaResumidaResponse;
import br.com.cwi.gerenciamento.de.tarefas.mapper.ListarTarefaMapper;
import br.com.cwi.gerenciamento.de.tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarTarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;
    public Page<TarefaResumidaResponse> listarTarefaPaginado(String text, Pageable pageable){
        return tarefaRepository.findByTituloContainingIgnoreCaseOrDescricaoContainingIgnoreCase(text, text, pageable)
                .map(ListarTarefaMapper::toResponse);
    }
}
