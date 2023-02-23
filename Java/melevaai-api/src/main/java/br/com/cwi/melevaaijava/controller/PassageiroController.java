package br.com.cwi.melevaaijava.controller;

import br.com.cwi.melevaaijava.controller.request.DadosOperacaoCarteiraRequest;
import br.com.cwi.melevaaijava.controller.request.DadosPassageiroRequest;
import br.com.cwi.melevaaijava.controller.response.DetalharPassageiroResponse;
import br.com.cwi.melevaaijava.controller.response.IdResponse;
import br.com.cwi.melevaaijava.controller.response.ListarPassageiroResponse;
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
@RequestMapping("/passageiros")
@CrossOrigin(origins = "*")
public class PassageiroController {


    @Autowired
    private ListarPassageiroService listarPassageiroService;
    @Autowired
    private IncluirPassageiroService incluirPassageiroService;
    @Autowired
    private ExcluirPassageiroService excluirPassageiroService;
    @Autowired
    private AlterarPassageiroService alterarPassageiroService;
    @Autowired
    private DepositarValorService depositarValorService;
    @Autowired
    private DetalharPassageiroService detalharPassageiroService;

    @GetMapping
    public Page<ListarPassageiroResponse> listar(Pageable pageable){
        return listarPassageiroService.listar(pageable);
    }

    @GetMapping("/detalhar/{id}")
    public DetalharPassageiroResponse detalhar(@PathVariable Long id){
        return detalharPassageiroService.detalhar(id);
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public IdResponse incluir(@Valid @RequestBody DadosPassageiroRequest request){
        return incluirPassageiroService.incluir(request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(NO_CONTENT)
    public void excluir(@PathVariable Long id){
        excluirPassageiroService.excluir(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(CREATED)
    public IdResponse alterar(@PathVariable Long id, @Valid @RequestBody DadosPassageiroRequest request){
        return alterarPassageiroService.alterar(id, request);
    }

    @PutMapping("/depositar/{id}")
    @ResponseStatus(CREATED)
    public NovoSaldoResponse depositar(@PathVariable Long id, @RequestBody DadosOperacaoCarteiraRequest request){
        return depositarValorService.depositar(id, request);
    }
}
