import React from 'react'

export default class userBlackjack extends React.component() {
  constructor(props) {
    super(props);
  }
  handleHit = (event) => {
    event.preventDefault();
    this.props.hitMe("user");
  }
  handleStay = (event) => {
    event.preventDefault();
    this.props.stay();
  }
  render() {
    return (
      <div>
        <h1>
          Player 1
        </h1>
        <h2>
          {this.props.score}
        </h2>
        <ul>
            {store.getState().userCards.map (function(element){
              return (
                <li>
                  element.name
                </li>
              )
            })}
        </ul>
        <form onSubmit={event => this.handleHit(event)}>
          <input type="button" action="submit">
            hit me
          </input>
        </form>
        <form obSubmit={event => this.handleStay(event)}>
          <input type="button" action="submit">
            stay
          </input>
        </form>
      </div>
    )
  }
}
