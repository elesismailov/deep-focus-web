'use strict'

// sessionLength = 1_500_000
let sessionLength = 10_000

// startTime is going to be set by the user
let startTime = Date.now()

// endTime is the value when the timer is over
let endTime = startTime + sessionLength

let leftTimeWhenPaused = null;

setDOMTimer(sessionLength)

let isPaused = false; 

// time modes: running, paused, break, reset

pauseButton.onclick = pause;
startButton.onclick = resume;



function setDOMTimer(time) {
    document.querySelector("#time").innerHTML = `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}`;

}

function main() {
	if (isPaused) {
		return
	}

	let date = Date.now()
	let leftTime = endTime - date

	
	if (date >= endTime) {
		console.log('timer has stopped')
		// session is over
		// save the work
		// ?start the break or reset
		return 
	}
	
	setDOMTimer(leftTime)
	
	setTimeout(main, 500)
	
}

function resume() {
	isPaused = false;

	startTime = Date.now();
	endTime = startTime + (leftTimeWhenPaused ? leftTimeWhenPaused : sessionLength);

	time.setAttribute('data-mode', 'running')
	main()
}

function pause() {
	isPaused = true;

	let now = Date.now();
	leftTimeWhenPaused = endTime - now;

	time.setAttribute('data-mode', 'paused')
}
