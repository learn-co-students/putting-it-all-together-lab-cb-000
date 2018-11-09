import React, { Component } from 'react'
import UserBlackjack from './user_blackjack'
import AIBlackjack from './ai_blackjack'
import { hitAi, hitUser } from '../actions/blackjack_actions'

export default class App extends Component {
  constructor(props){
    super(props);

    this.hitMe = this.hitMe.bind(this)
    this.stay = this.stay.bind(this)
    this.calculateAiScore = this.calculateAiScore.bind(this)
    this.calculateUserScore = this.calculateUserScore.bind(this)
  }

  hitMe(user){
    const storeState = this.props.store.getState().deck;
    user === true ? this.props.store.dispatch(hitUser(storeState)) : this.props.store.dispatch(hitAi(storeState));
  }

  calculateAiScore(){
    const ai = this.props.store.getState().aiCards.reduce((accumulator, currentValue) => {return accumulator + currentValue.value }, 0);
    return (ai > 21 ? "Over 21" : ai)
  }

  calculateUserScore(){
    const user = this.props.store.getState().userCards.reduce((accumulator, currentValue) => {return accumulator + currentValue.value }, 0);
    return (user > 21 ? "Over 21" : user)
  }

  stay() {
    const userScore = this.calculateUserScore;
    const aiScore = this.calculateAiScore;
    if (userScore !== "Over 21") {
      while (userScore > aiScore) {
        return aiScore === "Over 21" ? nil : this.hitMe(false)
      }
    }
  }

  render() {
    const getUserCards = this.props.store.getState().userCards;
    const getAiCards = this.props.store.getState().aiCards;
    return(
      <div>
        <UserBlackjack userCards={ getUserCards } hitMe={ this.hitMe } score={ this.calculateUserScore } stay={this.stay } calculateAiScore={ this.calculateAiScore } />
        <AIBlackjack aiCards={ getAiCards } hitMe={ this.hitMe } score={ this.calculateAiScore } userScore={ this.calculateUserScore } />
      </div>
    )
  }
}
