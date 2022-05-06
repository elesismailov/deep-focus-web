import { useState, useEffect } from 'react';

import { setSaveToken } from './helpers/save';

import Audio from './Components/Audio';
import LogIn from './Components/LogIn';

function getLocalStorageToken() {
	return localStorage.getItem('token')
}

function AppState() {

	const [loggedIn, setLoggedIn] = useState(null);
	const [token, setToken] = useState(null);

	// this is a way to pass the token not through components but closures
	useEffect(() => {setSaveToken(token) }, [token])

	// delete this later
	useEffect(() => {
		setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QtdXNlci1uYW1lIiwiZW1haWwiOiJ0ZXN0dXNlckBnbWFpbC5jb20ifQ.tM5LFeshVJS7rPnz6KS8hngIOuImC5dM8HyGrsxQzHY')
	}, [])

	return(
		<>
			<Audio />
		</>
	)
}


export default AppState;