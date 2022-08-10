import React from 'react';
import Navgrid from './Navgrid';
import TopNavbar from './TopNavbar';
import AlunoBar from './AlunoBar';
import EdicaodePlano from './EdicaodePlano';

import './CriarExercicio.css'

export default function EditarPlano() {
    const name = "Treino só barriga"
    const description="Fazer três séries com 15-20 repetições para cada exercício.\n\nPara Prancha, fazer três séries de 1min.\n\nObs.: Contrair bem a barriga durante a execução."

    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><EdicaodePlano name={name} description={description}/></div>
        </div>
    )
}