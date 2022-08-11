import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './CadastroExercicio.css'
import ImgAsset from '../public'

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

export default function CadastroExerccio () {
	useEffect(()=>{
		getExercicios();
	}, []) // <-- empty dependency array

	const [exercicios, setExercicios] = useState([])

	const getExercicios = async () => {
		var data = await api.get('/').then(({data}) => data).catch((exception) => {
			console.log(exception);
		});
		setExercicios(data)
	};

	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [equipamento, setEquipamento] = useState("");
	const [grupos, setGrupos] = useState([
		{name: ''},
	]);
	const grupoSelecionado = useState(null);

	//Mensagem
	const msgs = useRef(null);

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

	const onClickCriar = (e) => {
		if(nome !== "" && descricao!=="" && grupos!== []){
			console.log("You are here!")
			addMessages()
		}
	}

	const onGrupoSelect = (e) => {
		for (let i = 0; i < grupos.length; i++) {
			if(grupos[i].name === e.value.name)
				return
		}
		setGrupos([...grupos, e.value])
	}

	const addMessages = () => {
		msgs.current.show([
			{ severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
		]);
	}

	const currentPosition= 2;
	
	return (
		<div className='container_exercicio'>
            <span className='title'>Criar exercício</span>
            <div className='buttons'>
                <div className=''>
                    <Button label="CRIAR" className='buttons_criar' onClick={onClickCriar}/>
                    <Messages ref={msgs} />
                </div>
                <div className='CancelButton'>
                    <Button label="CANCELAR" className='buttons_cancelar' onClick={clickerFunction}/>
                </div>
            </div>
			<div className='exercicio_card'>
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
						<div className='Base_4'/>
						<span className='Quadrceps'>Quadríceps</span>
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
					<InputText className='inputfield_3' placeholder="Nome do exercício..."  value={nome} onChange={(e) => setNome(e.target.nome)} />
					<span className='TTULO'>TÍTULO</span>
				</div>
			</div>
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
					<div className='addEquipButton'>
						<div className='base'/>
						<div className='addIcon'>
							<img className='Vector_2' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_2} />
						</div>
					</div>
					<div className='searchIcon2'>
						<img className='Vector_3' alt = '' src = {ImgAsset.CadastrodeExerccio_Vector_3} />
					</div>
					<span className='EQUIPAMENTOS'>SELECIONAR EQUIPAMENTOS</span>
				</div>
			</div>
		</div>
	)
}