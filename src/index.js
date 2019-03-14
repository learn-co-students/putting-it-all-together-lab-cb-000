import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import createStore from './store'
import blackjack_reducer from 'components/blackjack_reducer'


store = createStore(blackjack_reducer);
function renderApp() {
ReactDOM.render(<App store={store}/>, document.getElementById('container'))
}

store.subscribe(render)
store.dispatch(fetchDeck())
store.dispatch(setAICards(store.getState()))
store.dispatch(setUserCards(store.getState()))

require('../test/index-test.js')  // Leave this in!
