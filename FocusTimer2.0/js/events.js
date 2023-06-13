import {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
} from "./elements.js"


export function Events({timer, cards}) {
buttonPlay.addEventListener('click', () => {
  timer.play()
})
buttonStop.addEventListener('click', () => {
  timer.stop()
})
buttonIncrease.addEventListener('click', () => {
  timer.increaseTimer()
});
buttonDecrease.addEventListener('click', () => {
  timer.decreaseTimer()
})

cardForest.addEventListener('click', () => {
  cards.controlCardForest()
})
cardRain.addEventListener('click', () => {
  cards.controlCardRain()
})
cardCoffeeShop.addEventListener('click', () => {
  cards.controlCardCoffeeShop()
})
cardFireplace.addEventListener('click', () => {
  cards.controlCardFirePlace()
})
}