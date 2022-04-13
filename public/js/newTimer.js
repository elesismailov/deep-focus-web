'use strict'

function setDOMTimer(time) {
    document.querySelector("#time").innerHTML = `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}`;

}

// sessionLength = 1_500_000
let sessionLength = 10_000

// startTime is going to be set by the user
let startTime = Date.now()

// endTime is the value when the timer is over
let endTime = startTime + sessionLength

let leftTimeWhenPaused = null;

setDOMTimer(sessionLength)

console.log(startTime, endTime)

let isPaused = false; 

function main() {
	if (isPaused) {
		return
	}

	let date = Date.now()
	let leftTime = endTime - date

	
	if (date >= endTime) {
		// session is over
		// save the work
		return 
	}
	
	setDOMTimer(leftTime)
	
	setTimeout(main, 500)
	
}


// time modes: running, paused, break

pauseButton.onclick = function() {
	isPaused = true;
	let now = Date.now();
	leftTimeWhenPaused = endTime - now;

	time.setAttribute('data-mode', 'paused')
}

startButton.onclick = function(event) {
	startTime = Date.now();
	isPaused = false;

	endTime = startTime + (leftTimeWhenPaused ? leftTimeWhenPaused : sessionLength);

	time.setAttribute('data-mode', 'running')
	main()
}