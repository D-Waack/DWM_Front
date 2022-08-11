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
	baseURL: 'http://localhost:3001/aluno/'
	
});


export default function IndexAlunos() {
    const [alunos, setAlunos] = useState([]);
    
    const msgs = useRef(null);

    // Use effect
	useEffect(()=>{
		getAlunos();
	}, []) // <-- empty dependency array

    // Funções do AXIOS
	const getAlunos = async () => {
		var data = await api.get('/').then(({data}) => data).catch((exception) => {
			msgs.current.show([
				{ severity: 'error', detail: 'Função "get" no back-end falhou. O back-end está rodando? Veja console.', sticky: false },
			]);
			console.log(exception);
		});
		setAlunos(data)
	};

    return (
        <div className="container">
            <div className="header"><TopNavbar/></div>
            <div className="nav"><Navgrid/></div>
            <div className="rightbar"><AlunoBar/></div>
            <div className='content'>
                <h2>Cadastrar aluno</h2>
                <Link to="/CadastrarAluno">
                    Novo Aluno
                </Link>
                <h2>Editar alunos</h2>
                <ul>
                    
                    {alunos.map((aluno,i) => 
                        <li key={i}>
                            <Link to={{
                                pathname:"/EditarAluno",
                                state:aluno
                                }}>{aluno.nome}</Link>
                        </li>
                    )}
                </ul>
            </div>
            <Messages style={{zIndex:"2"}}ref={msgs} />
        </div>
    )
}