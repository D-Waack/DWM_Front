import React from 'react';
import Navgrid from '../Navgrid/Navgrid';
import TopNav from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import CadastrodePlano from '../CadastroPlano/CadastrodePlano';

import '../CriarExercicio/CriarExercicio.css'

export default function CriarPlano() {
    return (
        <div className="container">
            <div className="header"><TopNav/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><CadastrodePlano/></div>
        </div>
    )
}