//Versão alternativa da barra no topo

import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ImgAsset from '../../public'

import "primeicons/primeicons.css";                                //icons

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';

import './TopNav.css'

export default function TopNav () {
    const [pesquisa, setPesquisa] = useState("");
    const items = [
    ];  

    const end = <Link to="/PerfildoInstrutor">
        <Avatar image={ImgAsset.PerfildoInstrutor_perfilInstrutor} size="large" shape="circle" />
        <div className='perfilInstrutor'/>
        </Link>;
    const start = 
    <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText className ='Pesquisa' value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Procure por um exercício ou plano..." />
    </span>;

    return (
        <div>
            <div className="card">
                <Menubar className="menuBar" model={items} start={start} end={end} />
            </div>
        </div>
    );
}
