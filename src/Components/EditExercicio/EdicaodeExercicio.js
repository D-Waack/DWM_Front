import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EdiodeExerccio.css'
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

export default function EdiodeExerccio ( {id_, name, description, groups, equipment} ) {
    const [exercicios, setExercicios] = useState([])
	const [id] = useState(id_);
	const [old_nome, setOldNome] = useState(name);
    const [nome, setNome] = useState(name);
	const [descricao, setDescricao] = useState(description);
	const [equipamento, setEquipamento] = useState(equipment);
	const [grupos, setGrupos] = useState(groups);
	const grupoSelecionado = useState(null);

	// Mensagens
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
	const updateExercicio = async () => {
		var fail_flag = false;
		const gruposFormatted = []
		for (var i=0; i<grupos.length; i++) {
			if (grupos[i] === null)
				grupos[i] = ''
			if (grupos[i].name != '')
				gruposFormatted.push(grupos[i]);
		}
		var dados = JSON.stringify({nome: nome, execucao: descricao, grupoMuscular:gruposFormatted, equipamento:equipamento, descricaoVideo:""});
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
			getExercicios();
			addMessages(0);
		}
	}

	const deleteExercicio = async () => {
		var fail_flag = false;
		
		const customConfig = {
			headers: {
			'Content-Type': 'application/json'
			}
		};
		var dados = JSON.stringify({nome: nome, execucao: descricao, grupoMuscular:grupos, equipamento:equipamento, descricaoVideo:""});
		var res = await api.delete('/' + id + "/", dados, customConfig).catch((error) =>
		{
			console.log(error.config);
			addMessages(3);
			fail_flag = true;
		});
		if(!fail_flag){
			getExercicios();
			addMessages(4);
		}
	}

	//Funções
	const clickerFunction = () => console.log('hi');
	
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

    // Funções
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
				{ severity: 'success', detail: 'Exercício atualizado.', sticky: true },
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
		else if (form_status === 4) {
			msgs.current.show([
				{ severity: 'success', detail: 'Exercício deletado.', sticky: false },
			]);
		}
		else {
			msgs.current.show([
				{ severity: 'error', detail: 'Erro!', sticky: false },
			]);
		}
	}

	const onClickSalvar = () => {
		var form_status = 1;
		var found_duplicate = false;
		if(nome != "" && descricao!= "" && grupos!= []){
			for (var i=0; i<exercicios.length; i++) {
				if (nome === exercicios[i].nome && nome != old_nome){
					form_status = 2 // Exercicio ja existe
					found_duplicate = true
				}
			}
			if(!found_duplicate) {
				updateExercicio();
				return;
			}
		}
		addMessages(form_status);
	}

	const onClickDeletar = () => {
		deleteExercicio();
	}

	return (
		<div className='EdiodeExerccio_EdiodeExerccio'>
			<div className='SelectEquipCard'>
				<div className='Base'/>
				<div className='equipItem1hover'>
					<div className='Base_1'/>
					<div className='editIcon'>
						<img alt= '' className='Vector' src = {ImgAsset.EdiodeExerccio_Vector} />
					</div>
					<div className='excluirIcon'>
						<img alt= '' className='Vector_1' src = {ImgAsset.EdiodeExerccio_Vector_1} />
					</div>
					<span className='EquipTitle'>Barra na vertilcal</span>
					<img alt= '' className='image' src = {ImgAsset.EdiodeExerccio_image} />
				</div>
				<div className='EquipField'>
                    <span className="p-input-icon-left">
						<InputText className='inputfield' placeholder="Selecione os equipamentos, se houver..."  value={equipamento} onChange={(e) => setEquipamento(e.target.equipamento)} />
					</span>
					<div className='addEquipButton'>
						<div className='base'/>
						<div className='addIcon'>
							<img alt= '' className='Vector_2' src = {ImgAsset.EdiodeExerccio_Vector_2} />
						</div>
					</div>
					<div className='searchIcon2'>
						<img alt= '' className='Vector_3' src = {ImgAsset.EdiodeExerccio_Vector_3} />
					</div>
					<span className='EQUIPAMENTOS'>SELECIONAR EQUIPAMENTOS</span>
				</div>
			</div>
			<div className='EditExercCard'>
				<div className='Base_2'/>
				<div className='VideoField'>
					<div className='Video'>
						<img alt= '' className='videoImage' src = {ImgAsset.EdiodeExerccio_videoImage} />
						<div className='playIcon'>
							<img alt= '' className='Vector_4' src = {ImgAsset.EdiodeExerccio_Vector_4} />
							<img alt= '' className='Vector_5' src = {ImgAsset.EdiodeExerccio_Vector_5} />
						</div>
					</div>
					<div className='linkButton'>
						<div className='Base_3'/>
						<div className='linkIcon'>
							<img alt= '' className='Vector_6' src = {ImgAsset.EdiodeExerccio_Vector_6} />
							<img alt= '' className='Vector_7' src = {ImgAsset.EdiodeExerccio_Vector_7} />
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
					<div className='inputfield_3'/>
                    <InputText className='inputfield_3' placeholder="Nome do exercício..."  value={nome} onChange={(e) => setNome(e.target.value)} />
					<span className='TTULO'>TÍTULO</span>
				</div>
			</div>
			<div className='CancelButton'>
				<Link to="/">
					<Button label="CANCELAR" className='Base_6'/>
				</Link>
			</div>
			<div className='ExcluirButton'>
				<Button label="EXCLUIR" className='Base_7' onClick={onClickDeletar}/>
			</div>
			<div className='SalvarButton'>
                <Button label="SALVAR" className='Base_8' onClick={onClickSalvar}/>
			</div>
			<Messages style={{zIndex:"2"}}ref={msgs} />
			<span className='TitlePage'>Edição de Exercício</span>
		</div>
	)
}