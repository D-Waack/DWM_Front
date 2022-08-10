import React from 'react'
import { useState } from 'react';
import './EdiodePlano.css'
import ImgAsset from '../public'

// Primereact imports begin
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

/* Componentes */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
// Primereact imports end

export default function EdiodePlano ({name, description}) {
    const [nome, setNome] = useState(name);
    const [descricao, setDescricao] = useState(description);

    // Funções
    const clickerFunction = () => console.log('hi');

	return (
		<div className='EdiodePlano_EdiodePlano'>
			<div className='SelectExercCard'>
				<div className='Base'/>
				<div className='ExercItem2'>
					<div className='Base_1'/>
					<div className='editIcon'>
						<img alt= '' className='Vector' src = {ImgAsset.EdiodePlano_Vector} />
					</div>
					<div className='excluirIcon'>
						<img alt= '' className='Vector_1' src = {ImgAsset.EdiodePlano_Vector_1} />
					</div>
					<img alt= '' className='imageExerc' src = {ImgAsset.EdiodePlano_imageExerc} />
					<span className='ExercSubtitle'>Abdômen, Deltóides<br/>Sem equipamento</span>
					<span className='ExercTitle'>Prancha</span>
				</div>
				<div className='ExercItem1hover'>
					<div className='Base_2'/>
					<div className='editIcon_1'>
						<img alt= '' className='Vector_2' src = {ImgAsset.EdiodePlano_Vector_2} />
					</div>
					<div className='excluirIcon_1'>
						<img alt= '' className='Vector_3' src = {ImgAsset.EdiodePlano_Vector_3} />
					</div>
					<span className='ExercSubtitle_1'>Abdômen<br/>Sem equipamento</span>
					<span className='ExercTitle_1'>Abdominal</span>
					<img alt= '' className='imageExerc_1' src = {ImgAsset.ListagemdePlano_imageExerc_1} />
				</div>
				<div className='ExercField'>
					<div className='inputfield'/>
					<span className='hint'>Busque por exercícios...</span>
					<div className='searchIcon2'>
						<img alt= '' className='Vector_4' src = {ImgAsset.EdiodePlano_Vector_4} />
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
				<div className='Base_5'/>
                <Button label="CANCELAR" className='Base_5' onClick={clickerFunction}/>
			</div>
			<div className='ExcluirButton'>
                <Button label="EXCLUIR" className='Base_6' onClick={clickerFunction}/>
			</div>
			<div className='SalvarButton'>
				<Button label="SALVAR" className='Base_7' onClick={clickerFunction}/>
			</div>
			<span className='TitlePage'>Treino só Barriga</span>
		</div>
	)
}