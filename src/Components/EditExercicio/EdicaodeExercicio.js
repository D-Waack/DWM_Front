import React from 'react'
import { useState, useRef } from 'react';
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
// Primereact imports end

export default function EdiodeExerccio ( {name, description, groups, equipment} ) {
    const [exercicios, setExercicios] = useState([])
    const [nome, setNome] = useState(name);
	const [descricao, setDescricao] = useState(description);
	const [equipamento, setEquipamento] = useState(equipment);
	const [grupos, setGrupos] = useState(groups);
	const grupoSelecionado = useState(null);

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
					<div className='tagItem2'>
						<div className='Base_4'/>
						<span className='Dorsal'>Dorsal</span>
					</div>
					<div className='tagItem1'>
						<div className='Base_5'/>
						<span className='Bceps'>Bíceps</span>
					</div>
					<div className='inputfield_2'/>
					<span className='hint_2'>Seleceione...</span>
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
				<Button label="EXCLUIR" className='Base_6' onClick={clickerFunction}/>
			</div>
			<div className='ExcluirButton'>
				<Button label="EXCLUIR" className='Base_7' onClick={clickerFunction}/>
			</div>
			<div className='SalvarButton'>
                <Button label="SALVAR" className='Base_8' onClick={clickerFunction}/>
			</div>
			<span className='TitlePage'>Edição de Exercício</span>
		</div>
	)
}