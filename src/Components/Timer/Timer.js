import React, { useState, useEffect, useReducer, useRef } from 'react';
import timerReducer from './TimerReducer';
import Button from './Button';

import { saveSession } from '../../helpers/save';

import startImage from './../images/start.png';
import stopImage from './../images/stop.png';
import pauseImage from './../images/pause.png';

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

	const { play, mode, sessions, sessionNumber, nextSession, resetCurrent } = props;
	const [state, dispatch] = useReducer(timerReducer, initialState);
	const {	sessionLength, time, isOn, startTime, endTime } = state;
	const isOnRef = useRef(isOn);
	const [isFirst, setIsFirst] = useState(true);

	useEffect(() => {
		isOnRef.current = isOn;
		if (isOn) interval()
	}, [isOn])
	useEffect(() => {
		dispatch({type: 'time', payload: sessions[0]})
	}, [])

	function start() {
		setIsFirst(false);

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
			setIsFirst(true)
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

				play(mode)

				if (mode === 0) {
					saveSession(startTime, endTime)
				}

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

			<div className="outter-ring w-80 h-80 border-purple border-[32px] rounded-full flex items-center justify-center">
				<div className="inner-ring w-[16rem] h-[16rem] border-green border-[30px] rounded-full flex flex-col column items-center justify-center gap-2.5">

					<p className="text-paleGrey text-md">
						{ mode ?
							'Break':
							'Focus'
						}
					</p>

					<p className="text-5xl text-md" id="dom-timer">{ `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}` }
					</p>

					<p className="text-paleGrey">Session: { sessionNumber }</p>

				</div>
			</div>
			<div className="flex items-center justify-center mt-5 gap-2">
				{ !isOn && <Button text='Start' src={ startImage } handler={ start } />}
				{ isOn && <Button text='Pause' src={ pauseImage } handler={ pause } />}
				{ (!isOn && !isFirst) && <Button text='Stop' src={ stopImage } handler={ stop } />}
			</div>

		</div>
	);
}

export default Timer;
