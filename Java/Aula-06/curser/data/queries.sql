--Alunos
select c.id as "cursoId",
	c.titulo as "cursoTitulo",
	al.id as "alunoId",
	al.nome as "alunoNome"
	from curso c
		left join curso_aluno ca on ca.curso_id = c.id
		left join usuario al on al.id = ca.aluno_id