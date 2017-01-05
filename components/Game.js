const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [ null, null, null, null, null, null, null, null, null ],
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault()
    this.setState({
      board: [ null, null, null, null, null, null, null, null, null ]
    })
  }

  handleClick (i, ev) {
    ev.preventDefault()
    var currentPlayer = this.state.turn === 'X' ? 'O' : 'X'
    var currentBoard = this.state.board.slice()
    currentBoard[i] = this.state.turn
    this.setState({
      board: currentBoard,
      turn: currentPlayer
    })
  }

  getWinner () {
    const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let board = this.state.board
    for(var combo of winningCombos) {
      let t1 = board[combo[0]]
      let t2 = board[combo[1]]
      let t3 = board[combo[2]]
      if(t1 === t2 && t2 === t3 && t1 === t3){
        return t1
      }
    }
  }

  isComplete () {
    return !this.state.board.includes(null)
  }

  render () {
    return (
      <div className="game">
        <Board board={this.state.board} onClick={this.handleClick} />
        {this.isComplete() ? <Status winner={this.getWinner()} /> : ''}

        <button className='game__reset' onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

module.exports = Game;
