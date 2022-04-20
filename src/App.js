import React, { useState, useEffect } from 'react';

function App() {
	
	// let sessionLength = 1500_000 // ms
	let sessionLength = 10_000 // ms

	const [time, setTime] = useState(sessionLength);
	const [isOn ,setIsOn] = useState(false);

	let startTime = 0;
	let endTime = 0

	function start() {
		if (!isOn) {

			startTime = Date.now();
			endTime = startTime + sessionLength;

			setIsOn(true)

			interval()
		}
	}

	function interval() {
		
		let now = Date.now();
		
		if (now <= endTime) {
			
			let leftTime = endTime - now;

			setTime(leftTime + 700) // 700 is a number for the user
			setTimeout(interval, 500)

		} else {

			console.log('session is over')

			setIsOn(false)

			// save the session

		}
	}

	return (
		<div className="App">

			<p id="dom-timer">{ `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}` }
			</p>

			<button onClick={ start }>Start</button>

		</div>
  );
}

export default App;
