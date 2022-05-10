import { useState, useEffect } from 'react';

import { setLocalStorageToken, restoreAppState } from './helpers/save';

import Audio from './Components/Audio';
import LogIn from './Components/LogIn';
import Menu from './Components/Menu';

function AppState() {

	const [isLoggedIn, setLoggedIn] = useState(null);
	const [token, setToken] = useState(localStorage.getItem('token'));

	// this is a way to pass the token not through components but closures
	useEffect(() => { setLocalStorageToken(token) }, [token])

	// delete token when log out
	function logout() {
		setToken(null)
		setLoggedIn(false)
	}

	// initialize logged in state
	useEffect(() => {

		function cb(t) {
			setToken(t)
			setLoggedIn(true)
		}

		restoreAppState(cb)

	}, [])

	return(
		<>
			<Menu>
				
			</Menu>
			<LogIn 
				isLoggedIn={ isLoggedIn }
				setToken={ setToken }
				setLoggedIn={ setLoggedIn }
				setLocalStorageToken= { setLocalStorageToken }
				logout={ logout }
			/>

			<Audio />
		</>
	)
}


export default AppState;