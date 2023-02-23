package br.com.cwi.melevaaijava.service;

import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;
import br.com.cwi.melevaaijava.repository.PassageiroRepository;
import br.com.cwi.melevaaijava.service.search.BuscaPassageiroService;
import br.com.cwi.melevaaijava.service.validator.ValidarDadosAlterarPassageiroService;
import br.com.cwi.melevaaijava.validator.DadosPassageiroValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.cwi.melevaaijava.mapper.AlterarPassageiroMapper.toEntity;
import static br.com.cwi.melevaaijava.mapper.IdResponseMapper.toResponse;

@Service
public class AlterarPassageiroService {

    @Autowired
    private DadosPassageiroValidator dadosPassageiroValidator;
    @Autowired
    private ValidarDadosAlterarPassageiroService validarDadosAlterarPassageiroService;
    @Autowired
    private PassageiroRepository passageiroRepository;
    @Autowired
    private BuscaPassageiroService buscaPassageiroService;

    @Transactional
    public IdResponse alterar(Long id, DadosPassageiroRequest request) {
        dadosPassageiroValidator.validar(request);
        Passageiro passageiro = buscaPassageiroService.porId(id);
        validarDadosAlterarPassageiroService.validar(passageiro, request);

        Passageiro passageiroAlterado = toEntity(passageiro, request);

        passageiroRepository.save(passageiroAlterado);

        return toResponse(passageiro.getId());
    }
}
