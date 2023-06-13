export function Cards({
  cardForest,
  cardRain,
  cardCoffeeShop,
  cardFireplace,
  forestSound,
  rainSound,
  coffeeShopSound,
  fireplaceSound
}) {
  function controlCardForest() {
    if (cardForest.classList.contains('selected-card') == false) {
      cardForest.classList.add('selected-card')
      cardRain.classList.remove('selected-card')
      cardCoffeeShop.classList.remove('selected-card')
      cardFireplace.classList.remove('selected-card')
      rainSound.pause()
      coffeeShopSound.pause()
      fireplaceSound.pause()
      forestSound.play()
      forestSound.loop = true
    } else if (cardForest.classList.contains('selected-card') == true) {
      cardForest.classList.remove('selected-card')
      forestSound.pause()
    }
  }
  
  function controlCardRain() {
    if(cardRain.classList.contains('selected-card') == false) {
      cardRain.classList.add('selected-card')
      cardForest.classList.remove('selected-card')
      cardCoffeeShop.classList.remove('selected-card')
      cardFireplace.classList.remove('selected-card')
      forestSound.pause()
      coffeeShopSound.pause()
      fireplaceSound.pause()
      rainSound.play()
      rainSound.loop = true
    } else if(cardRain.classList.contains('selected-card') == true) {
      cardRain.classList.remove('selected-card')
      rainSound.pause()
    }
  }
  
  function controlCardCoffeeShop() {
    if(cardCoffeeShop.classList.contains('selected-card') == false) {
      cardCoffeeShop.classList.add('selected-card')
      cardForest.classList.remove('selected-card')
      cardRain.classList.remove('selected-card')
      cardFireplace.classList.remove('selected-card')
      forestSound.pause()
      rainSound.pause()
      fireplaceSound.pause()
      coffeeShopSound.play()
      coffeeShopSound.loop = true
    } else if(cardCoffeeShop.classList.contains('selected-card') == true) {
      cardCoffeeShop.classList.remove('selected-card')
      coffeeShopSound.pause()
    }
  }
  
  function controlCardFirePlace() {
    if(cardFireplace.classList.contains('selected-card') == false) {
      cardFireplace.classList.add('selected-card')
      cardForest.classList.remove('selected-card')
      cardRain.classList.remove('selected-card')
      cardCoffeeShop.classList.remove('selected-card')
      forestSound.pause()
      rainSound.pause()
      coffeeShopSound.pause()
      fireplaceSound.play()
      fireplaceSound.loop = true
    } else if(cardFireplace.classList.contains('selected-card') == true) {
      cardFireplace.classList.remove('selected-card')
      fireplaceSound.pause()
    }
  }

  return {
    controlCardForest,
    controlCardRain,
    controlCardCoffeeShop,
    controlCardFirePlace
  }
}