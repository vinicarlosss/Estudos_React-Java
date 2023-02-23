DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS tarefa CASCADE;
DROP TABLE IF EXISTS usuario_tarefa CASCADE;

CREATE TABLE usuario (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
ALTER TABLE usuario ADD CONSTRAINT uk_usuario UNIQUE (email);

CREATE TABLE tarefa (
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	titulo VARCHAR(50) NOT NULL,
	descricao VARCHAR(100) NOT NULL,
	ativa BOOLEAN NOT NULL
);

ALTER TABLE tarefa ADD CONSTRAINT pk_tarefa PRIMARY KEY (id);
ALTER TABLE tarefa ADD CONSTRAINT uk_tarefa UNIQUE (titulo);

CREATE TABLE usuario_tarefa(
	id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
	usuario_id BIGINT NOT NULL,
	tarefa_id BIGINT NOT NULL
);

ALTER TABLE usuario_tarefa ADD CONSTRAINT pk_usuario_tarefa PRIMARY KEY (id);
ALTER TABLE usuario_tarefa ADD CONSTRAINT fk_usuario_tarefa_usuario FOREIGN KEY (usuario_id) REFERENCES usuario;
ALTER TABLE usuario_tarefa ADD CONSTRAINT fk_usuario_tarefa_tarefa FOREIGN KEY (tarefa_id) REFERENCES tarefa;