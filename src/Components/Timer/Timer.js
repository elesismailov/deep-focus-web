import React, { useEffect, useReducer, useRef } from 'react';
import timerReducer from './TimerReducer';
import Button from './Button';

import startImage from './../images/start.png';
import stopImage from './../images/stop.png';
import pauseImage from './../images/pause.png';
import reportImage from './../images/report.svg';

const initialState = {
	// sessionLength: 10_000, // this can be both break and focus session
	sessionLength: null, // this can be both break and focus session
	time: 0, // user indicator
	isOn: false,
	startTime: null,
	endTime: null,
	leftTimeWhenPaused: null,
};


function Timer(props) {

	function status() {
		dispatch({type: 'status'})
	}

	const { mode, sessions, sessionNumber, nextSession, resetCurrent } = props;
	const [state, dispatch] = useReducer(timerReducer, initialState);
	const {	sessionLength, time, isOn, endTime } = state;
	const isOnRef = useRef(isOn);

	useEffect(() => {
		isOnRef.current = isOn;
		if (isOn) interval()
	}, [isOn])

	function start() {

		if (!isOnRef.current) {
			dispatch({
				type: 'start',
				payload: sessions[sessionNumber],
			})
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
			dispatch({type: 'time', payload: sessions[0]})
			dispatch({type: 'off'})
			resetCurrent()
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
				nextSession()
				dispatch({type: 'reset'})
				dispatch({
					type: 'start',
					payload: sessions[sessions.length-1 === sessionNumber ? 0 : sessionNumber+1],
				})
				dispatch({type: 'off'})
				dispatch({type: 'on'})

				// here IMPLEMENT save session
				// sessionLength, mode, startTime, endTime
			}
		}
	}



	return (
		<div >

			<p id="dom-timer">{ `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}` }
			</p>

			<Button text='Start' src={ startImage } handler={ start } />
			<Button text='Pause' src={ pauseImage } handler={ pause } />
			<Button text='Stop' src={ stopImage } handler={ stop } />
			<Button text='Status' src={ reportImage } handler={ status } />

		</div>
	);
}

export default Timer;
