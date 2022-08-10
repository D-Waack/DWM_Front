import React from 'react'
import { useState } from 'react';
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

export default function CadastrodePlano () {
	const [nome, setNome] = useState('')
	const [descricao, setDescricao] = useState('')

	// Funçes
	const clickerFunction = () => console.log('hi');

	return (
		<div className='CadastrodePlano_CadastrodePlano'>
			<div className='SelectExercCard'>
				<div className='Base'/>
				<div className='ExercItem2'>
					<div className='Base_1'/>
					<div className='editIcon'>
						<img alt= ''  className='Vector' src = {ImgAsset.CadastrodePlano_Vector} />
					</div>
					<div className='excluirIcon'>
						<img alt= '' className='Vector_1' src = {ImgAsset.CadastrodePlano_Vector_1} />
					</div>
					<img alt= '' className='imageExerc' src = {ImgAsset.ListagemdePlano_imageExerc} />
					<span className='ExeSubtitle'>Quadríceps<br/>Sem equipamento</span>
					<span className='ExeTitle'>Pistol Squat</span>
				</div>
				<div className='ExercItem1hover'>
					<div className='Base_2'/>
					<div className='editIcon_1'>
						<img alt= '' className='Vector_2' src = {ImgAsset.CadastrodePlano_Vector_2} />
					</div>
					<div className='excluirIcon_1'>
						<img alt= '' className='Vector_3' src = {ImgAsset.CadastrodePlano_Vector_3} />
					</div>
					<span className='ExercSubtitle'>Abdômen<br/>Sem equipamento</span>
					<span className='ExercTitle'>Abdominal</span>
					<img alt= '' className='imageExerc_1' src = {ImgAsset.ListagemdePlano_imageExerc_1} />
				</div>
				<div className='ExercField'>
					<div className='inputfield'/>
					<span className='hint'>Busque por exercícios...</span>
					<div className='searchIcon2'>
						<img alt= '' className='Vector_4' src = {ImgAsset.CadastrodePlano_Vector_4} />
					</div>
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
				<Button label="CANCELAR" className='Base_5' onClick={clickerFunction}/>
			</div>
			<div className='CriarButton'>
				<Button label="CRIAR" className='Base_6' onClick={clickerFunction}/>
			</div>
			<span className='TitlePage'>Criar plano de exercícios</span>
		</div>
	)
}