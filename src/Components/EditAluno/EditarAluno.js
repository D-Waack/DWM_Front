import React from 'react';
import { useLocation } from 'react-router-dom';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';
import EdicaodeAluno from './EdicaodeAluno';

import '../CriarExercicio/CriarExercicio.css'

export default function EditarAluno() {
    var location = useLocation();
    var aluno = location.state
    
    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className="content"><EdicaodeAluno id_={aluno._id} name={aluno.nome} mail={aluno.email} username={aluno.username} password={aluno.senha} instrutor={aluno.instrutor}/></div>
        </div>
    )
}