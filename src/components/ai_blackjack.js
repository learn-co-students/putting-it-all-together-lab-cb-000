import React from 'react'

const AIBlackjack = (props) => {
  return(
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score()}</h2>
      <ul>
        {props.aiCards.map(({name,value})=> <li>{name}</li>)}
      </ul>
    </div>
  );
}

export default AIBlackjack;
