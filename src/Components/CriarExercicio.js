import React from 'react';
import Navgrid from './Navgrid';
import TopNavbar from './TopNavbar';
import AlunoBar from './AlunoBar';
import CadastrodeExerccio from './CadastrodeExerccio';

import './CriarExercicio.css'

export default function CriarExercicio() {
    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><CadastrodeExerccio/></div>
            {//<div className="content">Content</div>
}
        </div>
    )
}