import React from 'react';

const UserBlackjack = props => {
  return (
    <div>
      <h1>Player1</h1>
      <h2>Score: {props.score() > 21 ? 'BUST' : props.score()}</h2> 
      <ul>
        {
          props.userCards.map((card, index) => {
            return (
              <li key={index}>
                <h3>{card.name}</h3>
              </li>
            )
          })
        }
      </ul>
      <form onSubmit={props.hitMe}>
        <button> Hit Me </button>
      </form>
      <form onSubmit={props.stay}>
        <button> Stay </button>
      </form>
    </div>
  )
}

export default UserBlackjack;
