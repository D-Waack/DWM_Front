import React from 'react';
import Navgrid from './Navgrid';
import TopNavbar from './TopNavbar';
import AlunoBar from './AlunoBar';
import EdicaodeExercicio from './EdicaodeExercicio';

import './CriarExercicio.css'

export default function EditarExercicio() {
    const descricao = "Mãos a uma distância maior que o comprimento dos ombros, realizar a repetição contraindo a dorsal e ativando a escápula até encostar a barra no peito."
    const grupos = ([
		{name: 'Bíceps'},
        {name: 'Dorsal'},
	]);
    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><EdicaodeExercicio name="Wide pull up" description={descricao} groups={grupos} equipment = {[]}/></div>
        </div>
    )
}