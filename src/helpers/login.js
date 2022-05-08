
async function login(e, cb) {

	e.preventDefault()

	const res = await fetch('http://localhost:5000/log-in', {
		method: 'POST',
		headers: {
			"Content-Type": 'application/json',
		},
		body: JSON.stringify({
			email: e.target.email.value,
			password: e.target.password.value,
		})
	})

	const token = (await res.json()).token;


	if (token) {
		cb(token)
		console.log(token)
	}

}


export { login }