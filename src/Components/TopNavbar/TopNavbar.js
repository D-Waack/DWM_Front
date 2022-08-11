import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './TopNavbar.css'
import ImgAsset from '../../public'

import "primeicons/primeicons.css";                                //icons

import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';

export default function TopNavbar () {
    const [pesquisa, setPesquisa] = useState("");

    return (
        <div>
            <nav className='topNav'>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText className ='pesquisa' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Procure por um exercício ou plano..." />
                </span>
                <div  className="menu">
                </div>
                <nav className="perfil">
                    <Link to="/PerfildoInstrutor">
                        <Avatar image={ImgAsset.PerfildoInstrutor_perfilInstrutor} size="large" shape="circle" />
                    </Link>
                </nav>
            </nav>
        </div>
    );
}