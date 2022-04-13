'use strict'

function setDOMTimer(time) {
    document.querySelector("#time").innerHTML = `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}`;

}

// sessionLength = 1_500_000
let sessionLength = 10_000

// startTime is going to be set by the user
let startTime = new Date()

// endTime is the value when the timer is over
let endTime = new Date(startTime.getTime() + sessionLength)

setDOMTimer(sessionLength)

console.log(startTime, endTime)

let isPaused = false; 

function setTimer() {
	if (isPaused) {
		return
	}

	let date = new Date()
	let leftTime = endTime.getTime() - date.getTime()

	
	if (date >= endTime) {
		// session is over
		// save the work
		return 
	}
	
	setDOMTimer(leftTime)
	
	setTimeout(setTimer, 500)
	
}

setTimer()



// time modes: running, paused, break

pauseButton.onclick = function() {
	time.setAttribute('data-mode', 'paused')
	isPaused = true
	console.log('set isPaused to', isPaused)
	console.log(new Date())
}

startButton.onclick = function(event) {

}