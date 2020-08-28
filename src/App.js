import React from 'react';
import Login from './components/login/Login';
import SignUp from './components/SignUP/SignUp';
import './App.css';
import './root.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useUser } from 'reactfire';
import Dashboard from './components/Dashboard';
import Explore from './pages/Explore';

function App() {
	const myUser = useUser();
	console.log(myUser);
	return (
		<Router>
			<div className="app pattern-vertical-lines-lg">
				<Header />
				<Switch>
					<Route exact path="/" component={Explore} />
					<Route exact path="/Dashboard" component={Dashboard} />
					<Route exact path="/Login" component={Login} />
					<Route exact path="/Signup" component={SignUp} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
