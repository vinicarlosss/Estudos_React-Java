package br.com.cwi.crescer.biblioteca.factories;

import br.com.cwi.crescer.biblioteca.security.domain.Usuario;

public class UsuarioFactory {

    public static Usuario get() {
        Usuario usuario = new Usuario();
        usuario.setId(SimpleFactory.getRandomLong());
        usuario.setNome("Usuário de teste");
        usuario.setEmail("teste@cwi.com.br");
        return usuario;
    }
}
