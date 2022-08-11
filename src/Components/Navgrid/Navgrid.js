import React from 'react';
import './Navgrid.css'
import ImgAsset from '../../public'
import { Link } from "react-router-dom";

export default function Navgrid() {
    const botoes = [
        { // logo
            content: 
            <div className='navLogo'>
                <img alt='Logo1' className='' src = {ImgAsset.CadastrodeExerccio__Path_} />
                <img alt='Logo2' className='' src = {ImgAsset.CadastrodeExerccio__Path_3} />
                <img alt='Logo3' className='' src = {ImgAsset.CadastrodeExerccio__Path_5} />
            </div>
        },
        { // aluno
            content:
            <Link to="/CadastrarAluno">
                <img alt='aluno icone' className='' src = {ImgAsset.CadastrodeExerccio_Vector_13} />
            </Link>,
        },
        { // exercicio
            content:
            <Link to="/CriarExercicio">
                <img alt='exercicio icone' className='' src = {ImgAsset.CadastrodeExerccio_Vector_12} />
            </Link>,
        },
        { // plano
            content:
            <Link to="/CriarPlano">
                <img alt='plano icone' className='' src = {ImgAsset.CadastrodeExerccio_Vector_11} />
            </Link>,
        }
    ]
    return (
        <div className="container_side">
            <div className='navLogo'>
                {botoes[0].content}
            </div>
            <div className='alunoIcon'>
                {botoes[1].content}
            </div>
            <div className='exercicioIcon'>
                {botoes[2].content}
            </div>
            <div className='planoIcon'>
                {botoes[3].content}
            </div>
        </div>
    );
}