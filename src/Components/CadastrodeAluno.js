import React from 'react'
import { useState, useRef } from 'react';
import './CadastrodeAluno.css'
import ImgAsset from '../public'

// Primereact imports begin
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

/* Componentes */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Messages } from 'primereact/messages';
// Primereact imports end

export default function CadastrodeAluno () {
	const [nome, setNome] = useState("");
	const [nomeUsuario, setNomeUsuario] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");

	// Mensagens
	const msgs = useRef(null);

	// Funções
	const onClickConfirmar = (e) => {
		addMessages(0);
	}

	const onClickCancelar = (e) => {
		console.log("cancelar!")
	}

	const addMessages = (form_status) => {
		if (form_status === 0){
			msgs.current.show([
				{ severity: 'success', detail: 'Aluno cadastrado.', sticky: true },
			]);
		}
		else if (form_status === 1) {
			msgs.current.show([
				{ severity: 'error', detail: 'Dados necessários não foram inseridos.', sticky: false },
			]);
		}
	}

	return (
		<div className='CadastrodeAluno_CadastrodeAluno'>
			<div className='AtribuiPlanoCard'>
				<div className='Base'/>
				<div className='planoItem1hover'>
					<div className='Base_1'/>
					<span className='Seg150822'>Seg, 15/08/22</span>
					<div className='editIcon'>
						<img alt='' className='Vector' src = {ImgAsset.CadastrodeAluno_Vector} />
					</div>
					<div className='excluirIcon'>
						<img alt='' className='Vector_1' src = {ImgAsset.CadastrodeAluno_Vector_1} />
					</div>
					<div className='calendarIcon'>
						<img alt='' className='Vector_2' src = {ImgAsset.CadastrodeAluno_Vector_2} />
					</div>
					<span className='PlanoSubtitle'>Fazer três séries com 15-20 repetições para cada exercício.<br/><br/>Para Prancha, fazer três séries de 1min.  ...<br/></span>
					<span className='PlanoTitle'>Treino só barriga</span>
				</div>
				<div className='PlanoField'>
					<div className='inputfield'/>
					<span className='hint'>Busque por planos...</span>
					<div className='addPlanoButton'>
						<div className='base'/>
						<div className='addIcon'>
							<img alt='' className='Vector_3' src = {ImgAsset.CadastrodeAluno_Vector_3} />
						</div>
					</div>
					<div className='searchIcon2'>
						<img alt='' className='Vector_4' src = {ImgAsset.CadastrodeAluno_Vector_4} />
					</div>
					<span className='EQUIPAMENTOS'>ATRIBUIR PLANOS</span>
				</div>
			</div>
			<div className='CriarAlunoCard'>
				<div className='Base_2'/>
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
				<Button label="CANCELAR" className='Base_3' onClick={onClickCancelar}/>	
			</div>
			<div className='ConfirmButton'>
				<Button label="CONFIRMAR" className='Base_4' onClick={onClickConfirmar}/>	
			</div>
			<div className='ProfilePicture'>
				<div className='base_1'/>
				<div className='userIcon'>
					<img alt='' className='Vector_5' src = {ImgAsset.CadastrodeAluno_Vector_5} />
				</div>
			</div>
			<Messages style={{zIndex:"2"}}ref={msgs} />
			<span className='TitlePage'>Cadastrar aluno</span>
		</div>
	)
}