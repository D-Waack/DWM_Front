import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CadastrodePlano.css'
import ImgAsset from '../../public'

// Primereact imports begin
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

/* Componentes */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Messages } from 'primereact/messages';
import { Dropdown } from 'primereact/dropdown';

/* Axios */
import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3030/plano/'
	
});

export default function CadastrodePlano () {
	// Valores
	const [planos, setPlanos] = useState([])
	const [nome, setNome] = useState('')
	const [descricao, setDescricao] = useState('')
	/*const [exercicios, setExercicios] = useState([
		{name: ''},
	]);*/
	const [exercicios, setExercicios] = useState('');
	const [exercicioSelecionado, setExercicioSelecionado] = useState(null)
 
	// Use effect
	useEffect(()=>{
		getPlanos();
	}, []) // <-- empty dependency array

	// Mensagem
	const msgs = useRef(null);

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

	const createPlano = async () => {
		var fail_flag = false;
		const exerciciosFormatted = []
		for (var i=0; i<exercicios.length; i++) {
			if (exercicios[i].name != '')
				exerciciosFormatted.push(exercicios[i].name);
		}
		var dados = JSON.stringify({nome: nome, instrutor: "62e1b3e34308e76f177b4aba", lista_exercicio: exerciciosFormatted, descricao: descricao});
		const customConfig = {
			headers: {
			'Content-Type': 'application/json'
			}
		};
		var res = await api.post('/', dados, customConfig).catch((error) =>
		{
			console.log(error.config);
			addMessages(3);
			fail_flag = true;
		});
		if(!fail_flag){
			getPlanos();
			addMessages(0);
		}
	}

	// Funções
	const onExercicioSelect = (e) => {
		for (let i = 0; i < exercicios.length; i++) {
			if(exercicios[i].name === e.value.name)
				return
		}
		setExercicios([...exercicios, e.value])
	}

	const onClickCriar = () => {
		var form_status = 1;
		var found_duplicate = false;
		if(nome !== "" && descricao!=="" && exercicios!== []){
			for (var i=0; i<planos.length; i++) {
				if (nome === planos[i].nome){
					form_status = 2 // Nome ja existe
					found_duplicate = true
				}
			}
			if(!found_duplicate) {
				createPlano();
				return;
			}
		}
		addMessages(form_status);
	}

	const addMessages = (form_status) => {
		if (form_status === 0){
			msgs.current.show([
				{ severity: 'success', detail: 'Novo plano criado.', sticky: true },
			]);
		}
		else if (form_status === 1) {
			msgs.current.show([
				{ severity: 'error', detail: 'Dados necessários não foram inseridos.', sticky: false },
			]);
		}
		else if (form_status ===2) {
			msgs.current.show([
				{ severity: 'error', detail: 'Plano com este nome já existe.', sticky: false },
			]);
		}
		else if (form_status === 3) {
			msgs.current.show([
				{ severity: 'error', detail: 'Falha na conexão com back-end.', sticky: false },
			]);
		}
		else {
			msgs.current.show([
				{ severity: 'error', detail: 'Erro!', sticky: false },
			]);
		}
	}

	return (
		<div className='CadastrodePlano_CadastrodePlano'>
			<div className='SelectExercCard'>
				<div className='Base'/>
				<div className='ExercItem2'>
					<div className='Base_1'/>
					{/*
					<div className='Base_1'>
						{ exercicios.map((exercicio, index) => (
								<div key={index}>
									<span >{exercicio.name}</span>
								</div>
						))}
					</div>*/
}
				</div>
				<div className='ExercItem1hover'>

				</div>
				<div className='ExercField'>
					<InputText className ='inputfield' value={exercicios} onChange={(e) => setExercicios(e.target.value)} placeholder="Escolha Exercicios..." />
					{//<Dropdown className ="inputfield" value={exercicioSelecionado} options={exercicios} onChange={onExercicioSelect} optionLabel="name" placeholder="Busque por exercícios..." />
}
					<span className='EXERCCIOS'>SELECIONAR EXERCÍCIOS</span>
				</div>
			</div>
			<div className='CriarPlanoCard'>
				<div className='Base_3'/>
				<div className='AtribuiField'><div className='aluno3' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno3})`}}/><div className='aluno2' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno2})`}}/><div className='aluno1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno1})`}}/>
					<div className='excluirAtribuihover'>
						<div className='Base_4'/>
						<div className='excluirIcon_2'>
							<img alt= '' className='Vector_5' src = {ImgAsset.CadastrodePlano_Vector_5} />
						</div>
					</div>
					<span className='ATRIBUIRA'>ATRIBUIR A:</span>
				</div>
				<div className='DescField'>
					<InputTextarea className='inputfield_1' placeholder="Descreva como o plano deve ser executado, como periodização, intensidade, cargas..." 
					rows={3} cols={36} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
					<span className='DESCRICAO'>DESCRIÇÃO</span>
				</div>
				<div className='TitleField'>
					<InputText className ='inputfield_2' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Dê um nome ao plano..." />
					<span className='TTULO'>TÍTULO</span>
				</div>
			</div>
			<div className='CancelButton'>
				<Link to="/">
					<Button label="CANCELAR" className='Base_5'/>
				</Link>
			</div>
			<div className='CriarButton'>
				<Button label="CRIAR" className='Base_6' onClick={onClickCriar}/>
			</div>
			<span className='TitlePage'>Criar plano de exercícios</span>
			<Messages style={{zIndex:"2"}}ref={msgs} />
		</div>
	)
}