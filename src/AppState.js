import { useState, useEffect } from 'react';

import { setSaveToken, restoreAppState } from './helpers/save';

import Audio from './Components/Audio';
import LogIn from './Components/LogIn';

function getLocalStorageToken() {
	return localStorage.getItem('token')
}

function AppState() {

	const [isLoggedIn, setLoggedIn] = useState(null);
	const [token, setToken] = useState(null);

	// this is a way to pass the token not through components but closures
	useEffect(() => { setSaveToken(token) }, [token])

	// initialize logged in state
	useEffect(() => {

		function cb(token) {
			setToken(token)
			setLoggedIn(true)
		}

		restoreAppState(cb)

	}, [])

	return(
		<>
			<LogIn setToken={ setToken } setLoggedIn={ setLoggedIn }/>

			<Audio />
		</>
	)
}


export default AppState;