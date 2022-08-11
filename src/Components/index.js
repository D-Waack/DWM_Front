import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<h2>Listagens</h2>
		<Link to='/IndexAlunos'><div>Listagem de Alunos</div></Link>
		<Link to='/IndexExercicios'><div>Listagem de Exercícios</div></Link>
		<Link to='/IndexPlanos'><div>Listagem de Planos</div></Link>
	</div>
	)
}