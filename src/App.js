import React, { useState } from 'react';
import Timer from './Components/Timer/Timer';

function App() {

	// 1 - work, 2 - break; this will decide whether to record it or not
	const [mode, setMode] = useState(1);
	// [workLength, breakLength, ...]
	const [sessions, setSessions] = useState([10000, 5000, 10000]);
	// the number to access the current session
	const [sessionNumber, setSessionNumber] = useState(0);

	const nextSession = () => sessions.length-1 === sessionNumber ? setSessionNumber(0) : setSessionNumber(sessionNumber+1);
	const switchMode = () => setMode(mode === 1 ? 2 : 1)

	return (
		<div className="App">
			<p>Mode: { mode }</p>
			<p>Session: { sessionNumber }</p>
			<Timer mode={ mode } setMode={ setMode } />
		</div>
	);
}

export default App;
