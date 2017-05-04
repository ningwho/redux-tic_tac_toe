import React from 'react';

export default class TicTacToe extends React.Component{
  render () {
    return (
      <div className="tictactoe">
      {this.props.gameBoard.map((piece, idx) =>
      <button key={idx}
        onClick={() => this.props.markSquare(idx)}>{piece}</button>
      )}

      {this.props.winner}
      if ({this.props.winner} === 'draw') {
        <H1>DRAW</H1>
      } ELSE {
        <h1>winner</h1>
        {THIS.PROPS.WINNER}
      }
      </div>
    )
  }
}
