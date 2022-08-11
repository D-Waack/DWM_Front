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
	baseURL: 'http://localhost:3001/plano/'
	
});


export default function IndexPlanos() {
    const [planos, setPlanos] = useState([]);
    
    const msgs = useRef(null);

    // Use effect
	useEffect(()=>{
		getPlanos();
	}, []) // <-- empty dependency array

    // Funções do AXIOS
	const getPlanos = async () => {
		var data = await api.get('/').then(({data}) => data).catch((exception) => {
			msgs.current.show([
				{ severity: 'error', detail: 'Função "get" no back-end falhou. O back-end está rodando? Veja console.', sticky: false },
			]);
			console.log(exception);
		});
		setPlanos(data)
	};

    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className='content'>
                <h2>Cadastrar plano</h2>
                <Link to="/CriarPlano">
                    Novo Plano
                </Link>
                <h2>Editar planos</h2>
                <ul>
                    {planos.map((plano,i) => 
                        <li key={i}>
                            <Link to={{
                                pathname:"/EditarPlano",
                                state:plano
                                }}>{plano.nome}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <Messages style={{zIndex:"2"}}ref={msgs} />
        </div>
    )
}