export const fetchDeck = () => {
  //have to return {} with type that invokes our reducer case statement
  return {
    type: 'FETCH_DECK'
  }
}

export const setAICards = (game) => {
  //for simple deep clone we can do JSON.parse(JSON.stringify)
  let gameClone = JSON.parse(JSON.stringify(game));

  //take our gameclone, randomly pick 2 cards
  //remove those 2 cards from the deck
  for(let i=0; i < 2; i++){
    //select card between 0 and deck length
    const randIndex = Math.floor(Math.random() * gameClone.deck.length);
    //grab card from deck and put into reducer aiCards
    gameClone.aiCards.push(gameClone.deck[randIndex]);
    //remove picked card from deck
    gameClone.deck.splice(randIndex, 1);
  }
  //need to add SET_AI_CARDS to reducer
  return {
    type: 'SET_AI_CARDS',
    payload: gameClone
  }
}

export const setUserCards = (game) => {
  //basically exact same code as AI cards above
  //for simple deep clone we can do JSON.parse(JSON.stringify)
  let gameClone = JSON.parse(JSON.stringify(game));

  //take our gameclone, randomly pick 2 cards
  //remove those 2 cards from the deck
  for(let i=0; i < 2; i++){
    //select card between 0 and deck length
    const randIndex = Math.floor(Math.random() * gameClone.deck.length);
    //grab card from deck and put into reducer userCards
    gameClone.userCards.push(gameClone.deck[randIndex]);
    //remove picked card from deck
    gameClone.deck.splice(randIndex, 1);
  }
  //need to add SET_AI_CARDS to reducer
  return {
    type: 'SET_USER_CARDS',
    payload: gameClone
  }
}

//we pass in the given deck, add a card to the players list of cards
export const hitAi = (deck) => {
  const randIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randIndex];

  return {
    type: 'HIT_AI',
    payload: card
  }
}

export const hitUser = (deck) => {
  const randIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randIndex];

  return {
    type: 'HIT_USER',
    payload: card
  }
}
