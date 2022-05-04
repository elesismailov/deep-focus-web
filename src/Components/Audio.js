import { useRef } from 'react';

import TimerState from './TimerState';

import finish1 from './audio/finish-1.wav';


function Audio() {
	const audioEl = useRef(null);

	function play(mode) {
		
		let audio = audioEl.current;

		audio.currentTime = 0

		if (mode === 1) { // audio for the work session
			audio.play()
		} else if ( mode === 0) { // audio for the brake session
			audio.play()
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