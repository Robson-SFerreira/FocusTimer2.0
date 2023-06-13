export function Timer({
  secondsDisplay,
  minutesDisplay,
  timerTimeout,
  buttonPlay,
  resetMinutes,
  resetSeconds
}) {
  function countdown() {
    timerTimeout = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      if (minutes <= 0) {
        stop()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  function play() {
    buttonPlay.classList.add('hide')
    countdown()
  }
  function stop() {
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeout)
    updateTimerDisplay(resetMinutes, resetSeconds)
  }
  function increaseTimer() {
    let currentMinutes = Number(minutesDisplay.textContent)
    let updateMinutes = currentMinutes + 5
    
    updateTimerDisplay(updateMinutes, secondsDisplay.textContent)
  }
  function decreaseTimer() {
    let currentMinutes = Number(minutesDisplay.textContent)
    let updateMinutes = currentMinutes - 5
    
    updateTimerDisplay(updateMinutes, secondsDisplay.textContent)
  }

  return {
    countdown,
    updateTimerDisplay,
    play,
    stop,
    increaseTimer,
    decreaseTimer
  }
}