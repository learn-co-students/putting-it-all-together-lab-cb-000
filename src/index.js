import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import blackjack_reducer from './reducers/blackjack_reducer';

import { createStore } from './store';
const store = createStore(blackjack_reducer);

ReactDOM.render(<App store={store}/>, document.getElementById('container'))

store.subscribe(render)
store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

require('../test/index-test.js')  // Leave this in!
