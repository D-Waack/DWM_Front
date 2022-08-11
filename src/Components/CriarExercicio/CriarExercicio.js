import React from 'react';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import CadastrodeExerccio from '../CadastroExercicio/CadastrodeExerccio';

import './CriarExercicio.css'

export default function CriarExercicio() {
    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><CadastrodeExerccio/></div>
        </div>
    )
}