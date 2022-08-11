import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navgrid from '../Navgrid/Navgrid';
import TopNavbar from '../TopNavbar/TopNavbar';
import AlunoBar from '../AlunoBar/AlunoBar';

import '../CriarExercicio/CriarExercicio.css'

import { Messages } from 'primereact/messages';

/* Axios */
import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3030/exercicio/'
	
});

export default function IndexExercicios() {
    const [exercicios, setExercicios] = useState([]);
    
    const msgs = useRef(null);

    // Use effect
	useEffect(()=>{
		getExercicios();
	}, []) // <-- empty dependency array

    // Funções do AXIOS
	const getExercicios = async () => {
		var data = await api.get('/').then(({data}) => data).catch((exception) => {
			msgs.current.show([
				{ severity: 'error', detail: 'Função "get" no back-end falhou. O back-end está rodando? Veja console.', sticky: false },
			]);
			console.log(exception);
		});
		setExercicios(data)
	};

    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className='content'>
                <h2>Criar exercício</h2>
                <Link to="/CriarExercicio">
                    Novo Exercicio
                </Link>
                <h2>Editar exercícios</h2>
                <ul>
                    {exercicios.map((exercicio,i) => 
                        <li key={i}>
                            <Link to={{
                                pathname:"/EditarExercicio",
                                state:exercicio
                                }}>{exercicio.nome}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <Messages style={{zIndex:"2"}}ref={msgs} />
        </div>
    )
}