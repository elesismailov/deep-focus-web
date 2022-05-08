import { useState } from 'react';

import { login } from '../helpers/login';

function LogIn({ setToken, setLoggedIn, isLoggedIn }) {

	const [error, setError] = useState(null);

	function cb(token) {
		if (token) {
			setToken(token)
			setLoggedIn(true)
			setError(null)
			return
		}
		setError('Something is wrong...')
	}

	return(
		<>
			<form onSubmit={ (e) => login(e, cb) }>
				{error && 
					<p>Please check your email or password.</p>
				}
				<label>
					<p>Email:</p>
					<input type="text" name="email" required />
				</label>
				<label>
					<p>Password:</p>
					<input type="password" name="password" required />
				</label>
				<button>Submit</button>
			</form>
		</>
	);
}


export default LogIn;