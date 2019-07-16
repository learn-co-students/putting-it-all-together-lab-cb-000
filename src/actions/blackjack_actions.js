import {cloneDeep} from 'lodash';

export function fetchDeck(){
  return {
    type: 'FETCH_DECK'
  }
}

export function setAICards(game){
  //let gameClone = JSON.parse(JSON.stringify(game))
  //let gameClone = Object.assign({}, game);
  //let gameClone = {...game, {userCards: [...game.userCards]}, {aiCards: [...game.aiCards]}, {deck: [...game.deck]}}
  let gameClone = cloneDeep(game);

  for (var i = 0; i < 2; i++) {
    const randIndex = Math.floor(Math.random() * gameClone.deck.length)
    gameClone.aiCards.push(gameClone.deck[randIndex])
console.log(gameClone.aiCards);
    gameClone.deck.splice(randIndex, 1)
  }

  return {
    type: 'SET_AI_CARDS',
    payload: gameClone
  }
}

export function setUserCards(game){
  let gameClone = JSON.parse(JSON.stringify(game))
  //let gameClone = Object.assign({}, game);
  //let gameClone = {...game, {userCards: [...game.userCards]}, {aiCards: [...game.aiCards]}, {deck: [...game.deck]}}

  for (var i = 0; i < 2; i++) {
    const randIndex = Math.floor(Math.random() * gameClone.deck.length)
    gameClone.userCards.push(gameClone.deck[randIndex])
    gameClone.deck.splice(randIndex, 1)
  }

  return {
    type: 'SET_USER_CARDS',
    payload: gameClone
  }
}

export function hitUser(deck){

  const newUserCard = deck[Math.floor(Math.random() * deck.length)]

  return {
    type: 'HIT_USER',
    payload: newUserCard
  }
}

export function hitAi(deck){

  const newAiCard = deck[Math.floor(Math.random() * deck.length)]

  return {
    type: 'HIT_AI',
    payload: newAiCard
  }
}
