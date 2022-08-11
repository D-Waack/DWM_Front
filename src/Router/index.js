import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Home
import HomePage from '../Components/index';

// Criações
import CriarExercicio from '../Components/CriarExercicio/CriarExercicio';
import CadastrarAluno from '../Components/CadastroAluno/CadastrarAluno';
import CriarPlano from '../Components/CriarPlano/CriarPlano';

// Edições
import EditarExercicio from '../Components/EditExercicio/EditarExercicio';
import EditarAluno from '../Components/EditAluno/EditarAluno';
import EditarPlano from '../Components/EditPlano/EditarPlano';


const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				{/* Home */}
				<Route exact path="/"><HomePage /></Route>

				{/* Criações */}
				<Route exact path="/CriarExercicio"><CriarExercicio/></Route>
				<Route exact path="/CadastrarAluno"><CadastrarAluno/></Route>
				<Route exact path="/CriarPlano"><CriarPlano/></Route>

				{/* Edições */}
				<Route exact path="/EditarExercicio"><EditarExercicio /></Route>
				<Route exact path="/EditarAluno"><EditarAluno /></Route>
				<Route exact path="/EditarPlano"><EditarPlano /></Route>

			</Switch>
		</Router>
	);
}
export default RouterDOM;