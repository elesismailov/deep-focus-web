import { useRef } from 'react';

import TimerState from './TimerState';

import finish1 from './audio/finish-1.wav';


function Audio() {
	const audioEl = useRef(null);

	function play(mode) {

		if (mode === 1) { // audio for the work session
			audioEl.current.play()
		} else if ( mode === 0) { // audio for the brake session
			audioEl.current.play()
		}

	}

	return(
		<>	
			<TimerState play={play}/>
			<audio ref={ audioEl } src={ finish1 }></audio>
		</>
	);

}


export default Audio;