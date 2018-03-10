import React from 'react';

const AIBlackjack = props => {
  return (
    <div>
      <h1>Computer</h1>
      <h2>Score: {props.score() > 21 ? 'BUST' : props.score()}</h2>
      <ul>
        {
          props.aiCards.map((card, index) => {
            return (
              <li key={index}>
                <h3>{card.name}</h3>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default AIBlackjack;
