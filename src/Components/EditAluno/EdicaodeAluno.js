import React from 'react'
import { useState } from 'react';
import './EdiodeAluno.css'
import ImgAsset from '../../public'

// Primereact imports begin
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

/* Componentes */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
// Primereact imports end

export default function EdicaodeAluno ( {name, mail, username, password, plans} ) {
    const [nome, setNome] = useState(name);
    const [email, setEmail] = useState(mail);
    const [nomeUsuario, setNomeUsuario] = useState(username);
    const [senha, setSenha] = useState(password);
    const [planos, setPlanos] = useState(plans);

    // Funções
    const clickerFunction = () => console.log('hi');

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
					<Password className='inputfield_1' value={senha} onChange={(e) => setSenha(e.target.value)} toggleMask feedback={false} />
					<span className='Senha'>Senha</span>
				</div>
				<div className='UserField'>
                    <InputText className ='inputfield_2' value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} placeholder="Nome de usuário do aluno..." />
					<span className='Nomedeusurio'>Nome de usuário</span>
				</div>
				<div className='EmailField'>
					<InputText className ='inputfield_3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail do aluno..." />
					<span className='Email'>E-mail</span>
				</div>
				<div className='NomeField'>
                    <InputText className ='inputfield_4' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do aluno..." />
					<span className='Nome'>Nome</span>
				</div>
			</div>
			<div className='CancelButton'>
				<Button label="CANCELAR" className='Base_4' onClick={clickerFunction}/>
			</div>
			<div className='ExcluirButton'>
                <Button label="EXCLUIR" className='Base_5' onClick={clickerFunction}/>
			</div>
			<div className='ConfirmButton'>
                <Button label="CONFIRMAR" className='Base_6' onClick={clickerFunction}/>
			</div>
			<div className='ProfilePicture'>
				<div className='base_1'/><div className='base_2' style={{backgroundImage: `url(${ImgAsset.EdiodeAluno_base_2})`}}/>
				<div className='userIcon'>
					<img alt= '' className='Vector_8' src = {ImgAsset.EdiodeAluno_Vector_8} />
				</div>
			</div>
			<span className='TitlePage'>Daniel Mongoose </span>
		</div>
	)
}