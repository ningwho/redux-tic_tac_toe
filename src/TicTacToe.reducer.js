const INITIAL_STATE ={
  currentPlayer: 'X',
  gameBoard: ['','','','','','','','',''],
  winner: ''
};

function isWin(a, b, c, board, currentPlayer) {
  if (board[a] === board[b] && board[b] === board[c] && board[b] === currentPlayer) {
    return true;
  } else {
    return isDraw(board);
  }
}

function isDraw(board) {
  return board.every(squre => !! square);
}

const getWinner = function(board, currentPlayer) {
  if (isWin(0, 1, 2, board, currentPlayer) ||
  isWin(3, 4, 5, board, currentPlayer) ||
  isWin(6, 7, 8, board, currentPlayer) ||
  isWin(0, 3, 6, board, currentPlayer) ||
  isWin(1, 4, 7, board, currentPlayer) ||
  isWin(2, 5, 8, board, currentPlayer) ||
  isWin(0, 4, 8, board, currentPlayer) ||
  isWin(2, 4, 6, board, currentPlayer)) {
    return true;
  } else {
    return false;
  }
}


export default function reducer(state=INITIAL_STATE, action) {
  if (action.type === "markSquare") {
    if (state.gameBoard[action.idx] === '') {
      let newBoard = state.gameBoard.map(function(piece, idx){
        if (idx === action.idx) {
          return state.currentPlayer;
        }else{
          return piece;
        }
      })

      if (getWinner(newBoard, state.currentPlayer)){
        console.log('Im here');

        return Object.assign({}, state, {
          gameBoard: newBoard,
          winner: state.currentPlayer
        });
      }else if {
        return Object.assign({}, state, {
          gameBoard: newBoard,
          currentPlayer: state.currentPlayer === 'O' ? 'X':'O',
      });
    } else if (isDraw(newBoard)) {
        return Object.assign({}, state, {
          gameBoard: newBoard,
          winner: 'draw'
      });
      }
    }
  } else {
  return state;
  }
}
