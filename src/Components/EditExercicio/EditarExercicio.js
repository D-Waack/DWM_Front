import React from 'react';
import { useLocation } from 'react-router-dom';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import EdicaodeExercicio from './EdicaodeExercicio';

import '../CriarExercicio/CriarExercicio.css'

export default function EditarExercicio() {
    var location = useLocation();
    var exercicio = location.state

    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><EdicaodeExercicio id_={exercicio._id} name={exercicio.nome} description={exercicio.execucao} groups={exercicio.grupoMuscular} equipment = {exercicio.equipamento}/></div>
        </div>
    )
}