import React from 'react';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import EdicaodeAluno from './EdicaodeAluno';

import '../CriarExercicio/CriarExercicio.css'

export default function EditarAluno() {
    const nome = "Daniel Mongoose"
    const email = "dan.mongWaack@tuturu.com"
    const username = "Daniel Waack"
    const password = "1234"
    const planos = []
    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><EdicaodeAluno name={nome} mail={email} username={username} password={password} plans={planos}/></div>
        </div>
    )
}