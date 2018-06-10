export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(game){

  return {
    type: 'FETCH_DECK',
    payload: gameClone
  }
}

export function setUserCards(deck){
  return {
    type: 'FETCH_DECK',
    payload: ['','']
  }
}
