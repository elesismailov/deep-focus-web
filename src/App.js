import React, { useState, useEffect } from 'react';

function App() {
	
	// let sessionLength = 1500_000 // ms
	let sessionLength = 10_000 // ms

	const [time, setTime] = useState(sessionLength);
	const [isOn ,setIsOn] = useState(false);

	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null)
	
	const [leftTimeWhenPaused, setLeftTimeWhenPaused] = useState(null);

	// THE PROBLEM WITH THESE IS THAT THEY GET ERASED ON COMPONENT CHANGE
	// let startTime = 0;
	// let endTime = 0
	
	// This is the schema
	// isOn change => startTime change => endTime change => interval() call

	useEffect(() => {
		if (endTime !== null) {
			interval()
		}
	}, [endTime])
	
	useEffect(() => {
		if (startTime !== null) {
			setEndTime(startTime + (leftTimeWhenPaused === null ? sessionLength : leftTimeWhenPaused))
		}
	}, [startTime])

	useEffect( () => {
		if (isOn) {
			setStartTime(Date.now())
		} else {
		}
	}, [isOn])

	useEffect(() => {
		if (leftTimeWhenPaused !== null) {

			console.log(leftTimeWhenPaused)
			setEndTime(null)

			setIsOn(false)

		}
	}, [leftTimeWhenPaused])

	function start() {
		if (!isOn) {

			setIsOn(true)

		}
	}

	function pause() {
		
		if (isOn) {

			let now = Date.now();

			setLeftTimeWhenPaused(endTime - now)

		}
	}

	function interval() {

		if (isOn && endTime !== null) {
		
			let now = Date.now();
			
			if (now <= endTime) {
				
				let leftTime = endTime - now;

				setTime(leftTime + 700)

				setTimeout(interval, 500)

			} else {

				console.log('session is over')
				console.log(time)
				setIsOn(false)

			}
		}
	}

	return (
		<div className="App">

			<p id="dom-timer">{ `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}` }
			</p>

			<button onClick={ start }>Start</button>
			<button onClick={ pause }>Pause</button>

		</div>
  );
}

export default App;
