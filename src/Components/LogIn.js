
import { login } from '../helpers/login';

function LogIn({ setToken, setLoggedIn }) {

	function cb(token) {
		setToken(token)
		setLoggedIn(true)
	}

	return(
		<>
			<form onSubmit={ (e) => login(e, cb) }>
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