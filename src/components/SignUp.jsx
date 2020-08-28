import React, { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';
import 'firebase/firestore';
const SignUp = () => {
	const [ details, setDetails ] = useState({
		name: '',
		email: '',
		password: ''
	});
	const updateName = (e) => {
		setDetails({ ...details, name: e.target.value });
	};
	const updateEmail = (e) => {
		setDetails({ ...details, email: e.target.value });
	};
	const updatePassword = (e) => {
		setDetails({ ...details, password: e.target.value });
	};
	const user = useUser()
	const query = useFirebaseApp().firestore().collection("users")
	const firebase = useFirebaseApp();
	const signUp = async (e) => {
		e.preventDefault();
		await firebase
			.auth()
			.createUserWithEmailAndPassword(details.email, details.password)
			.then((result) => result.user.updateProfile({ displayName: details.name }))
			.catch((error) => {
				console.log(error);
			});
			query.doc(user.uid).set({Name: details.name, cart: [], items: []})
	};
	return (
		<div className="form">
			<form>
				<label>Enter Your Name</label>
				<br />
				<input type="text" onChange={updateName} />
				<br />
				<label>Enter Your Email</label>
				<br />
				<input type="email" onChange={updateEmail} />
				<br />
				<label>Enter Your Password</label>
				<br />
				<input type="password" onChange={updatePassword} />
				<br />
				<input className="button" onClick={signUp} type="submit" value="Sign Up" />
			</form>
		</div>
	);
};
export default SignUp;
