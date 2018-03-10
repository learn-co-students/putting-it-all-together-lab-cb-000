import React from 'react';
import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';
import { hitAI, hitUser } from '../actions/blackjack_actions'

export default class App extends React.Component {
  
  hitMe(user, ev) {
    ev ? ev.preventDefault() : null;
    if (user) {
      this.props.store.dispatch(hitUser(this.props.store.getState().deck));
    } else {
      this.props.store.dispatch(hitAI(this.props.store.getState().deck));
    }
  }

  calculateAiScore() {
    return this.props.store.getState().aiCards.reduce((total, card) => { return total + card.value }, 0);
  }

  calculateUserScore() {
    return this.props.store.getState().userCards.reduce((total, card) => { 
      return total + card.value
    }, 0);
  }

  stay(ev) {
    ev.preventDefault();
    this.calculateAiScore() < this.calculateUserScore() ? this.hitMe() : null;
  }

  render() {
    const { userCards, aiCards } = this.props.store.getState();
    return (
      <div>
        <UserBlackjack userCards={userCards} stay={this.stay.bind(this)} hitMe={this.hitMe.bind(this, true)} score={this.calculateUserScore.bind(this)} />
        <AIBlackjack aiCards={aiCards} score={this.calculateAiScore.bind(this)} />
      </div>
    ) 
  }
}
