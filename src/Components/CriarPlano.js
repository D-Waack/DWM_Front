import React from 'react';
import Navgrid from './Navgrid';
import TopNav from './TopNavbar';
import AlunoBar from './AlunoBar';
import CadastrodePlano from './CadastrodePlano';

import './CriarExercicio.css'

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