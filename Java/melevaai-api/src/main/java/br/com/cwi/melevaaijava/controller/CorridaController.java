package br.com.cwi.melevaaijava.controller;

import br.com.cwi.melevaaijava.controller.request.SolicitarCorridaRequest;
import br.com.cwi.melevaaijava.controller.response.*;
import br.com.cwi.melevaaijava.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/corridas")
@CrossOrigin(origins = "*")
public class CorridaController {

    @Autowired
    private ListarCorridaService listarCorridaService;
    @Autowired
    private DetalharCorridaService detalharCorridaService;
    @Autowired
    private SolicitarCorridaService solicitarCorridaService;
    @Autowired
    private IniciarCorridaService iniciarCorridaService;
    @Autowired
    private FinalizarCorridaService finalizarCorridaService;

    @GetMapping
    public Page<ListarCorridaResponse> listar(@RequestParam(required = false, defaultValue = "") String passageiro,
                                              @RequestParam(required = false, defaultValue = "") String motorista,
                                              Pageable pageable) {
        return listarCorridaService.listar(passageiro, motorista, pageable);
    }

    @GetMapping("/{id}")
    public DetalharCorridaResponse detalhar(@PathVariable Long id) {
        return detalharCorridaService.detalhar(id);
    }

    @GetMapping("/passageiro/{id}")
    public Page<ListarCorridaResponse> listarPassageiro(@PathVariable Long id, Pageable pageable) {
        return listarCorridaService.listarPassageiro(id, pageable);
    }

    @GetMapping("/motorista/{id}")
    public Page<ListarCorridaResponse> listarMotorista(@PathVariable Long id, Pageable pageable) {
        return listarCorridaService.listarMotorista(id, pageable);
    }

    @PostMapping("/solicitar")
    @ResponseStatus(CREATED)
    public SolicitarCorridaResponse solicitar(@Valid @RequestBody SolicitarCorridaRequest request) {
        return solicitarCorridaService.solicitar(request);
    }

    @PutMapping("/{id}/iniciar")
    @ResponseStatus(CREATED)
    public IniciarCorridaResponse iniciar(@PathVariable Long id) {
        return iniciarCorridaService.iniciar(id);
    }

    @PutMapping("/{id}/finalizar")
    @ResponseStatus(CREATED)
    public FinalizarCorridaResponse finalizar(@PathVariable Long id) {
        return finalizarCorridaService.finalizar(id);
    }
}
