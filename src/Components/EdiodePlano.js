import React from 'react'
import './EdiodePlano.css'
import ImgAsset from '../public'
export default function EdiodePlano () {
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
					<div className='inputfield_1'/>
					<span className='value'>Fazer três séries com 15-20 repetições para cada exercício.<br/><br/>Para Prancha, fazer três séries de 1min.<br/><br/>Obs.: Contrair bem a barriga durante a execução.</span>
					<span className='DESCRICAO'>DESCRIÇÃO</span>
				</div>
				<div className='TitleField'>
					<div className='inputfield_2'/>
					<span className='value_1'>Treino só Barriga</span>
					<span className='TTULO'>TÍTULO</span>
				</div>
			</div>
			<div className='CancelButton'>
				<div className='Base_5'/>
				<span className='CANCELAR'>CANCELAR</span>
			</div>
			<div className='ExcluirButton'>
				<div className='Base_6'/>
				<span className='EXCLUIR'>EXCLUIR</span>
			</div>
			<div className='SalvarButton'>
				<div className='Base_7'/>
				<span className='SALVAR'>SALVAR</span>
			</div>
			<span className='TitlePage'>Treino Barriga Quadríceps</span>
			<div className='SideBar'>
				<div className='Base_8'/>
				<span className='AlunosTitle'>Alunos</span>
				<div className='alunosList3'>
					<div className='base'/><div className='aluno3_1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno3})`}}/>
					<div className='optIcon'>
						<img alt= '' className='Vector_6' src = {ImgAsset.EdiodePlano_Vector_6} />
					</div>
					<span className='spencer_admgmailcom'>spencer_adm@gmail.com</span>
					<span className='SamuelSpencer'>Samuel Spencer</span>
				</div>
				<div className='alunosList2'>
					<div className='base_1'/><div className='aluno2_1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno2})`}}/>
					<div className='optIcon_1'>
						<img alt= '' className='Vector_7' src = {ImgAsset.EdiodePlano_Vector_7} />
					</div>
					<span className='framboeasa_kitgmailcom'>framboeasa_kit@gmail.com</span>
					<span className='KitLaframboise'>Kit Laframboise</span>
				</div>
				<div className='alunosList1'>
					<div className='base_2'/>
					<div className='hover'/>
					<div className='optIcon_2'>
						<img alt= '' className='Vector_8' src = {ImgAsset.EdiodePlano_Vector_8} />
					</div>
					<span className='abgael23gmailcom'>ab.gael23@gmail.com</span>
					<span className='AbagaelEnno'>Abagael Enno</span><div className='aluno1_1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno1})`}}/>
				</div>
			</div>
			<div className='MainNav'>
				<div className='PlanoIcon'>
					<img alt= '' className='Vector_9' src = {ImgAsset.EdiodePlano_Vector_9} />
				</div>
				<div className='ExercicioIcon'>
					<img alt= '' className='Vector_10' src = {ImgAsset.EdiodePlano_Vector_10} />
				</div>
				<div className='AlunoIcon'>
					<img alt= '' className='Vector_11' src = {ImgAsset.EdiodePlano_Vector_11} />
				</div>
				<div className='Logo'>
					<img alt= '' className='_Path_' src = {ImgAsset.EdiodePlano__Path_} />
					<img alt= '' className='_Path_3' src = {ImgAsset.EdiodePlano__Path_3} />
					<img alt= '' className='_Path_5' src = {ImgAsset.EdiodePlano__Path_5} />
				</div>
				<img alt= '' className='Indicator' src = {ImgAsset.EdiodePlano_Indicator} />
			</div>
		</div>
	)
}