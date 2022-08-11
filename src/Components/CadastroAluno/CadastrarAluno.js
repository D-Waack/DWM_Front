import React from 'react';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import CadastrodeAluno from './CadastrodeAluno';

import '../CriarExercicio/CriarExercicio.css'

export default function CadastrarAluno() {
    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><CadastrodeAluno/></div>
            {//<div className="content">Content</div>
}
        </div>
    )
}