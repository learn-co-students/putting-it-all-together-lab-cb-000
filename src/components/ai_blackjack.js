import React from 'react'

export default class aiBlackjack extends React.component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          Computer
        </h1>
        <h2>
          {this.props.score}
        </h2>
        <ul>
        {store.getState().aiCards.map (function(element){
          return (
            <li>
              element.name
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}
