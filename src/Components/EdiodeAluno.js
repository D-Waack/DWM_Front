import React from 'react'
import './EdiodeAluno.css'
import ImgAsset from '../public'
export default function EdiodeAluno () {
	return (
		<div className='EdiodeAluno_EdiodeAluno'>
			<div className='AtribuiPlanoCard'>
				<div className='Base'/>
				<div className='planoItem2'>
					<div className='Base_1'/>
					<span className='Sex190822'>Sex, 19/08/22</span>
					<div className='editIcon'>
						<img alt= '' className='Vector' src = {ImgAsset.EdiodeAluno_Vector} />
					</div>
					<div className='excluirIcon'>
						<img alt= '' className='Vector_1' src = {ImgAsset.EdiodeAluno_Vector_1} />
					</div>
					<div className='calendarIcon'>
						<img alt= '' className='Vector_2' src = {ImgAsset.EdiodeAluno_Vector_2} />
					</div>
					<span className='PlanoSubtitle'>Fazer três séries com 8-12 repetições para cada exercício.<br/><br/>Atenção com a ativação de escápula e jeito certo de...</span>
					<span className='PlanoTitle'>Treino Pull Up</span>
				</div>
				<div className='planoItem1hover'>
					<div className='Base_2'/>
					<span className='Qua170822'>Qua, 17/08/22</span>
					<div className='editIcon_1'>
						<img alt= '' className='Vector_3' src = {ImgAsset.EdiodeAluno_Vector_3} />
					</div>
					<div className='excluirIcon_1'>
						<img alt= '' className='Vector_4' src = {ImgAsset.EdiodeAluno_Vector_4} />
					</div>
					<div className='calendarIcon_1'>
						<img alt= '' className='Vector_5' src = {ImgAsset.EdiodeAluno_Vector_5} />
					</div>
					<span className='PlanoSubtitle_1'>Fazer três séries com 15-20 repetições para cada exercício.<br/><br/>Para Prancha, fazer três séries de 1min.  ...<br/></span>
					<span className='PlanoTitle_1'>Treino só barriga</span>
				</div>
				<div className='PlanoField'>
					<div className='inputfield'/>
					<span className='hint'>Busque por planos...</span>
					<div className='addPlanoButton'>
						<div className='base'/>
						<div className='addIcon'>
							<img alt= '' className='Vector_6' src = {ImgAsset.EdiodeAluno_Vector_6} />
						</div>
					</div>
					<div className='searchIcon2'>
						<img alt= '' className='Vector_7' src = {ImgAsset.EdiodeAluno_Vector_7} />
					</div>
					<span className='EQUIPAMENTOS'>ATRIBUIR PLANOS</span>
				</div>
			</div>
			<div className='EditAlunoCard'>
				<div className='Base_3'/>
				<div className='SenhaField'>
					<div className='inputfield_1'/>
					<span className='value'>******************</span>
					<span className='Senha'>Senha</span>
				</div>
				<div className='UserField'>
					<div className='inputfield_2'/>
					<span className='value_1'>Daniel Waack</span>
					<span className='Nomedeusurio'>Nome de usuário</span>
				</div>
				<div className='EmailField'>
					<div className='inputfield_3'/>
					<span className='value_2'>dan.mongWaack@tuturu.com</span>
					<span className='Email'>E-mail</span>
				</div>
				<div className='NomeField'>
					<div className='inputfield_4'/>
					<span className='value_3'>Daniel Mongoose Waack</span>
					<span className='Nome'>Nome</span>
				</div>
			</div>
			<div className='CancelButton'>
				<div className='Base_4'/>
				<span className='CANCELAR'>CANCELAR</span>
			</div>
			<div className='ExcluirButton'>
				<div className='Base_5'/>
				<span className='EXCLUIR'>EXCLUIR</span>
			</div>
			<div className='ConfirmButton'>
				<div className='Base_6'/>
				<span className='CONFIRMAR'>CONFIRMAR</span>
			</div>
			<div className='ProfilePicture'>
				<div className='base_1'/><div className='base_2' style={{backgroundImage: `url(${ImgAsset.EdiodeAluno_base_2})`}}/>
				<div className='userIcon'>
					<img alt= '' className='Vector_8' src = {ImgAsset.EdiodeAluno_Vector_8} />
				</div>
			</div>
			<span className='TitlePage'>Daniel Mongoose </span>
			<div className='SideBar'>
				<div className='Base_7'/>
				<span className='AlunosTitle'>Alunos</span>
				<div className='alunosList3'>
					<div className='base_3'/><div className='aluno3' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno3})`}}/>
					<div className='optIcon'>
						<img alt= '' className='Vector_9' src = {ImgAsset.EdiodeAluno_Vector_9} />
					</div>
					<span className='spencer_admgmailcom'>spencer_adm@gmail.com</span>
					<span className='SamuelSpencer'>Samuel Spencer</span>
				</div>
				<div className='alunosList2'>
					<div className='base_4'/><div className='aluno2' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno2})`}}/>
					<div className='optIcon_1'>
						<img alt= '' className='Vector_10' src = {ImgAsset.EdiodeAluno_Vector_10} />
					</div>
					<span className='framboeasa_kitgmailcom'>framboeasa_kit@gmail.com</span>
					<span className='KitLaframboise'>Kit Laframboise</span>
				</div>
				<div className='alunosList1'>
					<div className='base_5'/>
					<div className='hover'/>
					<div className='optIcon_2'>
						<img alt= '' className='Vector_11' src = {ImgAsset.EdiodeAluno_Vector_11} />
					</div>
					<span className='abgael23gmailcom'>ab.gael23@gmail.com</span>
					<span className='AbagaelEnno'>Abagael Enno</span><div className='aluno1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno1})`}}/>
				</div>
			</div>
			<div className='MainNav'>
				<div className='PlanoIcon'>
					<img alt= '' className='Vector_12' src = {ImgAsset.EdiodeAluno_Vector_12} />
				</div>
				<div className='ExercicioIcon'>
					<img alt= '' className='Vector_13' src = {ImgAsset.EdiodeAluno_Vector_13} />
				</div>
				<div className='AlunoIcon'>
					<img alt= '' className='Vector_14' src = {ImgAsset.EdiodeAluno_Vector_14} />
				</div>
				<div className='Logo'>
					<img alt= '' className='_Path_' src = {ImgAsset.EdiodeAluno__Path_} />
					<img alt= '' className='_Path_3' src = {ImgAsset.EdiodeAluno__Path_3} />
					<img alt= '' className='_Path_5' src = {ImgAsset.EdiodeAluno__Path_5} />
				</div>
				<img alt= '' className='Indicator' src = {ImgAsset.EdiodeAluno_Indicator} />
			</div>
		</div>
	)
}