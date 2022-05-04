import { useState } from 'react';

import Audio from './Components/Audio';
import LogIn from './Components/LogIn';

function getLocalStorageToken() {
	return localStorage.getItem('token')
}

function AppState() {

	const [loggedIn, setLoggedIn] = useState(null);
	const [token, setToken] = useState(null);


	return(
		<>
			<Audio />
		</>
	)
}


export default AppState;