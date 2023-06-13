const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const resetMinutes = Number(minutesDisplay.textContent)
const resetSeconds = Number(secondsDisplay.textContent)
let timerTimeout

const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffeeShop = document.querySelector('.coffee-shop')
const cardFireplace = document.querySelector('.fireplace')

const forestSound = document.querySelector('.forest audio')
const rainSound =  document.querySelector('.rain audio')
const coffeeShopSound = document.querySelector('.coffee-shop audio')
const fireplaceSound = document.querySelector('.fireplace audio')

export {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  minutesDisplay,
  secondsDisplay,
  resetMinutes,
  resetSeconds,
  timerTimeout,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
  forestSound,
  rainSound,
  coffeeShopSound,
  fireplaceSound
}