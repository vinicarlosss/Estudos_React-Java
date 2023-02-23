INSERT INTO habilitacao
(numero, categoria, data_vencimento)
values
('12345678990', 'B', '2023-12-31'),
('12345678991', 'B', '2023-12-31'),
('12345678992', 'B', '2023-12-31');

INSERT INTO motorista
(nome, data_nascimento, cpf, id_habilitacao, ativo, situacao, saldo)
values
('Joao Silva', '1993-01-01', '12345678910', 1, true, 'OCIOSO', 0),
('Maria Silva', '1993-01-01', '12345678911', 2, true, 'OCIOSO', 0),
('Andre Silva', '1993-01-01', '12345678912', 3, true, 'INICIADA', 0);


insert into veiculo
(modelo, cor, foto_url, categoria, id_motorista, ativo)
values
('audi a3', 'preto', 'https://carros2023.com.br/wp-content/uploads/2022/08/1-1.png', 'B', 1, true),
('audi a3', 'preto', 'https://carros2023.com.br/wp-content/uploads/2022/08/1-1.png', 'B', 2, true),
('audi a3', 'preto', 'https://carros2023.com.br/wp-content/uploads/2022/08/1-1.png', 'B', 3, true);

insert into passageiro
(nome, data_nascimento, cpf, situacao, saldo, ativo)
values
('Joaquim Silva', '1990-01-01', '12345678900', 'OCIOSO', 100, true),
('Pedro Silva', '1990-01-01', '12345678901', 'OCIOSO', 100, true),
('Mariana Silva', '1990-01-01', '12345678902', 'OCIOSO', 100, true),
('Augusto Silva', '1990-01-01', '12345678903', 'INICIADA', 100, true),
('Luciana Silva', '1990-01-01', '12345678904', 'OCIOSO', 100, true);


INSERT INTO corrida
(id_passageiro, id_motorista, id_veiculo, ponto_inicialx, ponto_inicialy, ponto_finalx, ponto_finaly, situacao, data_inicial, data_final, valor, avaliacao_passageiro, avaliacao_motorista)
VALUES(1, 1, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(2, 2, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(3, 1, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(4, 2, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(1, 1, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(2, 2, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(3, 1, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(4, 2, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(1, 3, 1, 1, 1, 4, 4, 'FINALIZADA', now(), now(), 50, null, null),
(4, 3, 1, 1, 1, 4, 4, 'INICIADA', now(), null, null, null, null),
(1, 1, 1, 1, 1, 4, 4, 'SOLICITADA', now(), null, null, null, null),
(2, 2, 1, 1, 1, 4, 4, 'SOLICITADA', now(), null, null, null, null);