import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EdiodePlano.css'
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
// Primereact imports end

/* Axios */
import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3030/plano/'
	
});

export default function EdicaodePlano ({id_, name, description, exercises}) {
	const [planos, setPlanos] = useState([])
	const [id, setId] = useState(id_)
	const [old_nome] = useState(name);
    const [nome, setNome] = useState(name);
    const [descricao, setDescricao] = useState(description);
	const [exercicios, setExercicios] = useState(exercises);

	// Mensagens
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

	const updatePlano = async () => {
		var fail_flag = false;
		const gruposFormatted = []
		var dados = JSON.stringify({nome: nome, lista_exercicio: exercicios, descricao:descricao, instrutor:"62e1b3e34308e76f177b4aba"});
		const customConfig = {
			headers: {
			'Content-Type': 'application/json'
			}
		};
		var res = await api.put('/' + id + "/", dados, customConfig).catch((error) =>
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

	const deletePlano = async () => {
		var fail_flag = false;
		
		const customConfig = {
			headers: {
			'Content-Type': 'application/json'
			}
		};
		var dados = JSON.stringify({nome: nome, lista_exercicio: exercicios, descricao:descricao, instrutor:"62e1b3e34308e76f177b4aba"});
		var res = await api.delete('/' + id + "/", dados, customConfig).catch((error) =>
		{
			console.log(error.config);
			addMessages(3);
			fail_flag = true;
		});
		if(!fail_flag){
			getPlanos();
			addMessages(4);
		}
	}

	const addMessages = (form_status) => {
		if (form_status === 0){
			msgs.current.show([
				{ severity: 'success', detail: 'Plano atualizado.', sticky: true },
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
		else if (form_status === 4) {
			msgs.current.show([
				{ severity: 'success', detail: 'Plano deletado.', sticky: false },
			]);
		}
		else {
			msgs.current.show([
				{ severity: 'error', detail: 'Erro!', sticky: false },
			]);
		}
	}

	const onClickDeletar = () => {
		deletePlano();
	}

	const onClickSalvar = () => {
		var form_status = 1;
		var found_duplicate = false;
		if(nome != ""){
			for (var i=0; i<exercicios.length; i++) {
				if (nome === exercicios[i].nome && nome != old_nome){
					form_status = 2 // Exercicio ja existe
					found_duplicate = true
				}
			}
			if(!found_duplicate) {
				updatePlano();
				return;
			}
		}
		addMessages(form_status);
	}

    // Funções
    const clickerFunction = () => console.log('hi');

	return (
		<div className='EdiodePlano_EdiodePlano'>
			<div className='SelectExercCard'>
				<div className='Base'/>
				<div className='ExercField'>
					<div className='inputfield'/>
					<InputText className ='inputfield' value={exercicios} onChange={(e) => setExercicios(e.target.value)} placeholder="Escolha Exercicios..." />
					<span className='EXERCCIOS'>SELECIONAR EXERCÍCIOS</span>
				</div>
			</div>
			<div className='CriarPlanoCard'>
				<div className='Base_3'/>
				<div className='AtribuiField'><div className='aluno3' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno3})`}}/><div className='aluno2' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno2})`}}/><div className='aluno1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno1})`}}/>
					<div className='excluirAtribuihover'>
						<div className='Base_4'/>
						<div className='excluirIcon_2'>
							<img alt= '' className='Vector_5' src = {ImgAsset.EdiodePlano_Vector_5} />
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
			<Messages style={{zIndex:"2"}}ref={msgs} />
				<div className='Base_5'/>
				<Link to="/">
                	<Button label="CANCELAR" className='Base_5'/>
				</Link>
			</div>
			<div className='ExcluirButton'>
                <Button label="EXCLUIR" className='Base_6' onClick={onClickDeletar}/>
			</div>
			<div className='SalvarButton'>
				<Button label="SALVAR" className='Base_7' onClick={onClickSalvar}/>
			</div>
			<span className='TitlePage'>Edição de Treino</span>
		</div>
	)
}