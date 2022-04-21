import React, { useEffect, useReducer, useRef } from 'react';

function stateReducer(state, action) {
	switch (action.type) {
		case 'on': {
			return {...state, isOn: true}
		}
		case 'off': {
			return {...state, isOn: false}
		}
		case 'start': {
			console.info('Dispatched START')
			let startTime = Date.now();
			let endTime = startTime + (state.leftTimeWhenPaused !== null ? state.leftTimeWhenPaused : state.sessionLength);
			return {...state, startTime, endTime, isOn: true}
		}
		case 'stop': {
			console.info('Dispatched STOP')
			let now = Date.now();
			let leftTimeWhenPaused = state.endTime - now;
			return {...state, leftTimeWhenPaused, isOn: false}
		}
		case 'reset': {
			return {
				...state,
				leftTimeWhenPaused: null,
				startTime: null,
				endTime: null,
			}

		}
		case 'time': {
			return {...state, time: action.payload}
		}
		case 'status': {
			console.log(state)
			return state
		}
		default: break;
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
			dispatch({type: 'stop'})
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

			<button onClick={ start }>Start</button>
			<button onClick={ pause }>Pause</button>
			<button onClick={ status }>Status</button>

		</div>
  );
}

export default App;
