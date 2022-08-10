import React from 'react'
import './EdiodeExerccio.css'
import ImgAsset from '../public'
export default function EdiodeExerccio () {
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
					<div className='inputfield'/>
					<span className='hint'>Selecione os equipamentos, se houver...</span>
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
					<div className='inputfield_1'/>
					<span className='hint_1'>Mãos a um distância maior que o comprimento dos ombros, realizar a repetição contraindo a dorsal e ativando a escápula até encostar a barra no peito.</span>
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
					<div className='dropDown'>
						<div className='picker'/>
						<img alt= '' className='chevron' src = {ImgAsset.EdiodeExerccio_chevron} />
					</div>
					<span className='GRUPO'>GRUPO MUSCULAR</span>
				</div>
				<div className='TitleField'>
					<div className='inputfield_3'/>
					<span className='value'>Wide Pull Up</span>
					<span className='TTULO'>TÍTULO</span>
				</div>
			</div>
			<div className='CancelButton'>
				<div className='Base_6'/>
				<span className='CANCELAR'>CANCELAR</span>
			</div>
			<div className='ExcluirButton'>
				<div className='Base_7'/>
				<span className='EXCLUIR'>EXCLUIR</span>
			</div>
			<div className='SalvarButton'>
				<div className='Base_8'/>
				<span className='SALVAR'>SALVAR</span>
			</div>
			<span className='TitlePage'>Pull Up</span>
			<div className='SideBar'>
				<div className='Base_9'/>
				<span className='AlunosTitle'>Alunos</span>
				<div className='alunosList3'>
					<div className='base_1'/><div className='aluno3' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno3})`}}/>
					<div className='optIcon'>
						<img alt= '' className='Vector_8' src = {ImgAsset.EdiodeExerccio_Vector_8} />
					</div>
					<span className='spencer_admgmailcom'>spencer_adm@gmail.com</span>
					<span className='SamuelSpencer'>Samuel Spencer</span>
				</div>
				<div className='alunosList2'>
					<div className='base_2'/><div className='aluno2' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno2})`}}/>
					<div className='optIcon_1'>
						<img alt= '' className='Vector_9' src = {ImgAsset.EdiodeExerccio_Vector_9} />
					</div>
					<span className='framboeasa_kitgmailcom'>framboeasa_kit@gmail.com</span>
					<span className='KitLaframboise'>Kit Laframboise</span>
				</div>
				<div className='alunosList1'>
					<div className='base_3'/>
					<div className='hover'/>
					<div className='optIcon_2'>
						<img alt= '' className='Vector_10' src = {ImgAsset.EdiodeExerccio_Vector_10} />
					</div>
					<span className='abgael23gmailcom'>ab.gael23@gmail.com</span>
					<span className='AbagaelEnno'>Abagael Enno</span><div className='aluno1' style={{backgroundImage: `url(${ImgAsset.ListagemdePlano_aluno1})`}}/>
				</div>
			</div>
			<div className='MainNav'>
				<div className='PlanoIcon'>
					<img alt= '' className='Vector_11' src = {ImgAsset.EdiodeExerccio_Vector_11} />
				</div>
				<div className='ExercicioIcon'>
					<img alt= '' className='Vector_12' src = {ImgAsset.EdiodeExerccio_Vector_12} />
				</div>
				<div className='AlunoIcon'>
					<img alt= '' className='Vector_13' src = {ImgAsset.EdiodeExerccio_Vector_13} />
				</div>
				<div className='Logo'>
					<img alt= '' className='_Path_' src = {ImgAsset.EdiodeExerccio__Path_} />
					<img alt= '' className='_Path_3' src = {ImgAsset.EdiodeExerccio__Path_3} />
					<img alt= '' className='_Path_5' src = {ImgAsset.EdiodeExerccio__Path_5} />
				</div>
				<img alt= '' className='Indicator' src = {ImgAsset.EdiodeExerccio_Indicator} />
			</div>
		</div>
	)
}