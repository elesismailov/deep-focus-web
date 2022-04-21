import React, { useEffect, useReducer, useRef } from 'react';
import timerReducer from './TimerReducer';
import Button from './Button';

import startImage from './../images/start.png';
import stopImage from './../images/stop.png';
import pauseImage from './../images/pause.png';
import reportImage from './../images/report.svg';

const initialState = {
	sessionLength: 10_000,
	time: 0,
	isOn: false,
	startTime: null,
	endTime: null,
	leftTimeWhenPaused: null,
};


function Timer() {

	function status() {
		dispatch({type: 'status'})
	}

	const [state, dispatch] = useReducer(timerReducer, initialState);
	const {	sessionLength, time, isOn, endTime } = state;
	const isOnRef = useRef(isOn);

	useEffect(() => {
		isOnRef.current = isOn;
		if (isOn) interval()
	}, [isOn])

	function start() {
		if (!isOnRef.current) {
			dispatch({type: 'start'})
		}
	}

	function pause() {
		if (isOnRef.current) {
			dispatch({type: 'pause'})
		}
	}
	function stop() {
		if (!isOnRef.current) {
			dispatch({type: 'reset'})
			dispatch({type: 'time', payload: sessionLength})
			dispatch({type: 'off'})
		}
	}

	function interval() {
		if (isOnRef.current) {
			let now = Date.now();

			if (now <= endTime) {
				let leftTime = endTime - now;

				dispatch({type: 'time', payload: leftTime})

				setTimeout(interval, 500)
			} else {
				console.log('Session is over')
				dispatch({type: 'reset'})
				dispatch({type: 'off'})
			}
		}
	}



	return (
		<div className="App">

			<p id="dom-timer">{ `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}` }
			</p>

			<Button text='Start' src={ startImage } handler={ start } />
			<Button text='Pause' src={ pauseImage } handler={ pause } />
			<Button text='Stop' src={ stopImage } handler={ stop } />
			<Button text='Status' src={ reportImage } handler={ status } />
			<button onClick={ start }>Start</button>
			<button onClick={ pause }>Pause</button>
			<button onClick={ stop }>Stop</button>
			<button onClick={ status }>Status</button>

		</div>
	);
}

export default Timer;
