var startTime = 0;

function startTimer() {
    console.log("Timer started");
    startTime = new Date().getTime();
}

//end timer, clear values, return timer difference in MS
function stopTimer() {
    console.log("Timer ended");
    var endTime = new Date().getTime();

    var timeDiff = endTime - startTime; //in ms

    startTime = 0;
    return timeDiff;
}

//timer is active if start time is greater than 0
function isTimerRunning() {
    return startTime > 0;
}