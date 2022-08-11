import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CadastrodeExerccio.css'
import ImgAsset from '../../public'

// Primereact imports begin
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

/* Componentes */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Messages } from 'primereact/messages';
// Primereact imports end

/* Axios */
import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3030/exercicio/'
	
});

export default function CadastrodeExerccio () {
	// Valores
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [equipamento, setEquipamento] = useState("");
	const [grupos, setGrupos] = useState([
		{name: ''},
	]);
	const grupoSelecionado = useState(null);
	const [exercicios, setExercicios] = useState([])
	const gpsMuscular = [
		{name: 'Bíceps',},
		{name: 'Tríceps',},
		{name: 'Antebraço',},
		{name: 'Deltóides',},
		{name: 'Dorsal',},
		{name: 'Peitoral',},
		{name: 'Abdômen',},
		{name: 'Glúteos',},
		{name: 'Quadríceps',},
		{name: 'Posterior da coxa',},
		{name: 'Panturrilha'},
	];

	// Use effect
	useEffect(()=>{
		getExercicios();
	}, []) // <-- empty dependency array

	//Mensagem
	const msgs = useRef(null);

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
	const createExercicio = async () => {
		var fail_flag = false;
		const gruposFormatted = []
		for (var i=0; i<grupos.length; i++) {
			if (grupos[i].name != '')
				gruposFormatted.push(grupos[i].name);
		}
		var dados = JSON.stringify({nome: nome, execucao: descricao, grupoMuscular:gruposFormatted, equipamento:equipamento, descricaoVideo:""});
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
			getExercicios();
			addMessages(0);
		}
	}


	//Funções

	const onClickCriar = () => {
		var form_status = 1;
		var found_duplicate = false;
		if(nome !== "" && descricao!=="" && grupos!== []){
			for (var i=0; i<exercicios.length; i++) {
				if (nome === exercicios[i].nome){
					form_status = 2 // Exercicio ja existe
					found_duplicate = true
				}
			}
			if(!found_duplicate) {
				createExercicio();
				return;
			}
		}
		else {
			form_status = 1; // Valores faltando
		}
		addMessages(form_status);
	}

	const onGrupoSelect = (e) => {
		for (let i = 0; i < grupos.length; i++) {
			if(grupos[i].name === e.value.name)
				return
		}
		setGrupos([...grupos, e.value])
	}

	const addMessages = (form_status) => {
		if (form_status === 0){
			msgs.current.show([
				{ severity: 'success', detail: 'Novo exercício criado.', sticky: true },
			]);
		}
		else if (form_status === 1) {
			msgs.current.show([
				{ severity: 'error', detail: 'Dados necessários não foram inseridos.', sticky: false },
			]);
		}
		else if (form_status ===2) {
			msgs.current.show([
				{ severity: 'error', detail: 'Exercício com este nome já existe.', sticky: false },
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
		<div className='CadastrodeExerccio_CadastrodeExerccio'>
			<div className='SelectEquipCard'>
				<div className='Base'/>
				<div className='equipItem1hover'>
					<div className='Base_1'/>
					<div className='editIcon'>
						<img className='Vector' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector} />
					</div>
					<div className='excluirIcon'>
						<img className='Vector_1' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_1} />
					</div>
					<span className='EquipTitle'>Máquina Leg Press</span>
					<img className='image' alt = '' src = {ImgAsset.CadastrodeExerccio_image} />
				</div>
				<div className='EquipField'>
					<span className="p-input-icon-left">
						<InputText className='inputfield' placeholder="Selecione os equipamentos, se houver..."  value={equipamento} onChange={(e) => setEquipamento(e.target.equipamento)} />
					</span>
					<div className='searchIcon2'>
						<img className='Vector_3' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_3} />
					</div>
					<span className='EQUIPAMENTOS'>SELECIONAR EQUIPAMENTOS</span>
				</div>
			</div>
			<div className='CriarExercCard'>
				<div className='Base_2'/>
				<div className='VideoField'>
					<div className='Video'>
						<a href="https://www.youtube.com/watch?v=zwvsa7DzzHY">
							<img className='videoImage' alt = '' src = {ImgAsset.EdiodeExerccio_videoImage} />
						</a>
						<div className='playIcon'>
							<img className='Vector_4' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_4} />
							<img className='Vector_5' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_5} />
						</div>
					</div>
					<div className='linkButton'>
						<div className='Base_3'/>
						<div className='linkIcon'>
							<img className='Vector_6' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_6} />
							<img className='Vector_7' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_7} />
						</div>
					</div>
				</div>
				<div className='ExecField'>
					<InputTextarea className='inputfield_1' placeholder="Descreva como o exercício deve ser realizado..." 
					rows={3} cols={36} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
					<span className='EXECUCAO'>EXECUÇÃO</span>
				</div>
				<div className='GrupoField'>
					<div className='tagItem1'>
						{ grupos.map((grupo, index) => (
								<div key={index}>
									<div className={'tagger' + (index + 1)}>
										<span className={'grupo' + (index + 1)}>{grupo.name}</span>
									</div>
								</div>
						))}
					</div>
					<Dropdown className ="inputfield_2" value={grupoSelecionado} options={gpsMuscular} onChange={onGrupoSelect} optionLabel="name" placeholder="Selecione..." />
					<span className='GRUPO'>GRUPO MUSCULAR</span>
				</div>
				<div className='TitleField'>
					<InputText className='inputfield_3' placeholder="Nome do exercício..."  value={nome} onChange={(e) => setNome(e.target.value)} />
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
			
			<span className='TitlePage'>Criar exercício</span>
			<Messages style={{zIndex:"2"}}ref={msgs} />
		</div>
	)
}
