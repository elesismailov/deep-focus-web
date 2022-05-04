import React, { useState, useEffect } from 'react';
import TimerState from './Components/TimerState';
import AppState from './AppState';

function App() {


	return (
		<div className="App h-screen bg-black text-white">
			<AppState />
		</div>
	);
}

export default App;
