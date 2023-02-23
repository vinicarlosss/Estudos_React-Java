package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.response.ListarPassageiroResponse;
import br.com.cwi.melevaaijava.mapper.ListarPassageiroMapper;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import static br.com.cwi.melevaaijava.enums.Situacao.OCIOSO;

@Service
public class ListarPassageiroService {

    @Autowired
    private PassageiroRepository passageiroRepository;
    public Page<ListarPassageiroResponse> listar(Pageable pageable) {
        return passageiroRepository.findBysituacao(OCIOSO, pageable)
                .map(ListarPassageiroMapper::toResponse);
    }
}
