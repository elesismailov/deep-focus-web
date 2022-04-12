
// sessionLength = 1_500_000
sessionLength = 10_000

// startTime is going to be set by the user
startTime = new Date()

// endTime is the value when the timer is over
endTime = new Date(startTime.getTime() + sessionLength)

setDOMTimer(sessionLength)

console.log(startTime, endTime)

function setTimer() {

	date = new Date()
	leftTime = endTime.getTime() - date.getTime()

	
	if (date >= endTime) {
		// session is over
		// save the work
		return 
	}
	
	setDOMTimer(leftTime)
	
	setTimeout(setTimer, 500)
	
}

setTimeout(setTimer, 900)


function setDOMTimer(time) {
    document.querySelector("#time").innerHTML = `${("0" + Math.floor(time/1000/60)).slice(-2)}:${("0" + Math.floor(time/1000%60)).slice(-2)}`;

}
