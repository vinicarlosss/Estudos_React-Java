package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.NovoSaldoResponse;
import br.com.cwi.melevaaijava.domain.Passageiro;

public class NovoSaldoPassageiroMapper {
    public static NovoSaldoResponse toResponse(Passageiro entity) {
        return NovoSaldoResponse.builder()
                .novoSaldo(entity.getSaldo())
                .build();
    }
}
