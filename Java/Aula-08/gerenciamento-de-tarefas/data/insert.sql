INSERT INTO usuario (nome, email) values
('Carlos', 'Carlos@cwi.com.br'),
('Carlos Martins', 'Carlos.martins@cwi.com.br'),
('Amanda Dutra', 'dutra.amanda@cwi.com.br'),
('Laura Loch', 'loch.laura@cwi.com.br'),
('Rodolfo Freitas', 'feitas.rodolfo@cwi.com.br');

INSERT INTO tarefa (titulo, descricao, ativa) values
('Fazer deploy da api', 'Publicar em produção a api do crescer', true),
('Verificar servidor de homologação', 'Verificar o funcionamento da api do crescer no servidor de homologação', true),
('Fazer a reunião de size', 'Fazer a reunião de size das estórias da próxima sprint', true);

INSERT INTO usuario_tarefa(usuario_id, tarefa_id) values
(1,2),
(5,1);
