import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import './index.css';
import tictactoeReducer from './TicTacToe.reducer';
import TicTacToe from './TicTacToe';
import { Provider } from 'react-redux';



function reducer(state = {}, action){
  return{
    gameState: tictactoeReducer(state.gameState, action)
  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const TicTacToeContainer = ReactRedux.connect(
  state => ({
    currentPlayer: state.gameState.currentPlayer,
    gameBoard: state.gameState.gameBoard,
    winner: state.gameState.winner
  }),
  dispatch => ({
    markSquare: (idx) => dispatch({
      type: 'markSquare',
      idx: idx
    })
  })
)(TicTacToe);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <TicTacToeContainer/>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
