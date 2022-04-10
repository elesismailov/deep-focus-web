
// sessionLength = 1_500_000
sessionLength = 10_000

// startTime is going to be set by the user
startTime = new Date()

// endTime is the value when the timer is over
endTime = new Date(startTime.getTime() + sessionLength)

console.log(startTime, endTime)

function setTimer() {

	date = new Date()
	leftTime = endTime.getTime() - date.getTime()

	
	if (date >= endTime) {
		// session is over
		// save the work
		return 
	}
	
	setTimeout(setTimer, 500)
	
}

setTimeout(setTimer, 500)
