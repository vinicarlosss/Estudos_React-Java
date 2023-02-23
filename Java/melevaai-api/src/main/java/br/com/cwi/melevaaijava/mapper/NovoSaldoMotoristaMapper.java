package br.com.cwi.melevaaijava.mapper;

import br.com.cwi.melevaaijava.controller.response.NovoSaldoResponse;
import br.com.cwi.melevaaijava.domain.Motorista;

public class NovoSaldoMotoristaMapper {
    public static NovoSaldoResponse toResponse(Motorista motorista) {
        return NovoSaldoResponse.builder()
                .novoSaldo(motorista.getSaldo())
                .build();
    }
}
