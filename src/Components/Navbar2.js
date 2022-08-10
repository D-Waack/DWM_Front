import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ImgAsset from '../public'

import './Navbar2.css'

export default function Navbar2 ({position}) {
    const sidebar = useState(true)

    const data = [
        {
            title: 'Home',
            path: '#',
            icon: 
            <div>
                <img alt = '' className='' src = {ImgAsset.CadastrodeExerccio__Path_} />
				<img alt = '' className='' src = {ImgAsset.CadastrodeExerccio__Path_3} />
				
            </div>,
            className: 'nav-text'
        },
        {
            title: 'Aluno',
            path: '/CadastrodeAluno',
            icon: <div>
                <img alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_13} />
                </div>,
            className: 'nav-text'
        },
        {
            title: 'Exercicio',
            path: '/CadastrodeExerccio',
            icon:  <div>
            <img alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_12} />
            </div>,
            className: 'nav-text'
        },
        {
            title: 'Plano',
            path: '/CadastrodePlano',
            icon: <img alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_11} />,
            className: 'nav-text'
        },
    ]
    
    var indicadorIndex = 0
    const setIndicador = (obj) => {
        indicadorIndex = obj.position
    }

    return (
        <div>
            <nav className= 'nav-menu'>
                {setIndicador({position})}
                <img alt='' className={'indicador' + indicadorIndex} src = {ImgAsset.CadastrodeExerccio_Indicator} />
                <ul className='nav-menu-items'>
                    {data.map((item,index) => {
                        return(
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}