import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';
import Loading from './components/Loading.jsx';
import firebaseConfig from './firebase/firebaseConfig';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<Suspense fallback={<Loading />}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Suspense>
		</FirebaseAppProvider>
	</Router>,
	document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
