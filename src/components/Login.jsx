import React, { useState } from 'react';
import { useFirebaseApp, useAuth } from 'reactfire';
import 'firebase/auth';
const Login = () => {
	const [ details, setDetails ] = useState({
		email: '',
		password: ''
	});
	const updateEmail = (e) => {
		setDetails({ ...details, email: e.target.value });
	};
	const updatePassword = (e) => {
		setDetails({ ...details, password: e.target.value });
	};
	const auth = useAuth();

	const firebase = useFirebaseApp();
	const login = async (e) => {
		e.preventDefault();
		await firebase
			.auth()
			.signInWithEmailAndPassword(details.email, details.password)
			.then((result) => console.log(result));
	};
	const signInWithGoogle = async (e) => {
		e.preventDefault();
		await auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};
	return (
		<div className="a">
			<form>
				<label>Enter Your Email</label>
				<br />
				<input type="email" onChange={updateEmail} />
				<br />
				<label>Enter Your Password</label>
				<br />
				<input type="password" onChange={updatePassword} />
				<br />
				<input onClick={login} type="submit" value="Login" />
				<h3>Or</h3>
				<button className="button" onClick={signInWithGoogle}>
					{' '}
					Sign In With Google{' '}
				</button>
			</form>
		</div>
	);
};
export default Login;