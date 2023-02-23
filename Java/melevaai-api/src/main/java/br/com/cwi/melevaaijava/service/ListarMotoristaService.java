package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.ListarMotoristaResponse;
import br.com.cwi.melevaaijava.mapper.ListarMotoristaMapper;
import br.com.cwi.melevaaijava.repository.MotoristaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ListarMotoristaService {

    @Autowired
    private MotoristaRepository motoristaRepository;

    public Page<ListarMotoristaResponse> listar(String search, Pageable pageable) {
        return motoristaRepository.findByAtivoAndNomeIgnoreCaseContaining(true, search, pageable).map(ListarMotoristaMapper::toResponse);
    }
}
