export function fetchDeck() {
  return {type: 'FETCH_DECK'}
}
export function setAICards(deck){
  var dex = Math.floor(Math.random() * 51);
  var dex2 =  Math.floor(Math.random() * 51);
  var card1 = deck[dex];
  var card2 = deck[dex2];
  return {
    type: 'SET_AI_CARDS',
    payload: [card1, card2]
  }
}
export function setUserCards(deck){
  var dex = Math.floor(Math.random() * 51);
  var dex2 =  Math.floor(Math.random() * 51);
  var card1 = deck[dex];
  var card2 = deck[dex2];
  return {
    type: 'SET_USER_CARDS',
    payload: [card1, card2]
  }
}
export function hitAI(deck){
  var dex = Math.floor(Math.random() * 51);
  var card1 = deck[dex];
  return {
    type: 'HIT_AI',
    payload: card1
  }
}
export function hitUser(deck){
  var dex = Math.floor(Math.random() * 51);
  var card1 = deck[dex];
  return {
    type: 'HIT_USER',
    payload: card1
  }
}
