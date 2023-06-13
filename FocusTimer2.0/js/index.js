import { Timer } from "./timer.js"
import { Cards } from "./cards.js"
import { Events } from "./events.js" 
import {
    buttonPlay,
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
} from "./elements.js"


const timer = Timer({
  secondsDisplay,
  minutesDisplay,
  timerTimeout,
  buttonPlay,
  resetMinutes,
  resetSeconds
})

const cards = Cards({
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
  forestSound,
  rainSound,
  coffeeShopSound,
  fireplaceSound
})

Events({timer, cards})