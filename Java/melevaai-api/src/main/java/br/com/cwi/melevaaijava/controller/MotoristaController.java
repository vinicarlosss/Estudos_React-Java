package br.com.cwi.melevaaijava.controller;

import br.com.cwi.melevaaijava.controller.request.DadosMotoristaRequest;
import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import br.com.cwi.melevaaijava.controller.response.DetalharMotoristaResponse;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.controller.response.ListarMotoristaResponse;
import br.com.cwi.melevaaijava.controller.response.NovoSaldoResponse;
import br.com.cwi.melevaaijava.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/motoristas")
@CrossOrigin(origins = "*")
public class MotoristaController {

    @Autowired
    private ListarMotoristaService listarMotoristaService;
    @Autowired
    private DetalharMotoristaService detalharMotoristaService;
    @Autowired
    private IncluirMotoristaService incluirMotoristaService;
    @Autowired
    private AlterarMotoristaService alterarMotoristaService;
    @Autowired
    private ExcluirMotoristaService excluirMotoristaService;
    @Autowired
    private SacarValorService sacarValorService;

    @GetMapping
    public Page<ListarMotoristaResponse> listar(@RequestParam(required = false, defaultValue = "") String search, Pageable pageable) {
        return listarMotoristaService.listar(search, pageable);
    }

    @GetMapping("/{id}")
    public DetalharMotoristaResponse detalhar(@PathVariable Long id) {
        return detalharMotoristaService.detalhar(id);
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public IdResponse incluir(@Valid @RequestBody DadosMotoristaRequest request) {
        return incluirMotoristaService.incluir(request);
    }

    @PutMapping("/{id}")
    @ResponseStatus(NO_CONTENT)
    public void alterar(@PathVariable Long id, @Valid @RequestBody DadosMotoristaRequest request) {
        alterarMotoristaService.alterar(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(NO_CONTENT)
    public void excluir(@PathVariable Long id) {
        excluirMotoristaService.excluir(id);
    }

    @PutMapping("/sacar/{id}")
    @ResponseStatus(CREATED)
    public NovoSaldoResponse sacar(@PathVariable Long id, @RequestBody DadosOperacaoCarteiraRequest request){
        return sacarValorService.sacar(id, request);
    }
}

