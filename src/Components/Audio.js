
import TimerState from './TimerState';


function Audio() {

	function play(mode) {

		console.log('Audio notification')
		
	}

	return(
		<>	
			<TimerState play={play}/>
		</>
	);

}


export default Audio;