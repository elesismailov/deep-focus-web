
let token = '';

function setLocalStorageToken(t) {
	token = t === null ? '' : t;
	localStorage.setItem('token', t === null ? '' : t)
}

async function restoreAppState(cb) {
	const token = localStorage.getItem('token')

	if (token) {

		// validate the token
		// const res = await fetch('http://localhost:5000/validate-token', {
		// 	method: 'POST',
		// 	headers: {
		// 		"Content-Type": 'application/json',
		// 	},
		// 	body: JSON.stringify({token})
		// }).catch()

		// then set up the app

		cb(token)
	} else {

	}
}

async function saveSession(startTime, endTime) {

	// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QtdXNlci1uYW1lIiwiZW1haWwiOiJ0ZXN0dXNlckBnbWFpbC5jb20ifQ.tM5LFeshVJS7rPnz6KS8hngIOuImC5dM8HyGrsxQzHY';

	try {
		const res = await fetch('http://localhost:5000/entries', {
			method: 'POST',
			headers: {
				"Authorization": "Bearer " + token,
				// "Access-Control-Allow-Origin": "*",
				"Content-Type": 'application/json',
			}	,
			body: JSON.stringify({ startTime, endTime })
		});

	} catch (err) {
		console.log(err)
		console.log('save locally instead')	
	}

}


export { saveSession, setLocalStorageToken, restoreAppState }