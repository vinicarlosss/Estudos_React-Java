package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.mapper.IncluirPassageiroMapper;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.validator.ValidarDadosIncluirPassageiroService;
import br.com.cwi.melevaaijava.validator.DadosPassageiroValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.cwi.melevaaijava.mapper.IdResponseMapper.toResponse;

@Service
public class IncluirPassageiroService {

    @Autowired
    private DadosPassageiroValidator dadosPassageiroValidator;
    @Autowired
    private ValidarDadosIncluirPassageiroService validarDadosIncluirPassageiroService;
    @Autowired
    private PassageiroRepository passageiroRepository;

    public IdResponse incluir(DadosPassageiroRequest request) {

        dadosPassageiroValidator.validar(request);
        validarDadosIncluirPassageiroService.validar(request);

        Passageiro passageiro = IncluirPassageiroMapper.toEntity(request);

        passageiroRepository.save(passageiro);

        return toResponse(passageiro.getId());
    }
}
