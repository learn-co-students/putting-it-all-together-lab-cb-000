export function fetchDeck() {
  return { type: 'FETCH_DECK' };
}

export function setAICards(state) {
  let newState = JSON.parse(JSON.stringify(state))

  for (let i = 0; i < 2; i++) {
    const randIndex = Math.floor(Math.random() * newState.deck.length)
    newState.aiCards.push(newState.deck[randIndex])
    newState.deck.splice(randIndex, 1)
  }
  return { type: 'SET_CARDS', payload: newState };
}

export function setUserCards(state) {
  let newState = JSON.parse(JSON.stringify(state))

  for (let i = 0; i < 2; i++) {
    const randIndex = Math.floor(Math.random() * newState.deck.length)
    newState.userCards.push(newState.deck[randIndex])
    newState.deck.splice(randIndex, 1)
  }
  return { type: 'SET_CARDS', payload: newState };
}

export function hitAI(deck) {
  const card = deck[Math.floor(Math.random() * deck.length)];
  return { type: 'HIT_AI', payload: card }
}

export function hitUser(deck) {
  const card = deck[Math.floor(Math.random() * deck.length)];
  return { type: 'HIT_USER', payload: card }
}
