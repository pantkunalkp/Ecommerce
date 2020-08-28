import React, { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';
import './Login.css';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom' 

const Login = () => {
	const [ details, setDetails ] = useState({ email: null, password: null });
	const updateEmail = (e) => {
		setDetails({ ...details, email: e.target.value });
	};
	const updatePassword = (e) => {
		setDetails({ ...details, password: e.target.value });
	};
	const user = useUser();
	const firebase = useFirebaseApp();
	const login = async (e) => {
		e.preventDefault();
		await firebase
			.auth()
			.signInWithEmailAndPassword(details.email, details.password)
			.then((result) => console.log(result));
	};
	if (!user)
		return (
			<div className="login-form">
				<form className="login-form-main">
					<input type="text" placeholder="username" onChange={updateEmail} required /> <br />
					<input type="password" placeholder="password" onChange={updatePassword} required /> <br />
					<button onClick={login}> Login</button>
					<p>
						<NavLink to="/Signup">
							<span>Don't have an account?</span>
						</NavLink>
					</p>
				</form>
			</div>
		);
	else return <Redirect to="/" />;
};

export default Login;
