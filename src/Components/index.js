import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<h2>Criações</h2>
		<Link to='/CriarExercicio'><div>Criação de Exercício</div></Link>
		<Link to='/CadastrarAluno'><div>Cadastro de Aluno</div></Link>
		<Link to='/CriarPlano'><div>Criação de Plano</div></Link>

		<h2>Edições</h2>
		<Link to='/EditarExercicio'><div>Edição de Exercício</div></Link>
		<Link to='/EditarAluno'><div>Edição de Aluno</div></Link>
		<Link to='/EditarPlano'><div>Edição de Plano</div></Link>

	</div>
	)
}