import React, { useState, useEffect, useReducer } from 'react';

function stateReducer(state, action) {
	switch (action.type) {
		case 'on': {
			return {...state, isOn: true}
		}
		case 'off': {
			return {...state, isOn: false}
		}
		case 'start': {
			let startTime = Date.now();
			let endTime = startTime + state.sessionLength;
			console.log('start dispatch')
			return {...state, startTime, endTime, isOn: true}

		}
		case 'time': {
			return {...state, time: action.payload}
		}
		case 'interval': {
			action.payload()
			return state
		}
		case 'status': {
			console.log(state)
			return state
		}
	}
}

const initialState = {
	sessionLength: 10_000,
	time: 0,
	isOn: false,
	startTime: null,
	endTime: null,
	leftTimeWhenPaused: null,
};

function App() {

	function status() {
		dispatch({type: 'status'})
	}
	
	const [state, dispatch] = useReducer(stateReducer, initialState);
	const {	sessionLength, time, isOn, startTime, endTime, leftTimeWhenPaused } = state;

	useEffect(() => {
		if (isOn) interval()
	}, [isOn])

	function start() {
		if (!isOn) {
			console.log('started')
			dispatch({type: 'start'})
			dispatch({type: 'interval', payload: interval})
			dispatch({type: 'time', payload: 10000})
		}
	}

	function pause() {
	}

	function interval() {
		if (isOn) {
			let now = Date.now();

			if (now <= endTime) {
				let leftTime = endTime - now;

				dispatch({type: 'time', payload: leftTime})

				setTimeout(interval, 500)
			} else {
				console.log('Session is over')
				dispatch({type: 'off'})
			}
		}
	}



	return (
		<div className="App">

			<p id="dom-timer">{ `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}` }
			</p>

			<button onClick={ start }>Start</button>
			<button onClick={ pause }>Pause</button>
			<button onClick={ status }>Status</button>

		</div>
  );
}

export default App;
