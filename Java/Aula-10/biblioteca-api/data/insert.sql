INSERT INTO usuario(email, nome, senha, ativo) values('admin@cwi.com.br', 'admin', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);
INSERT INTO usuario(email, nome, senha, ativo) values('usuario@cwi.com.br', 'usuario', '$2a$10$VrIbJURwINOR5HOrWFFTNOwSILsioRJSuOGAg8Luvr9qZDSOl5JXG', true);

INSERT INTO permissao (nome, usuario_id) VALUES('ADMIN', 1);
INSERT INTO permissao (nome, usuario_id) VALUES('USUARIO', 1);
INSERT INTO permissao (nome, usuario_id) VALUES('USUARIO', 2);


INSERT INTO livro(nome, descricao, ano_publicacao) VALUES ('Algoritmos: Teoria e Prática', 'ntrodução aos Algoritmos é um livro sobre programação de computadores de Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest e Clifford Stein.', '1989-01-01');
INSERT INTO livro(nome, descricao, ano_publicacao) VALUES ('Dispositivos eletrônicos e teoria dos circuitos', 'blicado pela primeira vez há 40 anos, “Dispositivos Eletrônicos e Teoria de Circuitos” chega à 11ª edição totalmente revisto e atualizado, apresentando temas como diodos, transistores, polarização e fontes de corrente, bem como mais de cem novos problemas.' , '1972-01-01');
INSERT INTO livro(nome, descricao, ano_publicacao) VALUES ('A revolução dos bixos', 'Animal Farm é um romance satírico do escritor inglês George Orwell, publicado no Reino Unido em 17 de agosto de 1945 e incluído pela revista americana Time na Lista dos 100 melhores romances da língua inglesa.', '1945-08-17');