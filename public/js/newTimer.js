
// sessionLength = 1_500_000
sessionLength = 10_000

// startTime is going to be set by the user
startTime = new Date()

// endTime is the value when the timer is over
endTime = new Date(startTime.getTime() + sessionLength)

document.querySelector("#time").innerHTML = `${("0" + Math.floor(sessionLength/1000/60)).slice(-2)}:${("0" + Math.floor(sessionLength/1000%60)).slice(-2)}`;

console.log(startTime, endTime)

function setTimer() {

	date = new Date()
	leftTime = endTime.getTime() - date.getTime()

	
	if (date >= endTime) {
		// session is over
		// save the work
		return 
	}
	
	// update DOM timer
    document.querySelector("#time").innerHTML = `${("0" + Math.floor(leftTime/1000/60)).slice(-2)}:${("0" + Math.floor(leftTime/1000%60)).slice(-2)}`;
	
	setTimeout(setTimer, 500)
	
}

setTimeout(setTimer, 900)
