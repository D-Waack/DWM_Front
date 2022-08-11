import React from 'react';
import { useLocation } from 'react-router-dom';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import EdicaodePlano from './EdicaodePlano';

import '../CriarExercicio/CriarExercicio.css'

export default function EditarPlano() {
    var location = useLocation();
    var plano = location.state

    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><EdicaodePlano id_={plano._id} name={plano.nome} description={plano.descricao} exercises={plano.lista_exercicio}/></div>
        </div>
    )
}