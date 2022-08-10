import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Home
import HomePage from '../Components/index';

// Criações
import CriarExercicio from '../Components/CriarExercicio';
import CadastrarAluno from '../Components/CadastrarAluno';
import CriarPlano from '../Components/CriarPlano';

// Edições
import EditarExercicio from '../Components/EditarExercicio';
import EditarAluno from '../Components/EditarAluno';
import EditarPlano from '../Components/EditarPlano';


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