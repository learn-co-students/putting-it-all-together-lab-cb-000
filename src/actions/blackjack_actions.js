export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(deck){
  const newDeck = JSON.parse(JSON.stringify(deck))
  for (var i = 0; i < 2; i++) {
    var rando = Math.floor(Math.random() * newDeck.deck.length)
    newDeck.aiCards.push(newDeck.deck[rando])
    newDeck.deck.splice(rando, 1)
  }

  return {
    type: "SET_AI_CARDS",
    payload: newDeck
  }
}

export function setUserCards(deck){
  const newDeck = JSON.parse(JSON.stringify(deck))
  for (var i = 0; i < 2; i++) {
    var rando = Math.random() * newDeck.deck.length
    newDeck.userCards.push(newDeck.deck[Math.floor(rando)])
    newDeck.deck.splice(Math.floor(rando), 1)
  }

  return {
    type: "SET_USER_CARDS",
    payload: newDeck
  }
}

export function hitAi(deck){
  var rando = Math.floor(Math.random() * deck.length);
  return {
    type: "HIT_AI",
    payload: deck[rando]
  }
}

export function hitUser(deck){
  var rando = Math.floor(Math.random() * deck.length);
  return {
    type: "HIT_USER",
    payload: deck[rando]
  }
}
