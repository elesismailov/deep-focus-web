

async function saveSession({start, end}) {

	console.log('here happens fetch')

	const res = await fetch('http://127.0.0.1:5000/entries', {
		method: 'POST'
	});

	console.log(res)

}


export { saveSession }