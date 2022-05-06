

async function saveSession(startTime, endTime) {

	try {

		const res = await fetch('http://127.0.0.1:5000/entries', {
			method: 'POST',
			headers: {
				"Authorization": "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QtdXNlci1uYW1lIiwiZW1haWwiOiJ0ZXN0dXNlckBnbWFpbC5jb20ifQ.tM5LFeshVJS7rPnz6KS8hngIOuImC5dM8HyGrsxQzHY',
				// "Access-Control-Allow-Origin": "*",
			}	,
			body: JSON.stringify({ startTime, endTime})
		});

	} catch (err) {
		console.log(err)
		console.log('save locally instead')	
	}

}


export { saveSession }