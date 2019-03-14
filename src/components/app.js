import React from 'react'
import userBlackjack from 'user_blackjack'
import aiBlackjack from 'ai_blackjack'
import {fetchDeck, setAICards, setUserCards, hitAI, hitUser} from '../actions/blackjack_actions'

export default class App extends React.component {
  hitMe = (caller) => {
    if caller === "user" {
      store.dispatch(hitUser(store.getState().deck))
    }
    else {
      store.dispatch(hitAI(store.getState().deck))
    }
  }
  calculateAIScore = () => {
    cards = store.getState().aiCards ;
    let points = 0;
    cards.forEach(function(element) {
      points += element.value ;
    });
    return points ;
  }
  calculateUserScore = () => {
    cards = store.getState().userCards ;
    let points = 0;
    cards.forEach(function(element) {
      points += element.value ;
    });
    return points ;
  }

  stay = () => {
    let aiPoints = calculateAIScore();
    let userPoints = calculateUserScore();
    if (userPoints > aiPoints && userPoints < 22) {
      return true
    }
    else {
      return false
    }
  }
  render() {
    return (
      <div>
        <aiBlackjack score={this.calculateAIScore} userscore={this.calculateUserScore} />
        <userBlackjack hitMe={this.hitMe} score={this.calculateUserScore} aiscore={this.calculateAIScore} stay={this.stay} calculateAIScore={this.calculateAIScore} calculateUserScore={this.calculateUserScore} />
      </div>
    )
  }
}
