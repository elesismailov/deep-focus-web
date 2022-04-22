
function timerReducer(state, action) {
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
			let sessionLength = action.payload;
			let endTime = startTime + (state.leftTimeWhenPaused !== null ? state.leftTimeWhenPaused : sessionLength);
			return {...state, startTime, endTime, isOn: true, sessionLength}
		}
		case 'pause': {
			console.info('Dispatched PAUSE')
			let now = Date.now();
			let leftTimeWhenPaused = state.endTime - now;
			return {...state, leftTimeWhenPaused, isOn: false}
		}
		case 'reset': {
			return {
				...state,
				// time: state.sessionLength,
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

export default timerReducer;