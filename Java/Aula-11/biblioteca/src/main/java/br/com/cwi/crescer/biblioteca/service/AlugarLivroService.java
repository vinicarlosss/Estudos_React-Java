package br.com.cwi.crescer.biblioteca.service;

import br.com.cwi.crescer.biblioteca.controller.response.DetalheLivroResponse;
import br.com.cwi.crescer.biblioteca.mapper.DetalheLivroMapper;
import br.com.cwi.crescer.biblioteca.domain.Livro;
import br.com.cwi.crescer.biblioteca.repository.LivroRepository;
import br.com.cwi.crescer.biblioteca.security.domain.Usuario;
import br.com.cwi.crescer.biblioteca.security.service.UsuarioAutenticadoService;
import br.com.cwi.crescer.biblioteca.service.core.BuscarLivroService;
import br.com.cwi.crescer.biblioteca.service.core.NowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

import static java.time.DayOfWeek.SATURDAY;
import static java.time.DayOfWeek.SUNDAY;
import static java.util.List.of;
import static java.util.Objects.nonNull;
import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class AlugarLivroService {

    private static final List<DayOfWeek> DIAS_INVALIDOS = of(SATURDAY, SUNDAY);

    @Value("${api.devolucao.dias}")
    private Long prazoDevolucaoPadrao;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private BuscarLivroService buscarLivroService;

    @Autowired
    private NowService nowService;

    @Autowired
    private LivroRepository livroRepository;

    @Transactional
    public DetalheLivroResponse alugar(Long livroId) {

        Livro livro = buscarLivroService.porId(livroId);

        if (nonNull(livro.getResponsavel())) {
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "livro está alugado");
        }

        Usuario usuario = usuarioAutenticadoService.get();

        livro.setResponsavel(usuario);
        livro.setDataDevolucao(calcularDataDevolucao());

        livroRepository.save(livro);

        return DetalheLivroMapper.toResponse(livro);
    }

    private LocalDate calcularDataDevolucao() {

        LocalDate hoje = nowService.getDate();

        LocalDate dataDevolucao = hoje.plusDays(prazoDevolucaoPadrao);

        while (DIAS_INVALIDOS.contains(dataDevolucao.getDayOfWeek())) {
            dataDevolucao = dataDevolucao.plusDays(1);
        }

        return dataDevolucao;
    }
}






