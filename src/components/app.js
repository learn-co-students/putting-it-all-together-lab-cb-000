import React, { Component } from 'react';

import UserBlackjack from './user_blackjack';
import AIBlackjack from './ai_blackjack';

//need to import actions
import { hitUser, hitAi } from '../actions/blackjack_actions';

export default class App extends Component {
  constructor(props){
    super(props);

    this.hitMe = this.hitMe.bind(this);
    this.calculateAiScore = this.calculateAiScore.bind(this);
    this.calculateUserScore = this.calculateUserScore.bind(this);
    this.stay = this.stay.bind(this);
  }

  hitMe(user){
    const { store } = this.props;
    if (user === 'user'){
      //human player
      store.dispatch(hitUser(store.getState().deck));
    }else{
      //ai player
      store.dispatch(hitAi(store.getState().deck));
    }
  }

  calculateAiScore(){
    const { store } = this.props;
    const aiScore = store.getState().aiCards.reduce((acc, valObj) => {
      return acc += valObj.value;
    }, 0);

    if(aiScore > 21){
      return 'Bust';
    }else{
      return aiScore;
    }
  }

  calculateUserScore(){
    const { store } = this.props;
    const userScore = store.getState().userCards.reduce((acc, valObj) => {
      return acc += valObj.value;
    }, 0);

    if(userScore > 21){
      return 'Bust';
    }else{
      return userScore;
    }
  }

  stay(){
    if (this.calculateUserScore !== 'Bust'){
      while (this.calculateAiScore() < this.calculateUserScore()){
        if (this.calculateAiScore() === 'Bust'){
          return;
        }
        this.hitMe('ai');
      }
    }
  }

  render(){
    const { store } = this.props;

    return (
      <div>
        <UserBlackjack userCards={store.getState().userCards} hitMe={this.hitMe} score={this.calculateUserScore} stay={this.stay}/>
        <AIBlackjack aiCards={store.getState().aiCards} hitMe={this.hitMe} score={this.calculateAiScore} stay={this.stay}/>
      </div>
    );
  }
}
