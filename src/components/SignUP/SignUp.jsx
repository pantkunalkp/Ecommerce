import React, { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';
import 'firebase/auth';
import 'firebase/firestore';
import '../login/Login.css';
import { NavLink, Redirect } from 'react-router-dom' 

const SignUp = () => {
	const [ details, setDetails ] = useState({
		name: null,
		email: null,
		password: null
	});
	const updatePassword = (e) => {
		setDetails({ ...details, password: e.target.value });
	};
	const updateEmail = (e) => {
		setDetails({ ...details, email: e.target.value });
	};
	const updateName = (e) => {
		setDetails({ ...details, name: e.target.value });
	};
	const user = useUser();
	const query = useFirebaseApp().firestore().collection('users');
	const firebase = useFirebaseApp();
	const signUp = async (e) => {
		e.preventDefault();
		await firebase
			.auth()
			.createUserWithEmailAndPassword(details.email, details.password)
			.then(async (result) => {
				result.user.updateProfile({ displayName: details.name });
				await query.doc(result.user.uid).set({ Name: details.name, cart: [], items: [] });
			})
			.catch((error) => {
				console.log(error);
			});
    };
    if(!user) {
        return (
            <div className="login-form">
                <form className="login-form-main">
                    <input type="text" placeholder="Name" onChange={updateName} required />{' '}
                    <input type="email" placeholder="email" onChange={updateEmail} required /> <br />
                    <input type="password" placeholder="password" onChange={updatePassword} required /> <br />
                    <button onClick={signUp}>Create Account </button>
                    <p>
                        <NavLink to="/Login">
                            <span>Already have an account?</span>
                        </NavLink>
                    </p>
                </form>
            </div>
        );
    } else {
        return <Redirect to="/" />
    }
};

export default SignUp;
